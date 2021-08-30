import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
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
}
