import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent implements OnInit{
  title = '';
  description = '';
  imgUrl = '';
  viewCount = '';
  likeCount = '';
  dislikeCount = '';
  commentCount = '';

  ngOnInit() {
    this.title = 'Search Item';
  }
}
