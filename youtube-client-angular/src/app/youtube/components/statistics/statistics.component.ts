import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISearchItem } from '../../pages/search-results/search-item/search-item.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  @Input() card!: ISearchItem;
}
