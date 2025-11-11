function Documentation() {
  return (
    <section className="bg-[#0A192F] text-[#CCD6F6] min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-accent mb-6 text-center">
        Documentación del Proyecto Vision Meteor
      </h1>

      {/* Introducción */}
      <p className="max-w-3xl mx-auto text-center mb-12 text-lg leading-relaxed">
        Esta documentación describe el funcionamiento y configuración de la
        estación terrestre <strong>Vision Meteor</strong>, un sistema capaz de
        recibir y procesar imágenes del satélite ruso <strong>Meteor M2</strong>.
      </p>

      {/* Requisitos */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-accent mb-3">
           Requisitos del sistema
        </h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>Antena QFH o V-dipole calibrada para 137 MHz</li>
          <li>Receptor SDR (RTL-SDR, HackRF, etc.)</li>
          <li>Software de decodificación (MeteorDemod, LRPTofflineDecoder)</li>
          <li>Cuenta gratuita en Supabase para almacenar imágenes</li>
          <li>Frontend con React + Tailwind CSS</li>
        </ul>
      </div>

      {/* Pasos de instalación */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-accent mb-3">
           Instalación y configuración
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-slate-300">
          <li>Clonar el repositorio del proyecto.</li>
          <li>Instalar dependencias con <code>npm install</code>.</li>
          <li>Configurar variables de entorno de Supabase (<code>.env</code>).</li>
          <li>Ejecutar el servidor local con <code>npm run dev</code>.</li>
          <li>Verificar la conexión con Supabase desde la consola.</li>
        </ol>
      </div>

      {/* Explicación técnica */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-accent mb-3">
           Flujo de datos
        </h2>
        <p className="mb-3">
          El flujo de datos se desarrolla en cuatro etapas principales:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>
            <strong>Recepción:</strong> El SDR capta la señal del Meteor M2.
          </li>
          <li>
            <strong>Decodificación:</strong> El software convierte los datos LRPT en imágenes.
          </li>
          <li>
            <strong>Almacenamiento:</strong> Las imágenes se guardan en Supabase.
          </li>
          <li>
            <strong>Visualización:</strong> El frontend en React muestra las últimas capturas.
          </li>
        </ul>
      </div>

      {/* Recursos */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-accent mb-3">
           Recursos adicionales
        </h2>
        <a
          href="https://www.rtl-sdr.com/rtl-sdr-tutorial-receiving-noaa-weather-satellite-images/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Tutorial RTL-SDR para Meteor M2
        </a>
      </div>
    </section>
  );
}

export default Documentation;
