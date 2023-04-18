import { Movie, MovieQuote } from '../Models/Movie';
import { Base } from '../client/base';
import { RequestQuery } from '../types';
import { resources } from '../utils';
import { formatUrlWithQueries } from '../utils/queryFormat';

/**
 * MovieService class provides methods for interacting with movie-related API endpoints.
 * Extends the Base class which handles API requests.
 */
export class MovieService extends Base {
    
  /**
   * Retrieves a list of movies with optional query parameters.
   *
   * @param {RequestQuery} query - Optional query parameters for filtering, sorting, and pagination.
   * @returns {Promise<Movie[]>} - Promise that resolves to an array of Movie objects.
   */
  public async getMovies(query?: RequestQuery): Promise<Movie[]> {
    const movieUrl = formatUrlWithQueries(`${resources.movie}`, query);
    return await this.invoke(movieUrl);
  }

  /**
   * Retrieves a single movie by ID with optional query parameters.
   *
   * @param {string} id - ID of the movie to retrieve.
   * @param {RequestQuery} query - Optional query parameters for filtering, sorting, and pagination.
   * @returns {Promise<Movie>} - Promise that resolves to a Movie object.
   */
  public async getSingleMovie(id: string, query?: RequestQuery): Promise<Movie> {
    const movieUrl = formatUrlWithQueries(`${resources.movie}/${id}`, query);
    return await this.invoke(movieUrl);
  }

  /**
   * Retrieves a movie quote by movie ID with optional query parameters.
   *
   * @param {string} id - ID of the movie to retrieve the quote from.
   * @param {RequestQuery} query - Optional query parameters for filtering, sorting, and pagination.
   * @returns {Promise<MovieQuote>} - Promise that resolves to a MovieQuote object.
   */
  public async getMovieQuote(id: string, query?: RequestQuery): Promise<MovieQuote> {
    const url = formatUrlWithQueries(`${resources.movie}/${id}/quote`, query);
    return await this.invoke(url);
  }
}
