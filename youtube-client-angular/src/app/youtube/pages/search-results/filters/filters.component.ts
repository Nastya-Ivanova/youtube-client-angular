import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TSortKey } from './filters.types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  @Output() filterByStr = new EventEmitter<string>();
  @Output() sortKey = new EventEmitter<TSortKey>();

  filterStr?: string;
  isDateDesc: boolean = false;
  isViewsDesc: boolean = false;
  arrowDateHidden: boolean = false;
  arrowViewsHidden: boolean = true;

  changeFilterStr() {
    this.filterByStr.emit(this.filterStr);
  }

  setSortKey(key: TSortKey) {
    if (key === 'date') {
      this.arrowDateHidden = false;
      this.arrowViewsHidden = true;
      this.isDateDesc = !this.isDateDesc;
    }
    if (key === 'views') {
      this.arrowDateHidden = true;
      this.arrowViewsHidden = false;
      this.isViewsDesc = !this.isViewsDesc;
    }
    this.sortKey.emit(key);
  }
}
