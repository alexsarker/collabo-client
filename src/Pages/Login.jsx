import { FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../Shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "/src/assets/Dashboard Login.png";
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signUser, googleUser, githubUser } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    setRegError("");

    if (password.length < 6) {
      setRegError("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password should be at least one Uppercase character.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegError("Password should be at least one Lowercase character.");
      return;
    }

    signUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("You're in");
      })
      .catch(() => {
        toast.error("Something Wrong!");
      });
  };

  const googleHandler = () => {
    googleUser()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Registered Successfully");
      })
      .catch(() => {
        toast.error("Already Email Exist!");
      });
  };

  const githubHandler = () => {
    githubUser()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Registered Successfully");
      })
      .catch(() => {
        toast.error("Already Email Exist!");
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Dashboard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar></Navbar>

      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="hero pt-10 pb-24">
              <div className="py-12 px-16 border bg-white shadow-md rounded-xl">
                <div className="text-left pb-8">
                  <h1 className="text-4xl font-medium pb-4">Welcome back!</h1>
                  <p className="font-medium text-sec">
                    Enter your Credentials to access your account.
                  </p>
                </div>
                <div className="card w-full">
                  <form onSubmit={handleLogin}>
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
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="grow text-sm"
                          placeholder="Password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? (
                            <IoEyeOffOutline className="text-xl" />
                          ) : (
                            <IoEyeOutline className="text-xl" />
                          )}
                        </span>
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
                      onClick={() => googleHandler()}
                      className="btn flex items-center gap-2 rounded-xl hover:bg-[#5c5bba] hover:text-white"
                    >
                      <FaGoogle />
                      Sign in with Google
                    </button>

                    <button
                      onClick={() => githubHandler()}
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
                {regError && (
                  <p className="text-red-700 pt-4 text-center">{regError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Login;
