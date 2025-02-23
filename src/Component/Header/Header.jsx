// import Logo from "../../assets/Image/trex.jpg";
// import { IoSearch } from "react-icons/io5";
// import { MdSupervisorAccount } from "react-icons/md";

// const Header = () => {
//     return (
//         <div>
//             <div className="navbar bg-gradient-to-r from-black via-gray-800 to-black shadow-xl px-4 py-2 fixed top-0 w-full z-50 text-white">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <button tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </button>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box mt-3 w-52 p-2 shadow">
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">All Product</a></li>
//                             <li><a href="#">Contact Us</a></li>
//                         </ul>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                         <div className="border-2 border-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
//                             <img src={Logo} alt="brand logo" className="w-full h-full object-contain" />
//                         </div>
//                         <span className="hidden lg:flex text-lg sm:hidden lg:text-2xl font-semibold">
//                             Trex Outfit
//                         </span>

//                     </div>
//                 </div>

//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">All Product</a></li>
//                         <li><a href="#">Contact Us</a></li>
//                     </ul>
//                 </div>

//                 <div className="navbar-end flex items-center gap-4">
//                     <div className="relative flex items-center w-full max-w-xs">
//                         <IoSearch className="absolute left-3 text-gray-500 text-xl" />
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             className="input input-bordered text-black w-full pl-10 h-10 rounded-md focus:outline-none"
//                         />
//                     </div>
//                     <a href="#" className="btn flex items-center gap-2">
//                         <MdSupervisorAccount className="text-2xl" />
//                         <span>Login</span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;



import Logo from "../../assets/Image/trex.jpg";
import { IoSearch } from "react-icons/io5";
import { MdSupervisorAccount } from "react-icons/md";

const Header = () => {
    return (
        <nav className="navbar bg-gradient-to-r from-black via-gray-800 to-black shadow-xl px-4 py-2 fixed top-0 w-full z-50 text-white">
            <section className="navbar-start">
                <details className="dropdown">
                    <summary tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </summary>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box mt-3 w-52 p-2 shadow">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">All Product</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </details>
                <figure className="flex items-center space-x-3">
                    <div className="border-2 border-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                        <img src={Logo} alt="brand logo" className="w-full h-full object-contain" />
                    </div>
                    <figcaption className="hidden lg:flex text-lg sm:hidden lg:text-2xl font-semibold">
                        Trex Outfit
                    </figcaption>
                </figure>
            </section>

            <menu className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">All Product</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </menu>

            <section className="navbar-end flex items-center gap-4">
                <label className="relative flex items-center w-full max-w-xs">
                    <IoSearch className="absolute left-3 text-gray-500 text-xl" />
                    <input type="text" placeholder="Search..." className="input input-bordered text-black w-full pl-10 h-10 rounded-md focus:outline-none" />
                </label>
                <a href="#" className="btn flex items-center gap-2">
                    <MdSupervisorAccount className="text-2xl" />
                    <span>Login</span>
                </a>
            </section>
        </nav>
    );
};

export default Header;

