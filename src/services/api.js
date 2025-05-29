//const API_URL = "http://localhost:5000/api/datos";
const API_URL = "https://tecla2-back.vercel.app/api/datos";
export const obtenerDatos = async () => {
    const res = await fetch(API_URL);
    return await res.json();
};
