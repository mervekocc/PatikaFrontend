import "./CardMoney.css";

//balance information
function CardMoney({ balance }) {
  return (
    <div className="cardMoney">
      <p className="money-text">${balance.toLocaleString()}</p>
    </div>
  );
}

export default CardMoney;
