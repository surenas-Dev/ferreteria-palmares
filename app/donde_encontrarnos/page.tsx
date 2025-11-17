export const metadata = {
  title: "Dónde encontrarnos | Ferretería Palmares",
};

export default function Sucursales() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-palmares-green mb-10">
                Nuestras Sucursales
            </h1>

            {/* Sucursal Pérez Zeledón */}
            <div className="mb-16">
                <h2 className="text-3xl font-semibold text-palmares-gray mb-3">
                    Pérez Zeledón
                </h2>
                <p className="text-gray-600 mb-4">
                    100 metros oeste del cruce principal de Palmares, Pérez Zeledón.
                </p>

                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.14186061458!2d-83.66880892521559!3d9.320695990752752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa14df067ca9b93%3A0xe4ed907c6c599bb!2sFerreter%C3%ADa%20Palmares!5e0!3m2!1ses!2scr!4v1763352773644!5m2!1ses!2scr"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Sucursal Uvita */}
            <div className="mb-10">
                <h2 className="text-3xl font-semibold text-palmares-gray mb-3">
                    Uvita
                </h2>
                <p className="text-gray-600 mb-4">
                    Diagonal al Banco Nacional, Uvita, Puntarenas.
                </p>

                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.891816059747!2d-83.73805382521762!3d9.164231190902617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1571790822f6f%3A0xa75daef62bd6f88e!2sFerreteria%20Palmares%20-%20Uvita!5e0!3m2!1ses!2scr!4v1763352751350!5m2!1ses!2scr"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

