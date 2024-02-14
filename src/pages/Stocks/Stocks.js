import { Link } from "react-router-dom";

export default function Stocks (props) {
  return (
    <div className="stocks">
      {currencies.map((stock) => {
        const { name, symbol, lastPrice, change, high, low, open } = stock;

        return (
          <Link to={`/stock/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};
