import { useEffect, useState } from "react";
import { obtenerDatos } from "../services/api";
import Registro from "../components/Registro";

function Home() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setDatos(await obtenerDatos());
        };
        fetchData();
        const interval = setInterval(fetchData, 2000); // Actualizar cada 2 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Registro datos={datos} />
        </div>
    );
}

export default Home;
