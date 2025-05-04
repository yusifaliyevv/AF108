import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basketSlice';
import { toast } from 'react-toastify';
import './detail.css'

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  const handleAdd = () => {
    dispatch(addToBasket({ ...product, count }));
    toast.success("Added to basket");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h3>{product.title}</h3>
      <img src={product.image} width="200" />
      <p>{product.description}</p>
      <h5>${product.price}</h5>
      <div>
        <button className='counter-btn' disabled={count <= 1} onClick={() => setCount(c => c - 1)}>-</button>
        <span className="mx-3">{count}</span>
        <button className='counter-btn' onClick={() => setCount(c => c + 1)}>+</button>
      </div>
      <button onClick={handleAdd} className="btn btn-success mt-3">Add to Basket</button>
    </div>
  );
}
