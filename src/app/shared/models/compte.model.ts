export interface Compte {
    id: number;
    compteNumber: string;
    solde: number;
    nomCompte: string;
    type: string;
    titulaire: string;
}

export interface CompteCreation {
    nomCompte: string | null;
    type: string | null;
}

