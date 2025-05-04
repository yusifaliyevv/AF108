import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromBasket } from "../redux/basketSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./basket.css";

export default function Basket() {
  const { basketItems, total } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Basket</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {basketItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} width="50" />
              </td>
              <td>{item.title.slice(0, 20)}</td>
              <td>${item.price}</td>
              <td>
                <button
                  className="count-btn"
                  onClick={() => dispatch(decrement(item.id))}
                  disabled={item.count === 1}
                >
                  -
                </button>
                <span className="mx-2">{item.count}</span>
                <button
                  className="count-btn"
                  onClick={() => dispatch(increment(item.id))}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => {
                    dispatch(removeFromBasket(item.id));
                    toast.warn("Product removed");
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${total.toFixed(2)}</h4>
      <Link to="/" className="btn btn-primary mt-2">
        Back
      </Link>
    </div>
  );
}
