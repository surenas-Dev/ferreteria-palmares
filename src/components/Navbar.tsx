import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Ferretería Palmares"
                        width={45}
                        height={45}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <Link href="/quienes_somos" className="hover:text-palmares-green">Quiénes somos</Link>
                    <Link href="/sucursales" className="hover:text-palmares-green">Sucursales</Link>
                    <Link href="/faq" className="hover:text-palmares-green">FAQ</Link>
                    <Link href="/noticias" className="hover:text-palmares-green">Noticias</Link>
                    <Link href="/politicas" className="hover:text-palmares-green">Políticas</Link>
                </div>

                {/* Mobile button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ?
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white px-6 pb-4 space-y-3">
                    <Link href="/quienes_somos" className="block">Quiénes somos</Link>
                    <Link href="/sucursales" className="block">Sucursales</Link>
                    <Link href="/faq" className="block">FAQ</Link>
                    <Link href="/noticias" className="block">Noticias</Link>
                    <Link href="/politicas" className="block">Políticas</Link>
                </div>
            )}
        </nav>
    );
}
