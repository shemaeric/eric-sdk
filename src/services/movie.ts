import { Movie, MovieQuote } from '../Models/Movie';
import { Base } from '../client/base';
import { RequestQuery } from '../types';
import { resources } from '../utils';
import { formatUrlWithQueries } from '../utils/queryFormat';

export class MovieService extends Base {
    
  public async getMovies(query?: RequestQuery): Promise<Movie[]> {
    const movieUrl = formatUrlWithQueries(`${resources.movie}`, query);
    return await this.invoke(movieUrl);
  }

  public async getSingleMovie(id: string, query?: RequestQuery): Promise<Movie> {
    const movieUrl = formatUrlWithQueries(`${resources.movie}/${id}`, query);
    return await this.invoke(movieUrl);
  }

  public async getMovieQuote(id: string, query?: RequestQuery): Promise<MovieQuote> {
    const url = formatUrlWithQueries(`${resources.movie}/${id}/quote`, query);
    return await this.invoke(url);
  }
}
