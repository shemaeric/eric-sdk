export interface RequestQuery {
    sort?: { sortBy: string; direction: 'asc' | 'desc' };
    paginate?: { option: 'limit' | 'offset' | 'page'; value: number };
    filter?: {
      match?: { field: string; value: string }[];
      negateMatch?: { field: string; value: string }[];
      include?: { field: string; value: string[] }[];
      exclude?: { field: string; value: string[] }[];
      exists?: string[];
      doesNotExist?: string[];
      lessThan?: { field: string; value: string }[];
      greaterThanOrEqual?: { field: string; value: string }[];
      greaterThan?: { field: string; value: string }[];
      lessThanOrEqual?: { field: string; value: string }[];
    };
  }