import { Base, Config } from "../../client";

class TestConcreteClass extends Base {
  constructor(config: Config) {
    super(config);
  }
  public async invokeTest(endpoint: string, options?: RequestInit) {
    return this.invoke(endpoint, options);
  }
}

function mockFetch(returnValue: unknown) {
  global.fetch = jest.fn(() => Promise.resolve(returnValue)) as jest.Mock;
}

let client: TestConcreteClass;

const API_KEY = "API_KEY";

beforeEach(() => {
  client = new TestConcreteClass({ apiKey: API_KEY });
});

describe("Base", () => {
    test("get should succeed when response is ok", async () => {
      mockFetch({
        ok: true,
        json: () => Promise.resolve([{ name: "The Lord of the Rings Series" }]),
      });
  
      const actual = await client.invokeTest("movie");
  
      expect(actual).toEqual([{ name: "The Lord of the Rings Series" }]);
    });
  
    test("get should throw an error when response is not ok", async () => {
      mockFetch({
        ok: false,
        statusText: "Unauthorized",
      });
  
      await expect(client.invokeTest("movie")).rejects.toThrowError("Unauthorized");
    });
  
    test("get should include authorization header with API key", async () => {
      mockFetch({
        ok: true,
        json: () => Promise.resolve([{ name: "The Lord of the Rings Series" }]),
      });
  
      await client.invokeTest("movie");
  
      expect(global.fetch).toHaveBeenCalledWith(
        "https://the-one-api.dev/v2/movie",
        expect.objectContaining({
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer API_KEY",
          },
        })
      );
    });
  
    test("get should use custom base URL if provided in config", async () => {
      const baseUrl = "https://custom-api-url.com";
      client = new TestConcreteClass({ apiKey: API_KEY, baseUrl });
  
      mockFetch({
        ok: true,
        json: () => Promise.resolve([{ name: "The Lord of the Rings Series" }]),
      });
  
      await client.invokeTest("movie");
  
      expect(global.fetch).toHaveBeenCalledWith(
        "https://custom-api-url.com/v2/movie",
        expect.any(Object)
      );
    });
  
    test("get should use default base URL if not provided in config", async () => {
      client = new TestConcreteClass({ apiKey: API_KEY });
  
      mockFetch({
        ok: true,
        json: () => Promise.resolve([{ name: "The Lord of the Rings Series" }]),
      });
  
      await client.invokeTest("movie");
  
      expect(global.fetch).toHaveBeenCalledWith(
        "https://the-one-api.dev/v2/movie",
        expect.any(Object)
      );
    });

  test('linkFormat', () => {
    const config: Config = { apiKey: 'myApiKey' };
    const testConcreteInstance = new TestConcreteClass(config);

    // Call the linkFormat method with a test endpoint
    const result = testConcreteInstance['linkFormat']('testEndpoint');

    // Expect the result to be the formatted URL
    expect(result).toBe('https://the-one-api.dev/v2/testEndpoint');
  });
  });
  
