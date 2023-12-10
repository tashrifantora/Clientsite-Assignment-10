import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../../public/img/28384238_7412658-removebg-preview.png'
import { useContext, } from "react";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import { BiSun, BiMoon } from "react-icons/bi";

const NavBar = () => {

    const { user, userSignOut } = useContext(AuthContext)
    const navigation = useNavigate()

    const handleLogOut = () => {
        userSignOut();
        navigation('/login');
    }


    const NavLinks = <>
        <li className="text-white text-lg font-medium"><NavLink to='/'>Home</NavLink></li>
        <li className="text-white text-lg font-medium"><NavLink to='/addproducts'>Add Product</NavLink></li>
        <li className="text-white text-lg font-medium"><NavLink to='/mycart'>My Cart</NavLink></li>
        <li className="text-white text-lg font-medium"><NavLink to='/register'>Register</NavLink></li>

    </>

    return (
        <div className="px-10">
            <div className="navbar bg-sky-900 mb-5">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-900  rounded-box w-52 font-bold">
                            <div className="">
                                {
                                    NavLinks
                                }
                            </div>
                        </ul>
                    </div>

                    <button className=" flex items-center">
                        <img className="w-24" src={logo} alt="" />
                        <p className="md:text-2xl text-white">Velocity Vertex</p>
                    </button>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {NavLinks}
                    </ul>
                </div>

                {/* Tryyyyy */}


                <div className="navbar-end">
                    <div>
                        <div className="dropdown dropdown-hover dropdown-left">
                            <label tabIndex={0} className=" m-2 ">
                                {
                                    user ?
                                        <img className="w-14 rounded-full" src={user.photoURL
                                        } alt="" />
                                        :
                                        <Link to='/login'>
                                            <button className="btn">Login</button>
                                        </Link>
                                }
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-56">
                                <li><a>
                                    {
                                        user ? <p className=" text-sky-900">Email: {user.email}</p> : ''
                                    }
                                </a></li>
                                <li><a>{
                                    user ?
                                        <button onClick={handleLogOut} className="btn btn-sm bg-sky-900 text-white">logOut</button>
                                        :
                                        <Link to="/login" className="btn btn-sm bg-sky-900 text-white">Login</Link>
                                }</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Try Dark mode */}
                <div>
                    <label className="swap swap-rotate md:m-3">

                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox" />

                        {/* sun icon */}
                        <BiSun className="swap-on fill-current w-10 h-10 text-white" ></BiSun>

                        {/* moon icon */}
                        <BiMoon className="swap-off fill-current w-10 h-10 text-white"></BiMoon>
                    </label>
                </div>

            </div>

        </div>
    );
};

export default NavBar;