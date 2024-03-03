"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const ProductList = dynamic(() => import("@/components/ProductList"), {
  ssr: true,
});

const User = dynamic(() => import("@/components/User"), {
  ssr: true,
});

const Todo = dynamic(() => import("@/components/Todos"), {
  ssr: true,
});

export default function Hero() {

  const [product, setProduct] = useState(false);
  const [user, setUser] = useState(false);
  const [todo, setTodo] = useState(false);

  const handleProduct = () => {
    setProduct(true);
    setTodo(false);
    setUser(false);
  };

  const handleTodo = () => {
    setProduct(false);
    setTodo(true);
    setUser(false);
  };

  const handleUser = () => {
    setProduct(false);
    setTodo(false);
    setUser(true);
  };


  return (
    <div>
      <div className="flex  justify-evenly text-2xl">
        <div 
        onClick={handleProduct}
        className={`${
            product
              && "bg-black text-white rounded"
          } `}
        >  
          <Link href="/"> Products</Link>
        </div>

        <div
        onClick={handleUser}
        className={`${
            user
              && "bg-black text-white rounded"
          } `}
        >
          <Link href="/"> Users</Link>
        </div>

        <div
         onClick={handleTodo}
         className={`${
            todo
              && "bg-black text-white rounded"
          } `}
         >
          <Link href="/"> Todos</Link>
        </div>
      </div>

      {product && <ProductList />}
      {user && <User />}
      {todo && <Todo />}
    </div>
  );
}
