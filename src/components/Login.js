import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIseSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIseSignInForm(!isSignInForm);
  };

  console.log("Is this a sign In form : ", isSignInForm);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form className="text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-85">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              <span className="text-gray-500">New to NetflixGPT?</span>{" "}
              {"Sign Up Now!"}
            </>
          ) : (
            <>
              <span className="text-gray-500">Already registered?</span>{" "}
              {"Sign In Now!"}
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
