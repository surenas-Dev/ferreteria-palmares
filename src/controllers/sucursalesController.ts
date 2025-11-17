import sucursalesData from "@/data/sucursales.json";
import { Sucursal } from "@/models/Sucursal";

// Decirle a TypeScript que el JSON es un array de Sucursal[]
const data: Sucursal[] = sucursalesData as Sucursal[];

export function getSucursales(): Sucursal[] {
    return data;
}

export function getSucursalById(id: number): Sucursal | undefined {
    return data.find((s: Sucursal) => s.id === id);
}
