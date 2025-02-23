// import { useState } from "react";
// import dropshoulder from "../../assets/Image/dropshoulder.jpg";
// import dropshouldertwo from "../../assets/Image/dropshoulder2.jpg";
// import ribbed from "../../assets/Image/Picsart_24-12-06_18-45-59-268.jpg";
// import ribbedtwo from "../../assets/Image/Picsart_24-12-06_18-44-20-387.jpg";

// const Featured = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     return (
//         <div className="px-4 sm:px-6 lg:px-8">
//             <div className="text-center mt-28">
//                 <div className="relative inline-block px-6 py-2">
//                     <span className="relative text-3xl font-extrabold uppercase text-gray-800 text-white">
//                     Featured Collection
//                     </span>
//                     <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-gray-800 to-black skew-x-[-15deg] rounded-md"></div>
//                 </div>
//                 <p className="text-lg text-black mt-2">
//                     Discover the latest trends in our exclusive collection.
//                 </p>
//             </div>
//             <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
//                 {/* Heading Section */}
//                 <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-5">
//                     {[   { img: dropshoulder, label: "Drop-Shoulder T-shirt" },
//                         { img: dropshouldertwo, label: "Drop-Shoulder T-shirt" },
//                         { img: ribbed, label: "Ribbed SweatShirt" },
//                         { img: ribbedtwo, label: "Ribbed SweatShirt" }
//                     ].map((item, index) => (
//                         <div 
//                             key={index} 
//                             className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
//                             onTouchStart={() => setActiveIndex(index)}
//                             onMouseEnter={() => setActiveIndex(index)}
//                             onMouseLeave={() => setActiveIndex(null)}
//                         >
//                             <img 
//                                 src={item.img} 
//                                 alt={item.label} 
//                                 className="w-full h-auto object-contain cursor-pointer"
//                             />
//                             {activeIndex === index && (
//                                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
//                                     <h3 className="text-lg font-semibold">{item.label}</h3>
//                                     <button className="mt-3 px-5 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition duration-300">
//                                         View More
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Featured;



import { useState } from "react";
import dropshoulder from "../../assets/Image/dropshoulder.jpg";
import dropshouldertwo from "../../assets/Image/dropshoulder2.jpg";
import ribbed from "../../assets/Image/Picsart_24-12-06_18-45-59-268.jpg";
import ribbedtwo from "../../assets/Image/Picsart_24-12-06_18-44-20-387.jpg";

const Featured = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <header className="text-center mt-28">
                <h2 className="relative inline-block px-6 py-2 text-3xl font-extrabold uppercase text-white">
                    Featured Collection
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-gray-800 to-black skew-x-[-15deg] rounded-md"></span>
                </h2>
                <p className="text-lg text-black mt-2">
                    Discover the latest trends in our exclusive collection.
                </p>
            </header>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                {/* Product Grid */}
                <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-5">
                    {[   { img: dropshoulder, label: "Drop-Shoulder T-shirt" },
                        { img: dropshouldertwo, label: "Drop-Shoulder T-shirt" },
                        { img: ribbed, label: "Ribbed SweatShirt" },
                        { img: ribbedtwo, label: "Ribbed SweatShirt" }
                    ].map((item, index) => (
                        <figure 
                            key={index} 
                            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
                            onTouchStart={() => setActiveIndex(index)}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <img 
                                src={item.img} 
                                alt={item.label} 
                                className="w-full h-auto object-contain cursor-pointer"
                            />
                            {activeIndex === index && (
                                <figcaption className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                                    <h3 className="text-lg font-semibold">{item.label}</h3>
                                    <button className="mt-3 px-5 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition duration-300">
                                        View More
                                    </button>
                                </figcaption>
                            )}
                        </figure>
                    ))}
                </section>
            </section>
        </section>
    );
};

export default Featured;