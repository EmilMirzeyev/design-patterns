export interface IApiData<T> {
  fetchData(): Promise<T | { message: string; status: number }>;
}
