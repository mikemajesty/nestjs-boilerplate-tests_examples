import axios, { Axios, AxiosRequestConfig } from 'axios';

export abstract class AxiosService {
  protected axios: Axios;
  protected defaultConfig: AxiosRequestConfig = {
    timeout: 1000,
  };

  constructor(config?: AxiosRequestConfig) {
    this.axios = axios.create(config || this.defaultConfig);
  }
}