"use client"
import React, { useState, useEffect } from "react";
import Loader from "./Loading";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/product");
        const products = await data.json();
        setProducts(products.products);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     
      {loading ? (
        <Loader />
      ) : (
        products.map((item) => (
          <h3 className="text-2xl text-600" key={item.id}>
            {item.title}
          </h3>
        ))
      )}
    </div>
  );
};

export default ProductList;










// const [isButtonClicked, setIsButtonClicked] = useState(false);

//   const [product, setProduct] = useState(true)
//   const [User, setUser] = useState(false)
//   const [todo, setTodo] = useState(true)

//   const handleProduct = () => {
//     setProduct(true);
//     setTodo(false);
//     setUser(false); 
//   };

//   const handleTodo = () => {
//     setProduct(false);
//     setTodo(true);
//     setUser(false); 
//   };

//   const handleUser= () => {
//     setProduct(false);
//     setTodo(false);
//     setUser(true); 
//   };

//   const handleButtonClick = () => {
//     setIsButtonClicked(true);
//   };
