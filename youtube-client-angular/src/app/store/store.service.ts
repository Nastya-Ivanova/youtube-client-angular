import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ISearchResult } from '../youtube/models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  searchResult$: Observable<ISearchResult[]> = of([]);

  private isShowSearchResult = new BehaviorSubject(false);
  isShowSearchResult$ = this.isShowSearchResult.asObservable();

  private searchStr = new BehaviorSubject('');
  searchStr$: Observable<string> = this.searchStr.asObservable();

  setSearchStr(newValue: string) {
    this.searchStr.next(newValue);
  }

  setIsShowSearchResult(state: boolean) {
    this.isShowSearchResult.next(state);
  }

  setSearchResult(searchResult: Observable<ISearchResult[]>) {
    this.searchResult$ = searchResult;
  }
}
