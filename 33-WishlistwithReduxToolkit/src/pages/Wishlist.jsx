import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {wishlist.length > 0 ? wishlist.map(product => (
        <ProductCard key={product.id} product={product} />
      )) : <p className="text-center mt-5">Wishlist is empty</p>}
    </div>
  );
};

export default Wishlist;
