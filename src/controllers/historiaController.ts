import historiaData from "@/data/historia.json";
import { Historia, Hito, Noticia } from "@/models/Historia";

const historia: Historia = historiaData as Historia;

export function getHistoria(): string {
    return historia.descripcion;
}
export function getHitos(): Hito[] {
    return historia.hitos;
}

export function getNoticias(): Noticia[] {
    return historia.noticias;
}
