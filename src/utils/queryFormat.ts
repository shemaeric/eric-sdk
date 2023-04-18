  import { RequestQuery } from "../types";

  export function formatUrlWithQueries(source: string, query?: RequestQuery): string {
    let url = source;
  
    if (!query) {
        return url
    }
    if (query.sort) {
      const { sortBy, direction } = query.sort;
      url += `?sort=${sortBy}:${direction}`;
    }
  
    if (query.paginate) {
      const { option, value } = query.paginate;
      url += `?${option}=${value}`;
    }
  
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
  