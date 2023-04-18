
/**
 * Movie object representing a movie entity.
 * @typedef {Object} Movie
 * @property {string} _id - The unique identifier of the movie.
 * @property {string} name - The name of the movie.
 * @property {number} runtimeInMinutes - The runtime of the movie in minutes.
 * @property {number} budgetInMillions - The budget of the movie in millions.
 * @property {number} boxOfficeRevenueInMillions - The box office revenue of the movie in millions.
 * @property {number} academyAwardNominations - The number of academy award nominations of the movie.
 * @property {number} academyAwardWins - The number of academy award wins of the movie.
 * @property {number} rottenTomatoesScore - The rotten tomatoes score of the movie.
 */
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

/**
 * MovieQuote object representing a movie quote entity.
 * @typedef {Object} MovieQuote
 * @property {string} _id - The unique identifier of the movie quote.
 * @property {string} dialog - The dialog of the movie quote.
 * @property {string} movie - The movie associated with the movie quote.
 * @property {string} character - The character associated with the movie quote.
 * @property {string} id - The ID of the movie quote.
 */
export declare type MovieQuote = {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
    id: string;
}