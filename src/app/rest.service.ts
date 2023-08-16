import { Injectable } from '@angular/core';
import { Cafe } from './cafe.iface';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private cafes: Cafe[] = [];

  constructor() { }

  async getCafes() {
    await axios.get(API_URL + '/cafes').then((res) => {
      if (res.status == 200 &&
          res.data.success === true &&
          res.data.data.length > 0) {
        this.cafes = res.data.data;
      }
    });

    return this.cafes;
  }
}
