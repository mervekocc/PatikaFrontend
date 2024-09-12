import { useState } from "react";
import "./App.css";
import CardMoney from "./component/cardMoney/CardMoney";
import CardProduct from "./component/cardProduct/CardProduct";
import CardReceipt from "./component/cardReceipt/CardReceipt";

function App() {
  const [balance, setBalance] = useState(100000000000);
  const [cart, setCart] = useState({});

  const handleBalanceUpdate = (amount, type, product) => {
    if (type === "buy") {
      if (amount <= balance) {
        setBalance((prevBalance) => prevBalance - amount);
        setCart((prevCart) => ({
          ...prevCart,
          [product.id]: {
            ...product,
            quantity: (prevCart[product.id]?.quantity || 0) + 1,
            totalPrice:
              ((prevCart[product.id]?.quantity || 0) + 1) * product.price,
          },
        }));
      }
    } else if (type === "sell") {
      if ((cart[product.id]?.quantity || 0) > 0) {
        setBalance((prevBalance) => prevBalance + amount);
        setCart((prevCart) => {
          const updatedCart = { ...prevCart };
          if (updatedCart[product.id].quantity > 1) {
            updatedCart[product.id].quantity -= 1;
            updatedCart[product.id].totalPrice -= product.price;
          } else {
            delete updatedCart[product.id];
          }
          return updatedCart;
        });
      }
    }
  };

  return (
    <>
      <div>
        <CardMoney balance={balance} />
        <CardProduct balance={balance} updateBalance={handleBalanceUpdate} />
        {Object.keys(cart).length > 0 && <CardReceipt cart={cart} />}
      </div>
    </>
  );
}

export default App;
