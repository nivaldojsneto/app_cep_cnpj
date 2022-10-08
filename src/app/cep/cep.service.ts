import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string) {
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        return this.http.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
      }
    }
    return of({});
  }
}
