// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import dropShoulder from "../../assets/Image/dropshoulder.jpg"
// const ProductCard = ({ image, name, price }) => {
//   return (
//     <section>
//         <div className="text-center mt-20">
//             <div className="relative inline-block px-6 py-2">
//                 <span className="relative text-3xl font-extrabold uppercase text-gray-800 text-white">
//                 Featured Products
//                 </span>
//                 <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-gray-800 to-black skew-x-[-15deg] rounded-md"></div>
//             </div>
//             <p className="text-lg text-black mt-2">
//                 Discover the latest trends in our exclusive collection.
//             </p>
//         </div>

//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-5">
//             <div className="bg-white shadow-lg rounded-xl p-2 w-64 border border-gray-300 mt-10">
//                 <div className="relative">
//                     <img src={dropShoulder} alt={name} className="w-full h-full object-cover rounded-lg" />
//                 </div>
//                 <h2 className="text-md font-semibold mt-2">Drop Shoulder T-shirt-Maroon</h2>
//                 <p className="text-gray-900 text-lg font-bold">299.00৳</p>
//                 <button className="mt-3 flex items-center justify-center gap-2 bg-black text-white w-full px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
//                     Add <FaShoppingCart />
//                 </button>
//             </div>
//             <div className="bg-white shadow-lg rounded-xl p-2 w-64 border border-gray-300 mt-10">
//                 <div className="relative">
//                     <img src={dropShoulder} alt={name} className="w-full h-full object-cover rounded-lg" />
//                 </div>
//                 <h2 className="text-md font-semibold mt-2">Drop Shoulder T-shirt-Maroon</h2>
//                 <p className="text-gray-900 text-lg font-bold">299.00৳</p>
//                 <button className="mt-3 flex items-center justify-center gap-2 bg-black text-white w-full px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
//                     Add <FaShoppingCart />
//                 </button>
//             </div>
//             <div className="bg-white shadow-lg rounded-xl p-2 w-64 border border-gray-300 mt-10">
//                 <div className="relative">
//                     <img src={dropShoulder} alt={name} className="w-full h-full object-cover rounded-lg" />
//                 </div>
//                 <h2 className="text-md font-semibold mt-2">Drop Shoulder T-shirt-Maroon</h2>
//                 <p className="text-gray-900 text-lg font-bold">299.00৳</p>
//                 <button className="mt-3 flex items-center justify-center gap-2 bg-black text-white w-full px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
//                     Add <FaShoppingCart />
//                 </button>
//             </div>
//             <div className="bg-white shadow-lg rounded-xl p-2 w-64 border border-gray-300 mt-10">
//                 <div className="relative">
//                     <img src={dropShoulder} alt={name} className="w-full h-full object-cover rounded-lg" />
//                 </div>
//                 <h2 className="text-md font-semibold mt-2">Drop Shoulder T-shirt-Maroon</h2>
//                 <p className="text-gray-900 text-lg font-bold">299.00৳</p>
//                 <button className="mt-3 flex items-center justify-center gap-2 bg-black text-white w-full px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
//                     Add <FaShoppingCart />
//                 </button>
//             </div>
//         </div>

//     </section>
//   );
// };

// export default ProductCard;


import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import dropShoulder from "../../assets/Image/dropshoulder.jpg";

const ProductCard = ({ image, name, price }) => {
  return (
    <section>
      <header className="text-center mt-20">
        <h2 className="relative inline-block px-6 py-2 text-3xl font-extrabold uppercase text-white">
          Featured Products
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-gray-800 to-black skew-x-[-15deg] rounded-md"></span>
        </h2>
        <p className="text-lg text-black mt-2">
          Discover the latest trends in our exclusive collection.
        </p>
      </header>

      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-5">
        {[...Array(4)].map((_, index) => (
          <article key={index} className="bg-white shadow-lg rounded-xl p-2 w-64 border border-gray-300 mt-10">
            <figure className="relative">
              <img src={dropShoulder} alt={name} className="w-full h-full object-cover rounded-lg" />
            </figure>
            <h3 className="text-md font-semibold mt-2">Drop Shoulder T-shirt-Maroon</h3>
            <p className="text-gray-900 text-lg font-bold">299.00৳</p>
            <button className="mt-3 flex items-center justify-center gap-2 bg-black text-white w-full px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
              Add <FaShoppingCart />
            </button>
          </article>
        ))}
      </section>
    </section>
  );
};

export default ProductCard;

