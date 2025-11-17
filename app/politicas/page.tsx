export const metadata = {
    title: "Políticas y Reglamentos | Ferretería Palmares",
};

export default function Politicas() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-palmares-green mb-8">Políticas y Reglamentos</h1>

            <h2 className="text-2xl font-semibold mt-6">Garantías</h2>
            <p className="text-gray-700 mt-2">
                Las garantías dependen del fabricante y se tramitan con factura original.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Devoluciones</h2>
            <p className="text-gray-700 mt-2">
                Se aceptan devoluciones dentro de los 30 días con el producto sin uso.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Privacidad</h2>
            <p className="text-gray-700 mt-2">
                No compartimos información personal con terceros.
            </p>
        </div>
    );
}
