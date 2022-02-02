import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {ISearchItem} from "./search-item.model";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
 export class SearchItemComponent{
  @Input() searchItem!:ISearchItem;
}
