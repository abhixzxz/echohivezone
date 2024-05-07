import React, { useState } from "react";
import imgSignup from "../../assets/images/20944508.jpg";
import GenderCheckbox from "./GenderCheck";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

function SignUpForm() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const { loading, signup } = useSignup();
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting signup form with data:", inputs);
    await signup(inputs);
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="min-h-screen bg-gray-100 text-gray-900 flex justify-center"
        style={{
          backgroundImage:
            "radial-gradient(circle at center center, rgba(33,33,33,0),rgb(25,16,49)),repeating-linear-gradient(135deg, rgb(25,16,49) 0px, rgb(25,16,49) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(20,22,24) 0px, rgb(20,22,24) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(25,16,49),rgb(25,16,49))",
        }}
      >
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold uppercase">
                Sign up
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    name="fullName"
                    value={inputs.fullName}
                    onChange={(e) =>
                      setInputs({ ...inputs, fullName: e.target.value })
                    }
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    name="username"
                    value={inputs.username}
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                    className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    name="password"
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    name="confirmPassword"
                    value={inputs.confirmPassword}
                    onChange={(e) =>
                      setInputs({ ...inputs, confirmPassword: e.target.value })
                    }
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Confirm Password"
                  />

                  <GenderCheckbox
                    onCheckboxChange={handleCheckboxChange}
                    selectedGender={inputs.gender}
                  />

                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></svg>

                    <span className="ml-3">Sign Up</span>
                  </button>
                  <span className="cursor-pointer">
                    <Link
                      className="text-sm hover:underline hover:text-blue-600 mt-2 float-right cursor-pointer"
                      to={"/login"}
                    >
                      Already have an account? Login{" "}
                    </Link>
                  </span>
                  {/* Terms and Conditions */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat object-contain"
              style={{
                backgroundImage: `url(${imgSignup})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
