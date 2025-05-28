function Registro({ datos }) {
    return (
        <ul>
            {datos.map((item, index) => (
                <li key={index}>{item.tecla} - {item.fecha_hora}</li>
            ))}
        </ul>
    );
}

export default Registro;
