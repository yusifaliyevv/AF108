import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    if (products.length === 0) {
      axios.get("https://fakestoreapi.com/products").then(res => {
        dispatch(setProducts(res.data));
      });
    }
  }, []);
  

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
