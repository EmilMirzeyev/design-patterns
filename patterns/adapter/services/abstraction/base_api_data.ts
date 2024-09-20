export abstract class BaseApiData<T> {
  abstract fetchData(): Promise<T | { message: string; status: number }>;
}
