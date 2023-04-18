import { Movie } from '../Models/Movie';
import { Base } from '../client/base';
import { resources } from '../utils';

export class MovieService extends Base {
    
  public async getMovies(): Promise<Movie[]> {
    const movieUrl = `${resources.movie}`;

    return await this.invoke(movieUrl);
  }

  public async getSingleMovie(id: string): Promise<Movie> {
    const movieUrl = `${resources.movie}/${id}`;

    return await this.invoke(movieUrl);
  }
}
