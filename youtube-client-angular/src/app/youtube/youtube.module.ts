import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CardRoutingModule } from './youtube-routing.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CardComponent } from './pages/card/card.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './pages/search-results/search-item/search-item.component';
import { FiltersComponent } from './pages/search-results/filters/filters.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { GetDateFromStringPipe } from './pipes/get-date-from-string.pipe';
import { BorderBottomColorDirective } from './directives/border-bottom-color.directive';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    StatisticsComponent,
    CardComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FiltersComponent,
    FilterPipe,
    SortByPipe,
    GetDateFromStringPipe,
    BorderBottomColorDirective,
  ],
  imports: [CommonModule, CardRoutingModule, MatIconModule, CoreModule, FormsModule],
  providers: [],
})
export class YoutubeModule {}
