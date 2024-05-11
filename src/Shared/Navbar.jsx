import Logo from "/src/assets/logo-white.svg";
const Navbar = () => {
  return (
    <div className="navbar bg-transparent py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Assignments</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-2 hidden lg:block">
          <div className="flex">
            <li>
              <a className="text-white mr-8">Assignments</a>
            </li>
            <li>
              <a className="text-white mr-8">About Us</a>
            </li>
          </div>
        </ul>

        
        {/* button */}
        <a className="btn bg-button border-none px-8 hover:bg-[#070D1E]">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
