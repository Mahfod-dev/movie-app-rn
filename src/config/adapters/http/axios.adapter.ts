import {HttpAdapter, HttpOptions} from './http.adapter';
import axios, {AxiosInstance} from 'axios';

type Options = {
  baseURL: string;
  params: Record<string, string>;
};

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
    });
  }

  public async get<T>(url: string, options?: HttpOptions): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, options);
      return response.data;
    } catch (error) {
      throw new Error(`Error while fetching data from ${url}: ${error}`);
    }
  }

  public async post<T>(
    url: string,
    body: any,
    options?: HttpOptions,
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, body, options);
      return response.data;
    } catch (error) {
      throw new Error(`Error while posting data to ${url}: ${error}`);
    }
  }

  public async put<T>(
    url: string,
    body: any,
    options?: HttpOptions,
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, body, options);
      return response.data;
    } catch (error) {
      throw new Error(`Error while updating data at ${url}: ${error}`);
    }
  }

  public async delete<T>(url: string, options?: HttpOptions): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url, options);
      return response.data;
    } catch (error) {
      throw new Error(`Error while deleting data from ${url}: ${error}`);
    }
  }
}
