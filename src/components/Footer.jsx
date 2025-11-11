// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-[#0A192F] text-[#CCD6F6] border-t border-[#112240] py-8 px-6 text-center">
      {/* Nombre del proyecto */}
      <h2 className="text-accent text-xl font-semibold mb-2">Vision Meteor</h2>
      {/* <p className="text-sm max-w-2xl mx-auto mb-4">
        Plataforma educativa y de observación satelital que muestra imágenes reales del satélite
        <span className="text-accent font-semibold"> Meteor M2 </span> captadas por estaciones terrestres.
      </p> */}

     
      <div className="flex justify-center space-x-6 mb-4">
        <a href="/" className="hover:text-accent transition">Inicio</a>
        <a href="/documentacion" className="hover:text-accent transition">Documentación</a>
        <a href="/about" className="hover:text-accent transition">Informacion</a>
        {/* <a href="mailto:contacto@visionmeteor.com" className="hover:text-accent transition">Contacto</a> */}
      </div>


      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github text-2xl hover:text-accent transition"></i>
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter text-2xl hover:text-accent transition"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram text-2xl hover:text-accent transition"></i>
        </a>
      </div>

      {/* Línea inferior */}
      <p className="text-xs text-slate-500">
        © {new Date().getFullYear()} Vision Meteor — Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
