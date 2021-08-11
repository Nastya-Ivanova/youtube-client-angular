import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {map, share} from 'rxjs/operators';
import { ISearchItem } from '../../youtube/pages/search-results/search-item/search-item.model';
import { URL } from '../../types/url.types';
import { ISearchResult } from '../../youtube/pages/search-results/search-results.model';

@Injectable()
export class CardsHttpService {
  constructor(private httpService: HttpClient, private router: Router) {}

  get(): Observable<ISearchItem[]> {
    return this.httpService
      .get<ISearchResult>('assets/response.json')
      .pipe(map((res) => res.items));
  }

  getById(id: string): Observable<ISearchItem> {
    const card = this.get().pipe(
      map((cards) => cards.find((item) => item.id === id)!),
      share()
    );

    card.subscribe((item) => {
      if (item === undefined) {
        this.router.navigateByUrl(URL.main);
      }
    });

    return card;
  }
}
