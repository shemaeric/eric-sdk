# Lord of the Rings SDK

This is a TypeScript SDK for making API calls to [the Lord of the Rings API](https://the-one-api.dev/). It provides convenient methods to access the following endpoints:

- `/movie`: Get information about all Lord of the Rings movies.
- `/movie/{id}`: Get information about a specific Lord of the Rings movie by ID.
- `/movie/{id}/quote`: Get quotes from a specific Lord of the Rings movie by ID.

## Installation

You can install the Lord of the Rings SDK using npm or yarn:

```bash
npm install eric-sdk
```
or 

```bash
yarn add eric-sdk
```

## Usage

Import the SDK in your TypeScript project:

```typescript
import { SDK } from 'eric-sdk';

const config = {
  apiKey: "yourApiKey",
  baseUrl: "https://the-one-api.dev"
}
const sdk = new SDK('YOUR_API_KEY');

// You can then Access All Methods provided By SDK

// getMovies => To get all movies
sdk.getMovies()

// getSingleMovie("with-id")
sdk.getSingleMovie("movieId")

// getMovieQuote("with-id)
sdk.getMovieQuote("movieId")

// Use Paginations
sdk.getMovies({paginate: { option: "limit", value: 3}});

// Use Sort
sdk.getMovies({sort: { sortBy: "name", direction: "asc"}});

//Use Filters
sdk.getMovies({
    filters: { match: [{field: "name", value: "The Hobbit Series"}]}
});
```

## Testing

To test the Lord of the Rings SDK, you can follow these steps:

- Clone the repository: `git clone https://github.com/shemaeric/eric-sdk`
- Install dependencies: cd eric-sdk && `yarn install`
- Run tests `yarn test`
- Build the app: yarn build
