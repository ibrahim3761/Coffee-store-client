import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const {_id, name, quantity, photo, price, supplier, taste, details } =
    useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCoffee = Object.fromEntries(new FormData(form));
    console.log(updatedCoffee);
    // send updatedCoffe to DB
    fetch(`https://coffee-store-server-eight-pink.vercel.app/coffees/${_id}`, {
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(updatedCoffee)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after updating coffee", data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated Coffee successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="w-full px-4">
      {/* Back to Home */}
      <Link
        to="/"
        className="text-lg font-semibold text-[#374151] hover:underline mb-6 inline-block"
      >
        ← Back to home
      </Link>

      {/* Update Coffee Card */}
      <div className="bg-[#F4F3F0] p-10 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#374151] mb-4">
          Update Existing Coffee Details
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 mb-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Left Column Inputs */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Quantity</label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Enter coffee quantity"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Supplier</label>
            <input
              type="text"
              defaultValue={supplier}
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
              defaultValue={taste}
              placeholder="Enter coffee taste"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter category"
              className="p-2 rounded border"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="p-2 rounded border"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold mb-1">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="p-2 rounded border"
            />
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#D2B48C] hover:bg-[#b6976c] text-white font-bold py-2 px-6 rounded transition"
            >
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
