import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";

const gprovider = new GoogleAuthProvider();

const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
    .then((value) =>
      navigate("/signIn")
    );
  };

  const signUpWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, gprovider);
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Sign Up For Enjoying This Side
              </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Here at ProDev we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            </div>
          <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sign Up to ProDev
              </h2>
              <form className="mt-8 space-y-6" onSubmit={(e) => createUser(e)}>
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-3 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex justify-center text-blue-600 hover:underline dark:text-blue-500">
                    <span onClick={signUpWithGoogle}>Sign Up With Google</span>
                  </span>
                </div>

                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex justify-center text-blue-600 hover:underline dark:text-blue-500">
                    <Link to="/withOTP">Sign Up With Mobile No.</Link>
                  </span>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex justify-center text-blue-600 hover:underline dark:text-blue-500">
                    <Link to="/signIn">Signin</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
