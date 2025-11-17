"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MarcasSlider from "@/components/MarcasSlider";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />

                <Image
                    src="/hero-ferreteria.jpg"
                    alt="Ferretería Palmares"
                    fill
                    className="object-cover brightness-75"
                />

                <div className="relative z-20 text-center py-40 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Ferretería Palmares"
                            width={130}
                            height={130}
                            className="mx-auto mb-6 drop-shadow-xl"
                        />

                        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                            Ferretería Palmares
                        </h1>

                        <p className="text-xl text-gray-100 max-w-2xl mx-auto mt-4 drop-shadow">
                            Calidad, servicio y experiencia para tus proyectos.
                        </p>

                        <a
                            href="https://wa.me/50600000000"
                            target="_blank"
                            className="inline-block mt-10 px-12 py-4 bg-palmares-green hover:bg-palmares-yellow text-white hover:text-black font-semibold rounded-full text-lg shadow-xl transition"
                        >
                            Contáctanos
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* MARCAS */}
            <section className="py-20 text-center bg-gray-50">
                <h2 className="text-4xl font-bold text-palmares-green">
                    Nuestras Marcas
                </h2>

                <div className="w-24 h-1 bg-palmares-yellow mx-auto mt-3 mb-14 rounded-full"></div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <MarcasSlider />
                </motion.div>
            </section>

            {/* SUCURSALES */}
            <section className="px-6 md:px-20 my-24">
                <h2 className="text-4xl font-bold text-palmares-green mb-10 text-center">
                    Sucursales
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {[
                        {
                            nombre: "Palmares",
                            descripcion: "Pérez Zeledón, San José",
                            url: "https://www.google.com/maps?q=Ferreteria+Palmares+Uvita",
                        },
                        {
                            nombre: "Uvita",
                            descripcion: "Uvita, Puntarenas",
                            url: "https://www.google.com/maps?q=Ferreteria+Palmares",
                        },
                    ].map((suc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition bg-white"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                {suc.nombre}
                            </h3>
                            <p className="text-gray-600 text-lg">{suc.descripcion}</p>

                            <a
                                href={suc.url}
                                target="_blank"
                                className="text-palmares-green underline mt-4 inline-block font-medium"
                            >
                                Ver en mapa
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* POSTS FUTUROS */}
            <section className="px-6 md:px-20 pb-28">
                <h2 className="text-4xl font-bold text-palmares-green text-center mb-12">
                    Últimas publicaciones
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="h-60 bg-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition flex items-center justify-center text-gray-400 text-xl font-medium"
                        >
                            Publicación {i}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHATSAPP FLOATING */}
            <a
                href="https://wa.me/50600000000"
                target="_blank"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-current"
                >
                    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.57 2.15 8.01L.5 31.5l7.7-2.02A15.4 15.4 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zM16 28.7c-2.52 0-4.97-.67-7.11-1.94l-.51-.3-4.57 1.2 1.22-4.46-.33-.55A13.17 13.17 0 0 1 2.8 16C2.8 9 9 2.8 16 2.8S29.2 9 29.2 16 23 28.7 16 28.7z" />
                    <path d="M23.3 19.1c-.39-.2-2.32-1.15-2.68-1.28-.36-.13-.63-.2-.9.2-.27.39-1.04 1.28-1.28 1.54-.23.26-.47.29-.86.1-.39-.2-1.64-.6-3.12-1.92-1.15-1.03-1.93-2.3-2.16-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.47.59-.7.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.9-2.15-1.23-2.93-.32-.78-.66-.67-.9-.67-.23 0-.49-.03-.75-.03-.26 0-.69.1-1.05.49-.36.39-1.38 1.34-1.38 3.27 0 1.93 1.41 3.8 1.61 4.07.2.26 2.78 4.35 6.75 6.01 3.97 1.66 3.97 1.11 4.68 1.04.72-.07 2.32-.95 2.65-1.86.33-.91.33-1.69.23-1.86-.1-.16-.36-.26-.75-.46z" />
                </svg>
            </a>
        </div>
    );
}
