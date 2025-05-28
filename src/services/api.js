const API_URL = "http://localhost:5000/api/datos";

export const obtenerDatos = async () => {
    const res = await fetch(API_URL);
    return await res.json();
};
