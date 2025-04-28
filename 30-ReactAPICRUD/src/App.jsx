import React, { useState, useEffect } from "react";
import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const updatedData = data.map((product) => ({
          ...product,
          id: uuidv4(),
        }));
        setData(updatedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const notify = (message) => {
    toast(message);
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      {loading ? (
        <div className="load-spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Products data={data} notify={notify} setData={setData} />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
