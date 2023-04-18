  import { RequestQuery } from "../types";

  /**
 * Formats a URL with query parameters based on the provided `RequestQuery` object.
 * @function
 * @name formatUrlWithQueries
 * @param {string} source - The source URL to be formatted.
 * @param {RequestQuery} query - An optional `RequestQuery` object containing query parameters.
 * @returns {string} - The formatted URL with query parameters.
 */
  export function formatUrlWithQueries(source: string, query?: RequestQuery): string {
    let url = source;
  
    // If no query object provided, return the original URL
    if (!query) {
        return url
    }

    // Append sort query parameter if exists
    if (query.sort) {
      const { sortBy, direction } = query.sort;
      url += `?sort=${sortBy}:${direction}`;
    }
  
    // Append paginate query parameter if exists
    if (query.paginate) {
      const { option, value } = query.paginate;
      url += `?${option}=${value}`;
    }
  
    // Append filter query parameters if exists with their corresponding filters
    if (query.filter) {
      const {
        match,
        negateMatch,
        include,
        exclude,
        exists,
        doesNotExist,
        lessThan,
        greaterThanOrEqual,
        greaterThan,
        lessThanOrEqual
      } = query.filter;
  
      if (match) {
        match.forEach(({ field, value }) => {
          url += `?${field}=${value}`;
        });
      }
  
      if (negateMatch) {
        negateMatch.forEach(({ field, value }) => {
          url += `?${field}!=${value}`;
        });
      }
  
      if (include) {
        include.forEach(({ field, value }) => {
            const joinedValues = value.join(',');
          url += `?include=${field}:${joinedValues}`;
        });
      }
  
      if (exclude) {
        exclude.forEach(({ field, value }) => {
            const joinedValues = value.join(',');
          url += `?exclude=${field}:${joinedValues}`;
        });
      }
  
      if (exists) {
        exists.forEach((field) => {
          url += `?${field}`;
        });
      }
  
      if (doesNotExist) {
        doesNotExist.forEach((field) => {
          url += `?!${field}`;
        });
      }
  
      if (lessThan) {
        lessThan.forEach(({ field, value }) => {
          url += `?${field}<${value}`;
        });
      }
  
      if (greaterThanOrEqual) {
        greaterThanOrEqual.forEach(({ field, value }) => {
          url += `?${field}>=${value}`;
        });
      }

      if (greaterThan) {
        greaterThan.forEach(({ field, value }) => {
          url += `?${field}>${value}`;
        });
      }
  
      if (lessThanOrEqual) {
        lessThanOrEqual.forEach(({ field, value }) => {
          url += `?${field}<=${value}`;
        });
      }
    }
  
    return url;
  }
  