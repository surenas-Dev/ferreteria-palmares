"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MarcasSlider from "@/components/MarcasSlider";

export default function Home() {
    return (
        <div className="bg-white">

            {/* HERO CORPORATIVO */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero-ferreteria.jpg"
                    alt="Ferretería Palmares"
                    fill
                    className="object-cover brightness-[0.45]"
                    priority
                />

                {/* overlay blur glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-6"
                >
                    <Image
                        src="/logo.png"
                        alt="Ferretería Palmares"
                        width={160}
                        height={160}
                        className="mx-auto drop-shadow-2xl mb-6"
                    />

                    <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-xl tracking-tight">
                        Construimos Confianza
                    </h1>

                    <p className="text-gray-200 text-xl max-w-2xl mx-auto mt-5">
                        Más de 20 años brindando calidad, servicio y soluciones para tus proyectos.
                    </p>

                    <a
                        href="https://wa.me/50600000000"
                        target="_blank"
                        className="inline-block mt-12 px-10 py-4 rounded-full
                        bg-palmares-green hover:bg-palmares-yellow hover:text-black
                        text-white font-semibold text-lg
                        shadow-[0_0_25px_rgba(63,174,41,0.6)]
                        hover:shadow-[0_0_35px_rgba(255,214,0,0.7)]
                        transition-all duration-300"
                    >
                        Contáctanos
                    </a>
                </motion.div>
            </section>

            {/* SECCIÓN VALORES / BENEFICIOS */}
            <section className="py-24 px-6 md:px-20 bg-white">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center text-gray-900 mb-16"
                >
                    ¿Por qué elegirnos?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {[
                        {
                            titulo: "Experiencia",
                            desc: "Décadas apoyando proyectos en la zona sur.",
                            icon: "🏗️"
                        },
                        {
                            titulo: "Calidad Garantizada",
                            desc: "Trabajamos solo con marcas de prestigio.",
                            icon: "⭐"
                        },
                        {
                            titulo: "Atención Profesional",
                            desc: "Nuestro equipo te asesora con soluciones reales.",
                            icon: "🤝"
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-10 bg-white shadow-xl rounded-2xl border hover:shadow-2xl transition cursor-default"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900">
                                {item.titulo}
                            </h3>
                            <p className="text-gray-600 text-lg">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* MARCAS */}
            <section className="py-24 bg-gray-50">
                <h2 className="text-4xl font-bold text-palmares-green text-center">
                    Marcas que confían en nosotros
                </h2>
                <div className="w-24 h-1 bg-palmares-yellow mx-auto mt-3 mb-12 rounded-full"></div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <MarcasSlider />
                </motion.div>
            </section>

            {/* SUCURSALES PREMIUM */}
            <section className="py-24 px-6 md:px-20 bg-white">
                <h2 className="text-4xl font-bold text-palmares-green mb-14 text-center">
                    Visítanos
                </h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {[
                        {
                            nombre: "Palmares",
                            dir: "Pérez Zeledón, San José",
                            url: "https://www.google.com/maps?q=Ferreteria+Palmares",
                            img: "/sucursal1.jpg"
                        },
                        {
                            nombre: "Uvita",
                            dir: "Uvita, Puntarenas",
                            url: "https://www.google.com/maps?q=Ferreteria+Palmares+Uvita",
                            img: "/sucursal2.jpg"
                        }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition bg-white border"
                        >
                            <Image
                                src={s.img}
                                alt={s.nombre}
                                width={800}
                                height={500}
                                className="object-cover w-full h-56"
                            />

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900">{s.nombre}</h3>
                                <p className="text-gray-600 text-lg mt-1">{s.dir}</p>

                                <a
                                    href={s.url}
                                    target="_blank"
                                    className="inline-block mt-5 text-palmares-green font-semibold underline text-lg"
                                >
                                    Ver en mapa
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHATSAPP FLOAT */}
            <a
                href="https://wa.me/50600000000"
                target="_blank"
                className="fixed bottom-6 right-6 bg-palmares-green text-white p-4 rounded-full shadow-2xl hover:bg-palmares-yellow hover:text-black transition"
            >
                <Image src="/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
            </a>
        </div>
    );
}
