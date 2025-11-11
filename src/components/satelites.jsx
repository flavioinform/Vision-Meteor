import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

function Satellites() {
  // estado del componente
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ nuevo estado: imagen seleccionada para ver en grande
  const [selected, setSelected] = useState(null);

  // función para obtener las imágenes de supabase
  useEffect(() => {
    async function fetchImagenes() {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("satelites") // nombre exacto de la tabla
        .select("id, title, image_url, description");

      if (error) {
        console.log("Error al obtener las imagenes:", error);
        setError(error.message);
      } else {
        setImagenes(data);
      }

      setLoading(false);
    }

    fetchImagenes();
  }, []);

  return (
    <section className="mt-12 px-6 md:px-12 pb-10">
      <h2 className="text-xl font-bold mb-4 text-white">
        Tipos de Satélites
      </h2>

      {loading && <p className="text-[#CCD6F6]">Cargando imágenes...</p>}

      {error && (
        <p className="text-red-400">Error al cargar imágenes: {error}</p>
      )}

      {!loading && !error && imagenes.length === 0 && (
        <p className="text-[#CCD6F6]">
          No hay imágenes cargadas en el backend.
        </p>
      )}

      {/* GRID de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {imagenes.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelected(img)} // 👈 al hacer click abrimos el modal
            className="group relative bg-cover bg-center rounded-lg overflow-hidden aspect-video cursor-pointer"
            style={{ backgroundImage: `url(${img.image_url})` }}
          >
            <div className="absolute inset-0 bg-[#0A192F]/60 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="absolute bottom-0 p-4 z-10">
              <p className="text-accent font-bold line-clamp-2">
                {img.title}
              </p>
              {/* <p className="text-xs text-slate-400">
                {img.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL: imagen grande */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)} // clic fuera = cerrar
        >
          <div
            className="bg-[#0A192F] rounded-lg max-w-3xl w-full mx-4 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // evita que el clic interior cierre el modal
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-xl bg-black/40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
            >
              ✕
            </button>

            {/* Imagen grande */}
            <div className="bg-black max-h-[70vh] overflow-hidden">
              <img
                src={selected.image_url}
                alt={selected.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Texto */}
            <div className="p-4">
              <h3 className="text-white text-lg font-semibold mb-2">
                {selected.title}
              </h3>
              <p className="text-[#CCD6F6] text-sm">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Satellites;
