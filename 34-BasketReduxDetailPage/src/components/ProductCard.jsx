import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basketSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/detail/${product.id}`);
  };

  const handleAddToBasket = (e) => {
    e.stopPropagation();
    dispatch(addToBasket(product));
    toast.success(`${product.title} added to basket`);
  };

  return (
    <div
      className="card m-2 shadow-sm"
      style={{ width: '18rem', cursor: 'pointer' }}
      onClick={handleCardClick}
    >
      <img src={product.image} className="card-img-top p-3" height="250" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1rem' }}>{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button
          className="btn btn-success btn-sm"
          onClick={handleAddToBasket}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
