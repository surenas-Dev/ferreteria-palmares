export default function FAQ() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="section-title">Preguntas Frecuentes</h1>
            <div className="section-subline"></div>

            <div className="space-y-4">
                {preguntas.map((p, index) => (
                    <details key={index} className="card cursor-pointer">
                        <summary className="text-lg font-semibold">{p.q}</summary>
                        <p className="mt-3 text-gray-600 leading-relaxed">{p.a}</p>
                    </details>
                ))}
            </div>
        </div>
    );
}
