export const metadata = {
    title: "Preguntas Frecuentes | Ferretería Palmares",
};

const preguntas = [
    {
        q: "¿Cuáles son los horarios de atención?",
        a: "Atendemos de lunes a sábado de 7:30am a 6:00pm.",
    },
    {
        q: "¿Hacen entregas a domicilio?",
        a: "Sí, realizamos entregas dentro de Palmares y zonas cercanas.",
    },
    {
        q: "¿Aceptan pagos con tarjeta?",
        a: "Aceptamos tarjetas, Sinpe móvil y transferencias.",
    },
    {
        q: "¿Tienen garantía en herramientas?",
        a: "Sí, según la marca y tipo de herramienta.",
    },
];

export default function FAQ() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-palmares-green mb-10">Preguntas Frecuentes</h1>

            <div className="space-y-6">
                {preguntas.map((p, index) => (
                    <details key={index} className="border rounded-lg p-5">
                        <summary className="cursor-pointer font-medium text-lg">{p.q}</summary>
                        <p className="mt-3 text-gray-600">{p.a}</p>
                    </details>
                ))}
            </div>
        </div>
    );
}
