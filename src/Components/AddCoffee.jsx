import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const newCoffee = Object.fromEntries(new FormData(form));
    console.log(newCoffee);

    // send data to db
    fetch("https://coffee-store-server-eight-pink.vercel.app/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding coffee", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="p-24">
        {/* Back to Home */}
      <Link
        to="/"
        className="text-lg font-semibold text-[#374151] hover:underline mb-6 inline-block"
      >
        ← Back to home
      </Link>
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form
          onSubmit={handleAddCoffee}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Left Column Inputs */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Quantity</label>
            <input
              type="text"
              name="quantity"
              placeholder="Enter coffee quantity"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Supplier</label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter supplier name"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Taste</label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Enter category"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Details</label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="p-2 rounded border"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold mb-1">Photo</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="p-2 rounded border"
            />
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#D2B48C] hover:bg-[#b6976c] text-white font-bold py-2 px-6 rounded transition"
            >
              Add Coffee
            </button>
          </div>
        </form>
    </div>
  );
};

export default AddCoffee;
