import { Injectable } from '@nestjs/common';
import axios, { Axios, AxiosRequestConfig } from 'axios';

@Injectable()
export class HttpService {
  http: Axios;

  private defaultConfig: AxiosRequestConfig = {
    timeout: 1000,
  };

  constructor() {
    this.http = axios.create(this.defaultConfig);
  }
}
