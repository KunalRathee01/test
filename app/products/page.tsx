import dynamic from 'next/dynamic';
import React from 'react'
const ProductList = dynamic(() => import("@/components/ProductList"), {
  ssr:true,
});

const page = () => {
  return (
    <div>
       <h1 className="text-4xl font-bold">Product List</h1>
      <ProductList />
    </div>
  )
}

export default page