import { MovieService } from "../../services";
import { Movie, MovieQuote } from "../../Models";

// Mock fetch function
function mockFetch(returnValue: unknown) {
  global.fetch = jest.fn(() => Promise.resolve(returnValue)) as jest.Mock;
}

let movieService: MovieService;

beforeEach(() => {
  movieService = new MovieService({ apiKey: "API_KEY" });
});

describe("MovieService", () => {
  test("getMovies should fetch movies successfully", async () => {
    // Mock fetch response
    const movies = [{ name: "The Lord of the Rings Series" }] as Movie[];
    mockFetch({
      ok: true,
      json: () => Promise.resolve(movies),
    });

    // Call getMovies method
    const actual = await movieService.getMovies();

    // Assert response
    expect(actual).toEqual(movies);
  });

  test("getMovies should throw an error when fetch response is not ok", async () => {
    // Mock fetch response
    mockFetch({
      ok: false,
      statusText: "Unauthorized",
    });

    // Call getMovies method and expect it to throw an error
    await expect(movieService.getMovies()).rejects.toThrowError("Unauthorized");
  });

  test("getSingleMovie should fetch a single movie successfully", async () => {
    // Mock fetch response
    const movieId = "123";
    const movie = { name: "The Lord of the Rings: The Fellowship of the Ring" } as Movie;
    mockFetch({
      ok: true,
      json: () => Promise.resolve(movie),
    });

    // Call getSingleMovie method
    const actual = await movieService.getSingleMovie(movieId);

    // Assert response
    expect(actual).toEqual(movie);
  });

  test("getSingleMovie should throw an error when fetch response is not ok", async () => {
    // Mock fetch response
    const movieId = "123";
    mockFetch({
      ok: false,
      statusText: "Not Found",
    });

    // Call getSingleMovie method and expect it to throw an error
    await expect(movieService.getSingleMovie(movieId)).rejects.toThrowError("Not Found");
  });

  test("getMovieQuote should fetch a movie quote successfully", async () => {
    // Mock fetch response
    const movieId = "123";
    const movieQuote = { dialog: "One ring to rule them all." } as unknown as MovieQuote;
    mockFetch({
      ok: true,
      json: () => Promise.resolve(movieQuote),
    });

    // Call getMovieQuote method
    const actual = await movieService.getMovieQuote(movieId);

    // Assert response
    expect(actual).toEqual(movieQuote);

  });

  test("getMovieQuote should throw an error when fetch response is not ok", async () => {
    // Mock fetch response
    const movieId = "123";
    mockFetch({
      ok: false,
      statusText: "Not Found",
    });

    // Call getMovieQuote method and expect it to throw an error
    await expect(movieService.getMovieQuote(movieId)).rejects.toThrowError("Not Found");
  });
});
