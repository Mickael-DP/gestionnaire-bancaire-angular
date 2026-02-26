export interface Compte {
    id: number;
    compteNumber: string;
    solde: number;
    titulaire: string;
    type: string;
}

export interface CompteCreation {
    titulaire: string | null;
    type: string | null;
}

