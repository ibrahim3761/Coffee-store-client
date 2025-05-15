import React from "react";
import { useLoaderData, Link } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, quantity, photo, price, supplier, taste, details } = coffee;

  return (
    <div>
      <Link
        to="/"
        className="text-lg font-semibold text-[#374151] hover:underline mb-6 inline-block"
      >
        ← Back to home
      </Link>
      <div className="bg-[#F4F3F0] p-10 rounded-xl shadow-md">
        <div className="flex justify-evenly flex-col md:flex-row items-center gap-10">
          <img
            src={photo}
            alt={name}
            className="w-64 h-auto rounded-md shadow-md"
          />

          <div className="">
            <h2 className="text-2xl font-bold mb-4 text-[#331A15]">Niceties</h2>
            <p className="mb-2">
              <span className="font-bold">Name:</span> {name}
            </p>
            <p className="mb-2">
              <span className="font-bold">Quantity:</span> {quantity}
            </p>
            <p className="mb-2">
              <span className="font-bold">Supplier:</span> {supplier}
            </p>
            <p className="mb-2">
              <span className="font-bold">Taste:</span> {taste}
            </p>
            <p className="mb-2">
              <span className="font-bold">Price:</span> ${price}
            </p>
            <p className="mb-2">
              <span className="font-bold">Details:</span> {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
