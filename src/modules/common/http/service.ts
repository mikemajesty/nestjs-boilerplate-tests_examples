import { Injectable } from '@nestjs/common';
import axios, { Axios, AxiosRequestConfig } from 'axios';

interface IHttpService<T> {
  http: T;
}

@Injectable()
export class HttpService implements IHttpService<Axios> {
  http: Axios;

  private defaultConfig: AxiosRequestConfig = {
    timeout: 1000,
  };

  constructor() {
    this.http = axios.create(this.defaultConfig);
  }
}
