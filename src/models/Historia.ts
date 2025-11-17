export interface Hito {
    anio: number;
    evento: string;
}

export interface Noticia {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;
}

export interface Historia {
    descripcion: string;
    hitos: Hito[];
    noticias: Noticia[];
}
