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

  getBorderBottomColor():string{
    const currentDate = new Date();
    const videoDate = new Date(this.searchItem.snippet.publishedAt);
    const diffDay = Math.ceil((currentDate.getTime() - videoDate.getTime()) / (1000*60*60*24));

    return (diffDay >= 183) ? '#ed2f2f' :
      (diffDay >= 30 && diffDay < 183) ? '#edcd2f' :
        (diffDay >= 8 && diffDay < 30) ? '#2eaa43' :
          '#2F80ED';
  }
}
