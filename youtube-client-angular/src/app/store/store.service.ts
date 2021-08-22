import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  isShowSearchResult: boolean = false;

  private searchStr: BehaviorSubject<string> = new BehaviorSubject('');
  searchStr$: Observable<string> = this.searchStr.asObservable();

  setSearchStr(newValue: string) {
    this.searchStr.next(newValue);
  }

  setIsShowSearchResult(state: boolean) {
    this.isShowSearchResult = state;
  }
}
