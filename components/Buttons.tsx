import Link from 'next/link'
import React from 'react'

const Buttons = () => {
  return (
    <>
    <h1 className="text-center text-4xl font-bold">Lazy Load List</h1>
    <div className="flex  justify-evenly text-2xl">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link href='/products'> Products</Link></button>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link href='/users'> Users</Link></button>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link href='/todos'> Todos</Link></button>
      </div>
    </>
  )
}

export default Buttons;