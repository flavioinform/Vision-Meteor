// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section className="bg-background-dark text-[#CCD6F6] py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-accent mb-6 text-center">
        Acerca del Satélite Meteor M2
      </h1>

      {/* <p className="max-w-3xl mx-auto text-center mb-12 text-lg leading-relaxed">
        El <span className="font-semibold">Meteor M2</span> es un satélite meteorológico ruso
        lanzado con el objetivo de proporcionar imágenes de la Tierra en tiempo casi real.
        Permite monitorear el clima, los océanos y la cobertura nubosa mediante transmisiones
        digitales LRPT que pueden recibirse con antenas SDR y decodificarse en estaciones terrestres.
      </p> */}
       <br />
       <br />      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        <div className="bg-[#112240] p-6 rounded-lg transition trasnform hover:-traslate-y-2  hover:shadow-lg hover:shadow-[#64FFDA]/30">
          <h3 className="text-accent font-semibold mb-2"> Lanzamiento</h3>
          <p>8 de julio de 2014 desde el cosmódromo de Baikonur.</p>
        </div>

        <div className="bg-[#112240] p-6 rounded-lg transition trasnform hover:-traslate-y-2   hover:shadow-lg hover:shadow-[#64FFDA]/30">
          <h3 className="text-accent font-semibold mb-2"> Órbita</h3>
          <p>Sol-síncrona a unos 825 km de altitud, con un periodo de 101 minutos.</p>
        </div>

        <div className="bg-[#112240] p-6 rounded-lg transition trasnform hover:-traslate-y-2  hover:shadow-lg hover:shadow-[#64FFDA]/30 ">
          <h3 className="text-accent font-semibold mb-2">Frecuencia</h3>
          <p>137.1 MHz – 137.9 MHz (LRPT – Low Rate Picture Transmission).</p>
        </div>

        <div className="bg-[#112240] p-6 rounded-lg  transition trasnform hover:-traslate-y-2  hover:shadow-lg hover:shadow-[#64FFDA]/30">
          <h3 className="text-accent font-semibold mb-2">Cobertura</h3>
          <p>Captura global cada 12 horas aproximadamente con paso polar.</p>
        </div>

        <div className="bg-[#112240] p-6 rounded-lg transition trasnform hover:-traslate-y-2  hover:shadow-lg hover:shadow-[#64FFDA]/30">
          <h3 className="text-accent font-semibold mb-2"> Sensores</h3>
          <p>MSU-MR (radiometría multicanal), KMSS, y otras cámaras ópticas.</p>
        </div>

       <div className="relative bg-[#112240] p-6 rounded-lg border border-transparent hover:border-accent transition duration-300 hover:shadow-md hover:shadow-accent/20">

          <h3 className="text-accent font-semibold mb-2"> Fabricante</h3>
          <p>Roshydromet y NPP VNIIEM (Rusia).</p>
        </div>
      </div>

    
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-accent mb-4">
          Nuestra estación y el Meteor M2
        </h2>
        <p className="text-lg leading-relaxed">
          En nuestro proyecto, utilizamos un <strong>receptor SDR</strong> y una
          <strong> antena QFH</strong> para recibir las señales del Meteor M2.
          Estas transmisiones son procesadas para generar imágenes meteorológicas que
          luego se muestran en tiempo real en nuestra plataforma <em>Vision Meteor</em>.
        </p>
        <img
          src="https://www.rtl-sdr.com/wp-content/uploads/2014/09/Meteor-M2.jpg"
          alt="Satélite Meteor M2"
          className="rounded-lg shadow-lg mt-8 mx-auto max-w-xl"
        />
      </div>
    </section>
  );
}

export default About;
