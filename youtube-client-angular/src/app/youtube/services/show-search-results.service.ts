import { Injectable } from '@angular/core';

@Injectable()
export class ShowSearchResultsService {
  searchStr: string = '';
  isShowSearchResults: boolean = false;

  show(str: string): void {
    if (str.trim() && str !== this.searchStr) {
      this.searchStr = str;
      this.isShowSearchResults = true;
    }
  }
}
