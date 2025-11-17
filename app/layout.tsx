import "./globals.css";
import Link from "next/link";

export const metadata = {
    title: {
        default: "Ferretería Palmares",
        template: "%s | Ferretería Palmares",
    },
    description:
        "Materiales, herramientas y servicio de calidad en Palmares, Costa Rica.",
    openGraph: {
        title: "Ferretería Palmares",
        description: "Materiales y herramientas para construcción.",
        type: "website",
        locale: "es_CR",
        url: "https://ferreteriapalmares.cr",
        siteName: "Ferretería Palmares",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Ferretería Palmares",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className="bg-gray-50 text-gray-800">
                {/* NAVBAR */}
                <nav className="w-full bg-green-700 text-white px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        Ferretería Palmares
                    </Link>

                    <div className="flex gap-4">
                        <Link href="/donde_encontrarnos">Sucursales</Link>
                        <Link href="/quienes_somos">Quiénes somos</Link>
                        <Link href="/faq">Preguntas</Link>
                        <Link href="/politicas">Políticas</Link>
                    </div>
                </nav>

                {/* CONTENIDO */}
                <main className="min-h-screen p-6">{children}</main>

                {/* FOOTER */}
                <footer className="w-full bg-gray-900 text-white text-center py-6 mt-10">
                    <p>© {new Date().getFullYear()} Ferretería Palmares</p>
                    <p>Pérez Zeledón • Uvita, Puntarenas</p>
                </footer>

                {/* BOTÓN WHATSAPP */}
                <a
                    href="https://wa.me/506XXXXXXXX?text=¡Hola!%20Quiero%20más%20información."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl text-3xl"
                >
                    ??
                </a>
            </body>

            {/* GOOGLE ANALYTICS */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `,
                }}
            />
        </html>
    );
}
