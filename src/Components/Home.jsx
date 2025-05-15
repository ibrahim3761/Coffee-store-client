import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialcoffees = useLoaderData();
  const [coffees,setCoffees] = useState(initialcoffees);
  return (
    <div className="text-center max-w-6xl mx-auto">
      {/* Header */}
      <div className="pt-12">
        <p className="text-sm text-gray-500 italic">--- Sip & Savor ---</p>
        <h1 className="text-4xl font-semibold font-cursive text-[#331A15] mb-4 mt-2">
          Our Popular Products
        </h1>
        <Link to="/addCoffee">
          <button className="bg-[#D2B48C] hover:bg-[#b89c77] text-white font-medium py-2 px-4 rounded inline-flex items-center shadow-md cursor-pointer">
            Add Coffee
          </button>
        </Link>
      </div>

      {/* Coffee Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
