import data from "@/data/politicas.json";
import { Politicas } from "@/models/Politica";

export function getPoliticas(): string[] {
    return (data as Politicas).politicas;
}
