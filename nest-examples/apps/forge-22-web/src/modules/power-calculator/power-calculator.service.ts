import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PowerCalculatorService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPower(value: number, power: number) {
    return this.httpClient.get<number>(`http://localhost:3333/api/square/${value}/${power}`);
  }

}
