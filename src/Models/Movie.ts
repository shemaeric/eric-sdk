export declare type Movie = {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
}

export declare type MovieQuote = {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
    id: string;
}