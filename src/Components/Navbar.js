import React from 'react'

const Navbar = () => {
  return (
    <nav className="  top-0 container m-auto  w-full gap-10 flex flex-col md:flex-row">
      <div className="container m-auto ">
        <img className="w-10  sm:w-80 " src="./logo.jpg" alt="" />
      </div>
      <div className="container m-auto flex ">
        <ul className="flex  m-auto container gap-5 items-center justify-center">
          <li><a className="text-red-800 hover:text-violet-500 hover: border-b-2 border-yellow-700"href="index.js">Individuals</a></li>
          <li><a className="text-red-800 hover:text-violet-500  hover: border-b-2 border-yellow-700"href="index.js">Teams</a></li>
          <li><a className="text-red-800 hover:text-violet-500  hover: border-b-2 border-yellow-700"href="index.js">Enterprise</a></li>
          <li><a className="text-red-800 hover:text-violet-500  hover: border-b-2 border-yellow-700"href="index.js">Product</a></li>
          <li><a className="text-red-800 hover:text-violet-500  hover: border-b-2 border-yellow-700"href="index.js">Pricing</a></li>
          <li><a className="text-red-800 hover:text-violet-500  hover: border-b-2 border-yellow-700"href="index.js">Resources</a></li>

        </ul>
      </div>
      <div className="container m-auto flex gap-5 pl-10">
        <h1><button>LogIn</button></h1>
        <h1 className="text-white bg-blue-700 p-1 rounded hover:bg-blue-900"><button>Get Started</button></h1>

      </div>


    </nav>
  )
}

export default Navbar