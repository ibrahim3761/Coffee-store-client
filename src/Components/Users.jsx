import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const { currentUser, DeleteUser } = use(AuthContext)

  const handleDelete = (id, email) => {
  if (!currentUser || currentUser.email !== email) {
    Swal.fire({
      icon: "error",
      title: "Access Denied",
      text: "You can only delete your own account.",
    });
    return;
  }

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // send delete request to server
      fetch(`https://coffee-store-server-eight-pink.vercel.app/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });

            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);

            // Keep this as you requested
            DeleteUser(currentUser)
              .then(() => {
                console.log("User deleted from firebase");
              })
              .catch((error) => {
                console.log("Error deleting user from firebase", error);
              });
          }
        });
    }
  });
};



  return (
    <div>
      <h1>{initialUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                No
              </th>
              <th>Name</th>
              <th>email</th>
              <th>Account Creation time</th>
              <th>Last log in</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map((user,index) =><tr key={user._id}>
              <th>
                {index + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {user.email}
              </td>
              <td>{user.creationTime}</td>
              <td>
                {user.lastSignInTime}
              </td>
              <th className="flex gap-2">
                <button className="btn btn-ghost btn-xs">V</button>
                <button className="btn btn-ghost btn-xs">E</button>
                <button onClick={()=>handleDelete(user._id,user.email)} className="btn btn-ghost btn-xs">X</button>
              </th>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
