import { getHistoria, getHitos, getNoticias } from "@/controllers/historiaController";

export default function QuienesSomos() {
    const historia = getHistoria();
    const hitos = getHitos();

    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="section-title">Quiénes Somos</h1>
            <div className="section-subline"></div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
                {historia}
            </p>

            {/* Hitos */}
            <h2 className="text-3xl font-bold text-palmares-green mb-6">Nuestros Hitos</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {hitos.map((h, i) => (
                    <div key={i} className="card">
                        <h3 className="text-xl font-semibold text-gray-900">{h.anio}</h3>
                        <p className="text-gray-600 mt-2">{h.evento}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
