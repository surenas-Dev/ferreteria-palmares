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
        <div className="overflow-hidden py-12 bg-white shadow-inner">
            <div
                ref={ref}
                className="flex gap-20 px-10 whitespace-nowrap items-center"
            >
                {marcas.map((m, i) => (
                    <img
                        key={i}
                        src={`/marcas/${m}`}
                        className="h-20 opacity-70 hover:opacity-100 transition"
                        alt={`Marca ${m}`}
                    />
                ))}

                {/* Segunda copia para scroll infinito */}
                {marcas.map((m, i) => (
                    <img
                        key={`dup-${i}`}
                        src={`/marcas/${m}`}
                        className="h-20 opacity-70 hover:opacity-100 transition"
                        alt={`Marca ${m}`}
                    />
                ))}
            </div>
        </div>
    );
}
