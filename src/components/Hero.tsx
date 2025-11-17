import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white">

            {/* Pattern suave */}
            <div className="absolute inset-0 opacity-5 bg-[url('/pattern.svg')] bg-cover"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

                {/* Texto */}
                <div>
                    <Image
                        src="/logo.png"
                        alt="Ferretería Palmares"
                        width={90}
                        height={90}
                        className="mb-6"
                    />

                    <h1 className="text-5xl md:text-6xl font-bold text-palmares-green leading-tight">
                        Todo para tu proyecto
                        <span className="text-palmares-gray block">en un solo lugar</span>
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        Materiales, herramientas y asesoría con el mejor servicio de Palmares.
                    </p>

                    <a
                        href="https://wa.me/50600000000"
                        className="inline-block mt-8 px-10 py-4 rounded-full bg-palmares-green text-white text-lg hover:bg-palmares-yellow hover:text-black transition shadow"
                    >
                        Contáctanos
                    </a>
                </div>

                {/* Imagen decorativa moderna */}
                <div className="flex justify-center">
                    <Image
                        src="/hero-illustration.png"
                        alt="Construcción"
                        width={420}
                        height={420}
                        className="drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
