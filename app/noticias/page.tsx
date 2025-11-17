import noticias from "@/data/historia.json";

export default function Noticias() {
    return (
        <div className="px-6 md:px-20 py-10">
            <h1 className="text-4xl font-bold text-palmares-green mb-10">
                Noticias
            </h1>

            {noticias.noticias.map((n) => (
                <div key={n.id} className="border p-6 rounded-xl shadow-sm mb-6">
                    <h2 className="text-2xl font-semibold">{n.titulo}</h2>
                    <p className="text-gray-600">{n.descripcion}</p>
                    <p className="text-sm text-gray-500 mt-2">{n.fecha}</p>
                </div>
            ))}
        </div>
    );
}
