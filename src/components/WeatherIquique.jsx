import { useEffect, useState } from "react";

function WeatherIquique() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);

        const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
        console.log("API KEY:", apiKey); // 👈 para comprobar que llega

        const url = `https://api.openweathermap.org/data/2.5/weather?q=Iquique,CL&units=metric&lang=es&appid=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();

        console.log("Respuesta OpenWeather:", res.status, data); // 👈 ver qué dice la API

        if (!res.ok) {
          // aquí usamos el mensaje real de la API
          throw new Error(data.message || "No se pudo obtener el clima");
        }

        setWeather(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) return <p className="text-slate-400">Cargando clima...</p>;
  if (error) return <p className="text-red-400">Error al obtener el clima: {error}</p>;
  if (!weather) return null;

  return (
    <div className="bg-[#112240] p-6 rounded-lg shadow-md text-[#CCD6F6] w-full max-w-sm mx-auto text-center">
      <h2 className="text-accent text-xl font-semibold mb-2">
        Clima en Iquique ☀️
      </h2>
      <p className="text-5xl font-bold text-white mb-1">
        {Math.round(weather.main.temp)}°C
      </p>
      <p className="capitalize mb-4">{weather.weather[0].description}</p>
      <div className="flex justify-around text-sm">
        <span>Humedad: {weather.main.humidity}%</span>
        <span>Viento: {weather.wind.speed} m/s</span>
      </div>
    </div>
  );
}

export default WeatherIquique;
