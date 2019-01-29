import { Injectable } from '@angular/core';
import{ AmiiboInterface } from '../interfaces/amiibo-interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private api: ApiService) { }

  getAmiibos() {
    return this.api.get('/amiibo');//.subscribe((res) =>res.amiibo);
  }//<AmiiboInterface[]>

  getAmiibo(id: string) {
    return this.api.get(`/amiibo/?tail=${id}`);
    // ? means 'query', allowing us tp put values in the URL.
  }

  getFilteredAmiibos(category: string, value: string) {
    return this.api.get(`/amiibo/?${category}=${value}`);
  }

}
