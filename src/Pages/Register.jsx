import { FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../Shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "/src/assets/Dashboard Login.png";
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, googleUser, githubUser, updateUserProfile } =
    useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const imageURL = form.imageURL.value;
    const email = form.email.value;
    const password = form.password.value;

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

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, imageURL);
        navigate(location?.state ? location.state : "/");
        toast.success("Registered Successfully");
      })
      .catch(() => {
        toast.error("Already Email Exist!");
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
            <div className="hero pb-24">
              <div className="py-12 px-16 border bg-theme-moon shadow-md rounded-xl">
                <div className="text-left pb-4">
                  <h1 className="text-4xl font-medium pb-4">Get Started Now</h1>
                </div>
                <div className="card w-full">
                  <form onSubmit={handleRegister}>
                    {/* Full Name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Full Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="input input-bordered text-sm"
                        required
                      />
                    </div>
                    {/* Image URL */}
                    <div className="form-control pt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Image URL
                        </span>
                      </label>
                      <input
                        type="url"
                        name="imageURL"
                        placeholder="https://"
                        className="input input-bordered text-sm"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-control pt-2">
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
                    {/* New Password */}
                    <div className="form-control pt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          New Password
                        </span>
                      </label>
                      <label className="input input-bordered flex items-center gap-2">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="grow text-sm"
                          placeholder="New Password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? (
                            <IoEyeOffOutline className="text-xl" />
                          ) : (
                            <IoEyeOutline className="text-xl" />
                          )}
                        </span>
                      </label>
                    </div>

                    {/* button */}
                    <div className="form-control mt-6">
                      <button className="btn bg-button text-white hover:bg-[#31308F]">
                        Register
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
                      Register with Google
                    </button>

                    <button
                      onClick={() => githubHandler()}
                      className="btn flex items-center gap-2 rounded-xl hover:bg-[#5c5bba] hover:text-white"
                    >
                      <FaGithub />
                      Register with Github
                    </button>
                  </div>

                  {/* sign up button */}
                  <p className="text-center pt-6">
                    Have an account?{"  "}
                    <Link to="/login">
                      <span className="hover link-hover text-sec font-medium">
                        Login
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

export default Register;
