import { MovieService } from "../../services";
import { Movie } from "../../Models";

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
});
