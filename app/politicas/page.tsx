export default function Politicas() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="section-title">Políticas y Reglamentos</h1>
            <div className="section-subline"></div>

            <div className="space-y-10 text-lg leading-relaxed text-gray-700">

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Garantías</h2>
                    <p className="mt-2">
                        Las garantías dependen del fabricante y se tramitan con factura original.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Devoluciones</h2>
                    <p className="mt-2">
                        Se aceptan devoluciones dentro de los 30 días con el producto sin uso.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Privacidad</h2>
                    <p className="mt-2">
                        No compartimos información personal con terceros.
                    </p>
                </section>

            </div>
        </div>
    );
}
