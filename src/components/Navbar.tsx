"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/quienes_somos", label: "Quiénes somos" },
        { href: "/sucursales", label: "Sucursales" },
        { href: "/faq", label: "FAQ" },
        { href: "/noticias", label: "Noticias" },
        { href: "/politicas", label: "Políticas" },
    ];

    return (
        <nav className="w-full bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Ferretería Palmares"
                        width={45}
                        height={45}
                        priority
                    />
                    <span className="text-xl font-semibold text-gray-800">Palmares</span>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex gap-10 text-gray-700 font-medium">
                    {links.map(l => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="hover:text-palmares-green transition"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white px-6 pb-5 space-y-3 shadow-inner">
                    {links.map(l => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="block py-2 text-gray-700 font-medium"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
