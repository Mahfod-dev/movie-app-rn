export type HttpOptions = {
  headers?: Record<string, string>;
  params?: Record<string, string | number | undefined>;
};

export abstract class HttpAdapter {
  public abstract get<T>(url: string, options?: HttpOptions): Promise<T>;
  public abstract post<T>(
    url: string,
    body: any,
    options?: HttpOptions,
  ): Promise<T>;
  public abstract put<T>(
    url: string,
    body: any,
    options?: HttpOptions,
  ): Promise<T>;
  public abstract delete<T>(url: string, options?: HttpOptions): Promise<T>;
}
