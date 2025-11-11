function Hero() {
  return (
    <section
  className="relative flex flex-col items-center justify-center h-[500px] w-[80%] mx-auto mt-8 rounded-xl text-center bg-cover bg-center bg-no-repeat shadow-lg"
  style={{
    backgroundImage:
      "linear-gradient(rgba(10,25,47,0.7), rgba(10,25,47,0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgUp-pzjSJbqxkv1laErjlqGd5fgJDEyAZ_1BC6WRRxQOJZMyE4Em_gAdxFM84-9j4ZdBWhXjSwnZLr3PxFa23PUmxbgicmx-xUjXDj1M-u_wRnEdiDmFKEOMtE0WKrUOgCoajrg4y7ecahVpLJ6ZkxxRoXo2JU91GnvdlWhgp4OoDm1GRjjIS41VoPzszsIRWl37A1AP3TjnneMZf3kRfziuZyiA5XZVxUn1vvofySPEVLrjeHrjY0t4Lfd64U-UAkA7LqBckvWpy')",
  }}
>
  <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-4">
    Bienvenido a Vision Meteor 
  </h1>
  <p className="text-[#CCD6F6] text-base md:text-lg mb-6 max-w-xl">
    Visualiza imágenes meteorológicas captadas desde el espacio.
  </p>
  {/* <button className="border-2 border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded-lg font-semibold hover:bg-[#64FFDA]/10 transition">
    Explorar imágenes
  </button> */}
</section>

  );
}

export default Hero;
