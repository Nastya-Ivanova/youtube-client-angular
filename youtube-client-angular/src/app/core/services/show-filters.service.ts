import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowFiltersService {
  isShowFilters = new BehaviorSubject(false);
  isShowFilters$ = this.isShowFilters.asObservable();

  show() {
    this.isShowFilters.next(!this.isShowFilters.value);
  }
}
