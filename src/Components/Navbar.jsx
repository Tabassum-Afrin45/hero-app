import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" bg-white ">
    <div className="w-11/12 mx-auto py-5 content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <Link to='/' className="flex items-center">
      <img className="h-10 w-auto" src="./logo.png" alt="" />
      <h2 className="text-3xl font-bold text-shadow-xs text-purple-600">Hero App
      </h2>
      </Link>
      <nav>
        <ul className="flex gap-10 items-center">
          <li>
            <NavLink to='/' className="border-none duration-200 hover:font-bold"
            >
             Home
            </NavLink>
            </li>
          <li>
            <NavLink to='/apps' className="border-none duration-200 hover:font-bold"
            >
             Apps
            </NavLink>
          </li>
          <li>
            <NavLink to='/installation' className="border-none duration-200 hover:font-bold"
            >
             Installation
            </NavLink>
          </li>
                
          <li>
           <NavLink to='https://github.com/Tabassum-Afrin45' className="btn flex items-center gap-2 h-10 p-4 bg-linear-to-r from-blue-500 to-purple-500 text-white"><img className="h-7 rounded-full" src="./github.jpg" alt="" />Contribute</NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Navbar