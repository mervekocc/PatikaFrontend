import "./CardProduct.css";
import { useState } from "react";

function CardProduct({ products, balance, updateBalance }) {
  return (
    <div className="cardProducts">
      <ProductList
        products={productsData}
        updateBalance={updateBalance}
        balance={balance}
      />
    </div>
  );
}

export default CardProduct;


const productsData = [
  { id: 1, name: "Dental Care", price: 50000, image: "./img/dentalCare.png" },
  {
    id: 2,
    name: "Laptop",
    price: 50000000,
    image: "./img/laptop.png",
  },
  { id: 3, name: "Book", price: 100, image: "./img/book.png" },
  {
    id: 4,
    name: "Apple Watch",
    price: 500000,
    image: "./img/appleWatch.png",
  },
  {
    id: 5,
    name: "Detergent",
    price: 750000,
    image: "./img/detergent.png",
  },
  {
    id: 6,
    name: "Dron",
    price: 60000000000,
    image: "./img/dron.png",
  },
  {
    id: 7,
    name: "Hamburger",
    price: 39900,
    image: "./img/hamburger.png",
  },
  {
    id: 8,
    name: "Iphone",
    price: 40000000,
    image: "./img/iphone.png",
  },
  {
    id: 9,
    name: "Shoe",
    price: 945999,
    image: "./img/shoe.png",
  },
];

//Listing of products on the card
function ProductList({ products, updateBalance, balance }) {
  const initialQuantities = {};
  for (const product of products) {
    initialQuantities[product.id] = 0;
  }

  const [quantities, setQuantities] = useState(initialQuantities);

  const handleQuantityChange = (productId, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + amount,
    }));
  };

  //add product
  const handleBuy = (product) => {
    if (quantities[product.id] >= 0 && product.price <= balance) {
      updateBalance(product.price, "buy", product);
      handleQuantityChange(product.id, 1);
    }
  };

  //product extraction
  const handleSell = (product) => {
    console.log("Sell button clicked for:", product.name);
    console.log("Current quantities:", quantities);
    if (quantities[product.id] > 0) {
      updateBalance(product.price, "sell", product);
      handleQuantityChange(product.id, -1);
    }
  };

  return (
    <div className="row ">
      {products.map((product) => (
        <div className="col-4 pb-3 " key={product.id}>
          <div className="card text-center ">
            <div className="card-body  ">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top "
              />
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text text-primary">
                ${product.price.toLocaleString()}
              </p>
              <div className="row  justify-content-center  ">
                <button
                  className="m-1 btn sellButton"
                  onClick={() => handleSell(product)}
                  disabled={quantities[product.id] <= 0}
                >
                  Sell
                </button>
                <p className="m-1 count border">{quantities[product.id]}</p>
                <button
                  className="m-1 buyButton"
                  onClick={() => handleBuy(product)}
                  disabled={product.price > balance}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
