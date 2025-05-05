import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "../redux/adminSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { editApiProduct, deleteApiProduct } from "../redux/productSlice";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiProducts = useSelector((state) => state.product.products);
  const adminProducts = useSelector((state) => state.admin.products);

  const allProducts = [...apiProducts, ...adminProducts];

  const [form, setForm] = useState({ title: "", price: "", image: "" });
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setForm({ title: "", price: "", image: "" });
    setEditingId(null);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.image) {
      toast.error("Bütün sahələri doldurun!");
      return;
    }

    if (editingId !== null) {
      const isApiProduct = apiProducts.some((p) => p.id === editingId);
      if (isApiProduct) {
        dispatch(editApiProduct({ ...form, id: editingId }));
      } else {
        dispatch(editProduct({ ...form, id: editingId }));
      }
      toast.success("Product updated!");
    } else {
      const newProduct = { ...form, id: Date.now() };
      dispatch(addProduct(newProduct));
      toast.success("Product added!");
    }

    setForm({ title: "", price: "", image: "" });
    setEditingId(null);
    setShowModal(false);
  };

  const handleEdit = (product) => {
    setForm({
      title: product.title,
      price: product.price,
      image: product.image,
    });
    setEditingId(product.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const isApiProduct = apiProducts.some((p) => p.id === id);
    if (isApiProduct) {
      dispatch(deleteApiProduct(id));
    } else {
      dispatch(deleteProduct(id));
    }
    toast.info("Product deleted");
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>
      <button onClick={handleModalOpen} className="btn btn-success mb-3">
        Create Product
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>{editingId ? "Edit Product" : "Add Product"}</h4>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
              <div className="modal-actions">
                <button type="submit" className="btn btn-primary">
                  {editingId ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((p) => (
            <tr key={p.id}>
              <td>
                <img
                  src={p.image}
                  alt={p.title}
                  width="50"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/detail/${p.id}`)}
                />
              </td>
              <td>{p.title}</td>
              <td>${p.price}</td>
              <td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(p)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
