import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleWishlistToggle = () => {
    dispatch(toggleWishlist(product));

    if (isInWishlist) {
      toast.info("product deleted from wishlist");
    } else {
      toast.success("product added to wishlist");
    }
  };

  return (
    <div className="card m-2 d-flex flex-column justify-content-between" style={{ width: "16rem", position: "relative", height: "100%" }}>
      <img
        src={product.image}
        className="card-img-top p-3"
        style={{ height: "200px", objectFit: "contain" }}
        alt={product.title}
      />
      <div className="card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
        <div style={{ minHeight: "100px" }}>
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text">${product.price}</p>
        </div>
        <button className="btn btn-primary w-100 mt-auto">Add Basket</button>
      </div>
      <FaHeart
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          color: isInWishlist ? "red" : "lightgray",
          cursor: "pointer"
        }}
        onClick={handleWishlistToggle}
      />
    </div>
  );
};

export default ProductCard;
