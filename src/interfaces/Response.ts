export interface IPaginationProducts<U> {
  rows: U;
  count: number;
}

export default interface ResponseAPI<T> {
  data: {
    data: T;
    limit: string;
    skip: string;
    total: string;
  };
}
