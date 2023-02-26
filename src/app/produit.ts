import { Categories } from "./categories";

export interface Produit {

    id: number;
    nom: string;
    qt: number;
    disponible: boolean;
    datecreation: Date;
    datemodification: Date;
    categorieid: any;
    }