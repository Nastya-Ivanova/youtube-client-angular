import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'youtube-client';
  //@Input()showSearchResult:string = '';
  // @Output() showSearchResult = new EventEmitter<string>();
  //
  //
  // show(val:string){
  //   this.showSearchResult.emit(val);
  // }
}
