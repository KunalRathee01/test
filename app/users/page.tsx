import dynamic from 'next/dynamic';
import React from 'react'
const User = dynamic(() => import("@/components/User"), {
  ssr:true,
});

const page = () => {
  return (
    <div>
       <h1 className="text-4xl font-bold"> Users</h1> 
       <User />
    </div>
  )
}

export default page