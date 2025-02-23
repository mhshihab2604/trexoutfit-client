// import { MdOutlineMessage } from "react-icons/md";
// import { MdOutlineMarkEmailRead } from "react-icons/md";
// import { IoShareSocialOutline } from "react-icons/io5";

// const Available = () => {
//     return (
//         <div>
//             <div className="text-center mt-20">
//                 <div className="relative inline-block px-6 py-2">
//                     <span className="relative text-3xl font-extrabold uppercase text-gray-800 text-white">
//                     Men's Apparel Style
//                     </span>
//                     <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-gray-800 to-black skew-x-[-15deg] rounded-md"></div>
//                 </div>
//                 <p className="text-lg text-black mt-2">
//                     Discover the latest trends in our exclusive collection.
//                 </p>
//              </div>
//             <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto mt-10">
//                 <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg border-2 border-[#19212D] p-6 shadow-lg md:w-[350px] text-black">
//                     <MdOutlineMarkEmailRead className="text-5xl" />
//                     <div className="grid gap-2">
//                     <h1 className="text-lg font-semibold ">Exclusive Offers</h1>
//                         <p className="text-sm dark:text-black">Get notified about exclusive discounts and new arrivals. Receive personalized style recommendations straight to your inbox.</p>
//                     </div>
//                 </div>
//                 <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg border-2 border-[#19212D] p-6 shadow-lg md:w-[350px] text-black">
//                     <MdOutlineMessage className="text-5xl" />
//                     <div className="grid gap-2">
//                         <h1 className="text-lg font-semibold ">Customer Support</h1>
//                         <p className="text-sm dark:text-black">Have questions about sizing or fabric? Chat with our support team in real-time for quick and easy assistance with your shopping experience.</p>
//                     </div>
//                 </div>
//                 <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg border-2 border-[#19212D] p-6 shadow-lg md:w-[350px] text-black">
//                     <IoShareSocialOutline className="text-5xl" />
//                     <div className="grid gap-2">
//                         <h1 className="text-lg font-semibold ">Social Media</h1>
//                         <p className="text-sm dark:text-black">Stay updated with the latest fashion trends by following us on social media. Share your favorite outfits and connect with the style community.</p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Available;


import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const Available = () => {
    return (
        <section>
            <header className="text-center mt-20">
                <h2 className="relative inline-block px-6 py-2 text-3xl font-extrabold uppercase text-white">
                    Men's Apparel Style
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-gray-800 to-black skew-x-[-15deg] rounded-md"></span>
                </h2>
                <p className="text-lg text-black mt-2">
                    Discover the latest trends in our exclusive collection.
                </p>
            </header>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto mt-10">
                {[   { icon: <MdOutlineMarkEmailRead className="text-5xl" />, title: "Exclusive Offers", description: "Get notified about exclusive discounts and new arrivals. Receive personalized style recommendations straight to your inbox." },
                    { icon: <MdOutlineMessage className="text-5xl" />, title: "Customer Support", description: "Have questions about sizing or fabric? Chat with our support team in real-time for quick and easy assistance with your shopping experience." },
                    { icon: <IoShareSocialOutline className="text-5xl" />, title: "Social Media", description: "Stay updated with the latest fashion trends by following us on social media. Share your favorite outfits and connect with the style community." }
                ].map((item, index) => (
                    <article key={index} className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg border-2 border-[#19212D] p-6 shadow-lg md:w-[350px] text-black">
                        {item.icon}
                        <section className="grid gap-2">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm dark:text-black">{item.description}</p>
                        </section>
                    </article>
                ))}
            </section>
        </section>
    );
};

export default Available;