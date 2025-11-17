import noticias from "@/data/historia.json";

export default function Noticias() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="section-title">Noticias</h1>
            <div className="section-subline"></div>

            <div className="grid md:grid-cols-2 gap-10">
                {noticias.noticias.map((n) => (
                    <div key={n.id} className="card">
                        <h2 className="text-2xl font-bold">{n.titulo}</h2>
                        <p className="text-gray-600 mt-3">{n.descripcion}</p>
                        <p className="text-sm text-gray-500 mt-4">{n.fecha}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
