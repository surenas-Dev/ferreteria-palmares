"use client";
import { useEffect, useRef } from "react";

const marcas = [
    "truper.png",
    "megalineas.png",
    "sur.png",
    "lanco.png",
    "dck.png",
    "emtop.png",
];

export default function MarcasSlider() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = ref.current;
        let scrollAmount = 0;

        function autoScroll() {
            if (!slider) return;
            scrollAmount += 1;
            slider.scrollLeft = scrollAmount;
            if (scrollAmount >= slider.scrollWidth / 2) scrollAmount = 0;
        }

        const interval = setInterval(autoScroll, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden py-10 bg-white">
            <div ref={ref} className="flex gap-16 whitespace-nowrap scroll-smooth">

                {/* Duplico la lista para scroll infinito */}
                {marcas.map((m, i) => (
                    <img
                        key={i}
                        src={`/marcas/${m}`}
                        className="h-16 opacity-70 hover:opacity-100 transition"
                        alt={`Marca ${m}`}
                    />
                ))}
                {marcas.map((m, i) => (
                    <img
                        key={`dup-${i}`}
                        src={`/marcas/${m}`}
                        className="h-16 opacity-70 hover:opacity-100 transition"
                        alt={`Marca ${m}`}
                    />
                ))}

            </div>
        </div>
    );
}
