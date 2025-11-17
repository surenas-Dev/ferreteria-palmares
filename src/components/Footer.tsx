export default function Footer() {
    return (
        <footer className="bg-gray-100 py-10 mt-20 border-t">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

                <div>
                    <h3 className="text-lg font-semibold text-palmares-green mb-3">
                        Ferretería Palmares
                    </h3>
                    <p className="text-gray-600">
                        Comprometidos con ofrecer calidad, precios y servicio excepcional.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Enlaces</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li>Quiénes somos</li>
                        <li>Sucursales</li>
                        <li>FAQ</li>
                        <li>Políticas</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Redes sociales</h3>
                    <div className="flex gap-4">
                        <a href="#" className="text-palmares-green text-2xl">??</a>
                        <a href="#" className="text-palmares-green text-2xl">??</a>
                    </div>
                </div>

            </div>

            <p className="text-center text-gray-500 mt-10">
                © {new Date().getFullYear()} Ferretería Palmares — Todos los derechos reservados
            </p>
        </footer>
    );
}
