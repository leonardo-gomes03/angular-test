import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  champions = [];

  constructor(public httpClient: HttpClient) {
    this.carregarChampions();
  }
  async carregarChampions() {
    const resposta = await this.httpClient
      .get<any>(
        'http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json'
      )
      .toPromise();

      this.champions = resposta.data

      console.log(this.champions);
  }
}
