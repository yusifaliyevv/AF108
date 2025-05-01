import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && items.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      {status === "failed" && <p>Failed to load products.</p>}
    </div>
  );
};

export default Home;
