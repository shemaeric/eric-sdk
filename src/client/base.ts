export type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  // Properties
  private apiKey: string;
  private baseUrl: string;
  private apiVersion = 'v2';

  constructor(config: Config) {
    // Initialize configuration options
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://the-one-api.dev';
  }

  /**
   * Makes an HTTP request to the API.
   * 
   * @template T - The type of the response data.
   * @param {string} endpoint - The API endpoint to send the request to.
   * @param {RequestInit} options - Optional configuration options for the request.
   * @returns {Promise<T>} - A Promise that resolves to the response data.
   * @throws {Error} - If the response is not successful (HTTP status not in the 200-299 range).
   */
  protected async invoke<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = this.linkFormat(endpoint);
    const headers = {
      'content-type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };
    const config = {
      ...options,
      headers,
    };
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }

  /**
   * Formats the API endpoint URL.
   * 
   * @param {string} endpoint - The API endpoint.
   * @returns {string} - The formatted URL.
   */
  private linkFormat(endpoint: string): string {
    return `${this.baseUrl}/${this.apiVersion}/${endpoint}`;
  }
}
