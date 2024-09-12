import "./CardReceipt.css";

function CardReceipt({ cart }) {
  const cartItems = Object.values(cart);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="cardReceipt">
      <p className="font-weight-bold">Your Receipt</p>
      <ul className="list-unstyled">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="itemlist">
              <p className="a">
                {item.name}
              </p>
              <p className="a">${item.price.toLocaleString()}</p>
              <p className="a">x{item.quantity}</p>
              <p className=" a font-weight-bold " style={{color: '#1dbf95'}}>
                ${item.totalPrice.toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <hr style={{ border: "1px solid #000", margin: "20px 0" }} />
      <h3>Total ${totalPrice.toLocaleString()}</h3>
    </div>
  );
}

export default CardReceipt;
