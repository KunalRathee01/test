
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
const Todo = dynamic(() => import("@/components/Todos"), {
  ssr:true,
});

const Todos = () => {
  return (
    <div>
       <h1 className="text-4xl font-bold"> Some Todos</h1> 
       <Todo />
    </div>
  )
}

export default Todos;