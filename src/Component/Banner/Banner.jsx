// const Banner = () => {
//     return (
//   <div className="relative w-full h-[400px] flex justify-center items-center bg-black overflow-hidden mt:16 lg:mt-20">
//       {/* Background Image */}
//       <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://i.ibb.co.com/kgG7BXBX/Five.png')" }}></div>

//       {/* Image Grid */}
//       <div className="relative z-10 grid grid-cols-4 gap-2 max-w-4xl">
//         <img src="https://i.ibb.co.com/sdnMB8J4/Two.png" alt="Fashion 1" className="w-full h-auto object-cover" />
//         <img src="https://i.ibb.co.com/Kc8BWWh9/Onee.png" className="w-full h-auto object-cover" />
//         <img src="https://i.ibb.co.com/kgG7BXBX/Five.png" alt="Fashion 3" className="w-full h-auto object-cover" />
//         <img src="https://i.ibb.co.com/xthv2qRT/Six.png" alt="Fashion 4" className="w-full h-auto object-cover" />
//       </div>

//       {/* Overlay Text */}
//       <div className="absolute text-white text-6xl md:text-8xl font-bold uppercase mix-blend-overlay flex items-center">
//         <span className="relative z-20">FASHION</span>
//         <div className="absolute inset-0 text-transparent text-stroke text-stroke-2 text-white font-extrabold z-10">X</div>
//       </div>

//       {/* Website Link */}
//       <div className="absolute bottom-4 text-white text-sm md:text-lg">
//         <a href="https://www.forex.web.app" className="hover:underline">www.trexoutfit.com</a>
//       </div>
//     </div>
//     );
//   };
  
//   export default Banner;

const Banner = () => {
  return (
      <section className="relative w-full h-[400px] flex justify-center items-center bg-black overflow-hidden mt:16 lg:mt-20">
          {/* Background Image */}
          <figure className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://i.ibb.co.com/kgG7BXBX/Five.png')" }}></figure>

          {/* Image Grid */}
          <section className="relative z-10 grid grid-cols-4 gap-2 max-w-4xl">
              <img src="https://i.ibb.co.com/sdnMB8J4/Two.png" alt="Fashion 1" className="w-full h-auto object-cover" />
              <img src="https://i.ibb.co.com/Kc8BWWh9/Onee.png" className="w-full h-auto object-cover" />
              <img src="https://i.ibb.co.com/kgG7BXBX/Five.png" alt="Fashion 3" className="w-full h-auto object-cover" />
              <img src="https://i.ibb.co.com/xthv2qRT/Six.png" alt="Fashion 4" className="w-full h-auto object-cover" />
          </section>

          {/* Overlay Text */}
          <header className="absolute text-white text-6xl md:text-8xl font-bold uppercase mix-blend-overlay flex items-center">
              <span className="relative z-20">FASHION</span>
              <span className="absolute inset-0 text-transparent text-stroke text-stroke-2 text-white font-extrabold z-10">X</span>
          </header>

          {/* Website Link */}
          <footer className="absolute bottom-4 text-white text-sm md:text-lg">
              <a href="https://www.forex.web.app" className="hover:underline">www.trexoutfit.com</a>
          </footer>
      </section>
  );
};

export default Banner;
