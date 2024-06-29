import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase";

const auth = getAuth(app);

const SignIn = () => {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const signinUser =((e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then((value) => console.log("Sign In Successfully"))
        .catch((err) => console.log(err))
    })

  return (
    <>
      <div className="flex justify-center item-center">
        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sign In to ProDev
          </h2>
          <form className="mt-8 space-y-6" onSubmit={e=>{signinUser(e)}}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={pass}
                onChange={e=>setPass(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-3 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Not registered yet?{" "}
              <span className="text-blue-600 hover:underline dark:text-blue-500">
                <Link to="/">Create account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
