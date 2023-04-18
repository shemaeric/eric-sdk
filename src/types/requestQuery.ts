export interface SortData {
    by: string;
    direction: 'asc' | 'desc';
}

export interface PaginateData {
    offset: number;
    limit: number;
    page: number; 
}

export interface RequestQueryData {
    sort?: SortData;
}