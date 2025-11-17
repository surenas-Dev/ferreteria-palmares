import Image from "next/image";
import MarcasSlider from "@/components/MarcasSlider";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* HERO */}
            <section className="text-center py-24 px-6">
                <Image
                    src="/logo.png"
                    alt="Ferretería Palmares"
                    width={140}
                    height={140}
                    className="mx-auto mb-6 drop-shadow"
                />

                <h1 className="text-5xl md:text-6xl font-extrabold text-palmares-green mb-4">
                    Ferretería Palmares
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Calidad, servicio y experiencia para tus proyectos.
                </p>

                <button className="mt-8 bg-palmares-green text-white px-10 py-4 rounded-full text-lg hover:bg-palmares-yellow hover:text-black transition duration-300 shadow-lg">
                    Contáctanos
                </button>
            </section>

            {/* MARCAS */}
            <section className="py-20 text-center bg-gray-50">
                <h2 className="text-3xl font-bold text-palmares-green">
                    Confían en nosotros
                </h2>

                <div className="w-20 h-1 bg-palmares-yellow mx-auto mt-3 mb-10 rounded-full"></div>

                <MarcasSlider />
            </section>

            {/* SUCURSALES */}
            <section className="px-6 md:px-20 my-20">
                <h2 className="text-3xl font-bold text-palmares-green mb-10 text-center">
                    ¿Dónde encontrarnos?
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Palmares</h3>
                        <p className="text-gray-600">Pérez Zeledón, San José</p>
                        <a
                            href="https://maps.app.goo.gl/3uYwN7AXwsbGzjhs6"
                            target="_blank"
                            className="text-palmares-green underline mt-2 inline-block"
                        >
                            Ver en mapa
                        </a>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Uvita</h3>
                        <p className="text-gray-600">Uvita, Puntarenas</p>
                        <a
                            href="https://maps.app.goo.gl/2Y2VYDPHcbjF8Y8H9"
                            target="_blank"
                            className="text-palmares-green underline mt-2 inline-block"
                        >
                            Ver en mapa
                        </a>
                    </div>
                </div>
            </section>

            {/* POSTS FUTUROS */}
            <section className="px-6 md:px-20 pb-20">
                <h2 className="text-3xl font-bold text-palmares-green text-center mb-10">
                    Últimas publicaciones
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="h-56 bg-gray-100 rounded-xl shadow-sm flex items-center justify-center text-gray-400"
                        >
                            Publicación {i}
                        </div>
                    ))}
                </div>
            </section>

            {/* WHATSAPP */}
            <a
                href="https://wa.me/50600000000"
                target="_blank"
                className="fixed bottom-6 right-6 bg-palmares-green text-white p-4 rounded-full shadow-lg hover:bg-palmares-yellow hover:text-black transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-7 h-7 fill-current"
                >
                    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.57 2.15 8.01L.5 31.5l7.7-2.02A15.4 15.4 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28.2c-2.52 0-4.97-.67-7.11-1.94l-.51-.3-4.57 1.2 1.22-4.46-.33-.55A13.17 13.17 0 0 1 2.8 16C2.8 9 9 2.8 16 2.8S29.2 9 29.2 16 23 28.7 16 28.7zM23.3 19.1c-.39-.2-2.32-1.15-2.68-1.28-.36-.13-.63-.2-.9.2-.27.39-1.04 1.28-1.28 1.54-.23.26-.47.29-.86.1-.39-.2-1.64-.6-3.12-1.92-1.15-1.03-1.93-2.3-2.16-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.47.59-.7.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.9-2.15-1.23-2.93-.32-.78-.66-.67-.9-.67-.23 0-.49-.03-.75-.03-.26 0-.69.1-1.05.49-.36.39-1.38 1.34-1.38 3.27 0 1.93 1.41 3.8 1.61 4.07.2.26 2.78 4.35 6.75 6.01 3.97 1.66 3.97 1.11 4.68 1.04.72-.07 2.32-.95 2.65-1.86.33-.91.33-1.69.23-1.86-.1-.16-.36-.26-.75-.46z" />
                </svg>
            </a>

        </div>
    );
}
