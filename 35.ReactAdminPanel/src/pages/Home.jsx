import { useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => dispatch(setProducts(res.data)));
  }, [dispatch]);

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
