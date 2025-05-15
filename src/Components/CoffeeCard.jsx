import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const { _id, name, chef, photo, price } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);

      if (result.isConfirmed) {
        // send delete request to server
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffees = coffees.filter(coffee => coffee._id !== id);
              setCoffees(remainingCoffees)
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] p-5 rounded-xl flex items-center gap-6 shadow-sm">
      <img
        src={photo}
        alt={name}
        className="w-28 h-36 object-cover rounded-lg"
      />

      <div className="flex-1">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {price} Taka
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Link to={`/coffeeDetails/${_id}`}>
          <button className="bg-[#D2B48C] hover:bg-[#c4a67e] p-2 rounded cursor-pointer">
            <Eye className="w-5 h-5 text-white" />
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-[#3C393B] hover:bg-[#2d2b2d] p-2 rounded cursor-pointer">
            <Pencil className="w-5 h-5 text-white" />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] hover:bg-[#d13e3b] p-2 rounded cursor-pointer"
        >
          <Trash2 className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
