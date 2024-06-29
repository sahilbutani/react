import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Modal = ({ open, setOpen, emp, setOriginal }) => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    if (emp) {
      setName(emp.name);
      setProfession(emp.profession);
      setAge(emp.age);
      setSkills(emp.skills);
    }
  }, [emp]);

  const closeClick = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      ...emp,//before employee data
      name,
      profession,
      age,
      skills,
    };
    setOriginal((prevData) =>
      prevData.map((data) => (data.id === emp.id ? updatedEmployee : data))//jo data.id=emp.id thse to data update thse.
    );
    setOpen(false);
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        open === false ? "hidden" : ""
      } overflow-y-auto overflow-x-hidden fixed top-50 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      {/* jo open=false thse etle k modal hidden thai jse  */}
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              You Can Edit This
            </h3>
            <button
              onClick={closeClick}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center pt-10 pb-10">
              <img
                className="m-12 w-24 h-24 mb-3 rounded-full shadow-lg"
                src={emp.image}
                alt=""
              />
              <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </h5>
              <span className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                <TextField
                  id="profession"
                  label="Profession"
                  variant="outlined"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </span>
              <p className="mb-3">
                <TextField
                  id="age"
                  label="Age"
                  variant="outlined"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </p>
              <h6>
                <TextField
                  id="skills"
                  label="Skills"
                  variant="outlined"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </h6>
            </div>

            <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Button type="submit" variant="contained" sx={{ margin: "10px" }}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
