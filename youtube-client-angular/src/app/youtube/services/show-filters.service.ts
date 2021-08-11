import {Injectable} from '@angular/core';

@Injectable()
export class ShowFiltersService{
  isShowFilters: boolean = false;

  show(): void {
    this.isShowFilters = !this.isShowFilters;
  }
}
