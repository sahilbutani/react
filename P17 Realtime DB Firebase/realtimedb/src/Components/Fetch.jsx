import React, { useEffect, useState } from "react";
import { ref, get, remove, update } from "firebase/database";
import { db } from "../config/firebase";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Fetch = () => {
  // If we fetch 1 Single Child
  //   const dbRef = ref(getDatabase());
  //   get(child(dbRef, `users/1718608308174`))
  //     .then((response) => {
  //       if (response.exists()) {
  //         console.log(response.val());
  //       }
  //       else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  // For Fetching Multiple Child
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const usersRef = ref(db, "users");
    get(usersRef)
      .then((response) => {
        if (response.exists()) {
          //jo response exist hse to..
          const usersData = response.val();
          //badha user ne fetch krva Array thi loop chalse..
          const usersArray = Object.keys(usersData).map((userId) => ({
            id: userId,
            ...usersData[userId],
          }));
          setUsers(usersArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  //User Delete krva..
  const handleDeleteUser = (userId, userFname, userLname) => {
    const userRef = ref(db, `users/${userId}`);
    remove(userRef)
      .then(() => {
        alert(`${userFname} ${userLname} deleted successfully.`);
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error(`Error deleting user: ${error.message}`);
      });
  };

  const handleEditUser = (
    userId,
    fname,
    lname,
    email,
    password,
    rpassword,
    phoneno,
    company
  ) => {
    setEditedUser({
      id: userId,
      fname,
      lname,
      email,
      password,
      rpassword,
      phoneno,
      company,
    });
  };

  const handleUpdateUser = () => {
    const { id, fname, lname, email, password, rpassword, phoneno, company } =
      editedUser;
    const userRef = ref(db, `users/${id}`);

    update(userRef, {
      fname,
      lname,
      email,
      password,
      rpassword,
      phoneno,
      company,
    })
      .then(() => {
        alert(`${fname} ${lname} updated successfully.`);
        fetchUsers();
        setEditedUser(null);
      })
      .catch((error) => {
        console.error(`Error updating user: ${error.message}`);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleCancelEdit = () => {
    setEditedUser(null);
  };

  return (
    <>
      {users?.map((user, index) => (
        <div
          key={index}
          className="mx-auto my-12 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-end">
            <RiDeleteBin2Fill
              size={25}
              onClick={() => handleDeleteUser(user.id, user.fname, user.lname)}
              className="cursor-pointer"
            />
            <FaEdit
              size={25}
              onClick={() =>
                handleEditUser(
                  user.id,
                  user.fname,
                  user.lname,
                  user.email,
                  user.password,
                  user.rpassword,
                  user.phoneno,
                  user.company
                )
              }
              className="cursor-pointer ml-2"
            />
          </div>
          {editedUser && editedUser.id === user.id ? (
            <>
              <input
                type="text"
                name="fname"
                value={editedUser.fname}
                onChange={handleChange}
                placeholder="First Name"
                className="mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="lname"
                value={editedUser.lname}
                onChange={handleChange}
                placeholder="Last Name"
                className="mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                placeholder="Email"
                className="mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="password"
                value={editedUser.password}
                onChange={handleChange}
                placeholder="Password"
                className="mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="rpassword"
                value={editedUser.rpassword}
                onChange={handleChange}
                placeholder="Repeat Password"
                className="mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="phoneno"
                value={editedUser.phoneno}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="company"
                value={editedUser.company}
                onChange={handleChange}
                placeholder="Company"
                className="mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleUpdateUser}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {user.fname} {user.lname}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Email: {user.email}
              </p>
              <div className="grid md:grid-cols-2 md:gap-2">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Password: {user.password}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Repeatpass: {user.rpassword}
                </p>
              </div>
              <div className="grid md:grid-cols-2">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Phone No.: {user.phoneno}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Company: {user.company}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Fetch;
