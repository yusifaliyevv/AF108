import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import "./css/products.css";

const Products = ({ data, notify, setData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
  });

  const createTodo = () => {
    const newProductWithId = { id: uuidv4(), ...newProduct };
    setData((prevData) => [...prevData, newProductWithId]);
    notify("Product added successfully!");
    setNewProduct({ title: "", price: "", image: "" });
  };

  const updateTodo = () => {
    const updatedData = data.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product
    );
    setData(updatedData);
    notify("Product updated successfully!");
    setShowModal(false);
    setSelectedProduct(null);
  };

  const deleteTodo = (id) => {
    const filteredData = data.filter((product) => product.id !== id);
    setData(filteredData);
    notify("Product deleted successfully!");
  };

  const resetTodo = () => {
    setData([]);
    notify("All products have been reset.");
  };

  return (
    <div>
      <div className="btns">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Product
        </button>
        <button className="btn btn-danger" onClick={resetTodo}>
          Reset All Products
        </button>
      </div>

      <div className="products-list">
        {data.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.title}
              className="card-image"
            />
            <div className="card-content">
              <h3>{product.title}</h3>
              <p className="price">Price: ${product.price}</p>
              <p className="description">{product.description}</p>
              <p className="category">Category: {product.category}</p>
              <p className="rating">
                Rating: {product.rating?.rate} ⭐ ({product.rating?.count}{" "}
                reviews)
              </p>
            </div>

            <button
              className="btn btn-secondary"
              onClick={() => {
                setSelectedProduct(product);
                setShowModal(true);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(product.id)}
            >
              <MdDelete /> Delete
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h3>{selectedProduct ? "Update Product" : "Create Product"}</h3>
            <form>
              <div className="form-group">
                {/* <label htmlFor="productTitle">Title</label> */}
                <input
                  type="text"
                  id="productTitle"
                  className="form-control"
                  placeholder="Title"
                  value={
                    selectedProduct ? selectedProduct.title : newProduct.title
                  }
                  onChange={(e) => {
                    const updatedTitle = e.target.value;
                    if (selectedProduct) {
                      setSelectedProduct({
                        ...selectedProduct,
                        title: updatedTitle,
                      });
                    } else {
                      setNewProduct({ ...newProduct, title: updatedTitle });
                    }
                  }}
                />
              </div>

              <div className="form-group">
                {/* <label htmlFor="productPrice">Price</label> */}
                <input
                  type="text"
                  id="productPrice"
                  className="form-control"
                  placeholder="Price"
                  value={
                    selectedProduct ? selectedProduct.price : newProduct.price
                  }
                  onChange={(e) => {
                    const updatedPrice = e.target.value;
                    if (selectedProduct) {
                      setSelectedProduct({
                        ...selectedProduct,
                        price: updatedPrice,
                      });
                    } else {
                      setNewProduct({ ...newProduct, price: updatedPrice });
                    }
                  }}
                />
              </div>

              <div className="form-group">
                {/* <label htmlFor="productImage">Image URL</label> */}
                <input
                  type="text"
                  id="productImage"
                  className="form-control"
                  placeholder="Image URL"
                  value={
                    selectedProduct ? selectedProduct.image : newProduct.image
                  }
                  onChange={(e) => {
                    const updatedImage = e.target.value;
                    if (selectedProduct) {
                      setSelectedProduct({
                        ...selectedProduct,
                        image: updatedImage,
                      });
                    } else {
                      setNewProduct({ ...newProduct, image: updatedImage });
                    }
                  }}
                />
              </div>
            </form>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={selectedProduct ? updateTodo : createTodo}
              >
                {selectedProduct ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
