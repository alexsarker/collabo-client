import { FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../Shared/Navbar";
import { Link } from "react-router-dom";
import Dashboard from "/src/assets/Dashboard Login.png";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Dashboard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="px-2 md:px-20 lg:px-40">
        <Navbar></Navbar>
      </div>

      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="hero pt-10 pb-24">
              <div className="py-12 px-16 border bg-white rounded-xl">
                <div className="text-left pb-8">
                  <h1 className="text-4xl font-medium pb-4">Welcome back!</h1>
                  <p className="font-medium text-sec">
                    Enter your Credentials to access your account.
                  </p>
                </div>
                <div className="card w-full">
                  <form>
                    {/* Email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Email address
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered text-sm"
                        required
                      />
                    </div>
                    {/* Password */}
                    <div className="form-control pt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Password
                        </span>
                      </label>
                      <label className="input input-bordered flex items-center gap-2">
                        <input
                          type="password"
                          // type={showPassword ? "text" : "password"}
                          name="password"
                          className="grow text-sm"
                          placeholder="Password"
                        />
                        {/* <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <IoEyeOffOutline className="text-xl" />
                        ) : (
                          <IoEyeOutline className="text-xl" />
                        )}
                      </span> */}
                      </label>
                      <label className="label">
                        <a
                          href="#"
                          className="label-text-alt text-sm font-medium text-sec link link-hover"
                        >
                          Forgot password?
                        </a>
                      </label>
                    </div>

                    {/* button */}
                    <div className="form-control mt-6">
                      <button className="btn bg-button text-white hover:bg-[#31308F]">
                        Login
                      </button>
                    </div>
                  </form>

                  <div className="divider text-center py-4">Or</div>

                  {/* more button */}
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <button
                      // onClick={() => handleGoogle()}
                      className="btn flex items-center gap-2 rounded-xl hover:bg-[#5c5bba] hover:text-white"
                    >
                      <FaGoogle />
                      Sign in with Google
                    </button>

                    <button
                      // onClick={() => handleGithub()}
                      className="btn flex items-center gap-2 rounded-xl hover:bg-[#5c5bba] hover:text-white"
                    >
                      <FaGithub />
                      Sign in with Github
                    </button>
                  </div>

                  {/* sign up button */}
                  <p className="text-center pt-6">
                    Don’t have an account?{"  "}
                    <Link to="/register">
                      <span className="hover link-hover text-sec font-medium">
                        Register
                      </span>
                    </Link>
                  </p>
                </div>
                {/* {regError && (
                <p className="text-red-700 pt-4 text-center">{regError}</p>
              )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
