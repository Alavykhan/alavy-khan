import { Link } from "react-router-dom";
import logo from '/alavykhan-2.png'
import { NavHashLink } from 'react-router-hash-link';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><NavHashLink smooth={true} to='#about'>About</NavHashLink></li>
                <li><NavHashLink smooth={true} to='#projects'>Projects</NavHashLink></li>
                <li><NavHashLink smooth={true} to='#contact'>Contact</NavHashLink></li>
                </ul>
                </div>
                <Link to='/'><img src={logo} className="w-12 lg:ml-8" alt="alavykhan" /></Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className=" menu-horizontal gap-5 bg-none text-white text-base px-1">
                <li><NavHashLink smooth={true} to='#about'>About</NavHashLink></li>
                <li><NavHashLink smooth={true} to='#projects'>Projects</NavHashLink></li>
                <li><NavHashLink smooth={true} to='#contact'>Contact</NavHashLink></li>
                
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://www.upwork.com/freelancers/~01ce5a15fac94d482a' target="_blank" className="btn text-white mr-8">Hire Me</Link>
            </div>
            </div>
        </div>
    );
};

export default Navbar;