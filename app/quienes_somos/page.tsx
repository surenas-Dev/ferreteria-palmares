import { getHistoria, getHitos, getNoticias } from "@/controllers/historiaController";

export default function QuienesSomos() {
    const historia = getHistoria();
    const hitos = getHitos();
    const noticias = getNoticias();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Quiénes somos</h1>

            <p className="mb-6">{historia}</p>

            <h2 className="text-2xl font-bold mb-4">Hitos</h2>
            <ul className="list-disc ml-6">
                {hitos.map((h, i) => (
                    <li key={i}>
                        <strong>{h.anio}:</strong> {h.evento}
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Noticias</h2>
            {noticias.map((n) => (
                <div key={n.id} className="mb-4">
                    <h3 className="text-xl font-semibold">{n.titulo}</h3>
                    <p>{n.descripcion}</p>
                </div>
            ))}
        </div>
    );
}
