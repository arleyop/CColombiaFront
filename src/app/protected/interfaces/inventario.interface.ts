import { Fruta } from "./frutas.interface";

export interface inventarioS {
    _id:string;
    id_tienda: string;
    id_fruta: Fruta
    tipo: string;
    inventarioCanastilla: number;
    inventarioBulto: number;
    valorMedioKilo: number;
    valorKilo: number;
    valorC: number;
    valorB: number;
  }
  