export type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;
  private apiVersion = 'v2';

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://the-one-api.dev';
  }

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

  private linkFormat(endpoint: string): string {
    return `${this.baseUrl}/${this.apiVersion}/${endpoint}`;
  }
}
