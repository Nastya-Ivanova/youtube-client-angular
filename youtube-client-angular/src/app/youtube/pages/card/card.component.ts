import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreService } from '../../../store/store.service';
import { ISearchResult } from '../../models/search-result.model';
import { ICustomCard, State } from '../../../redux/state.model';
import { getAllCards } from '../../../redux/selectors/custom-cards.selectors';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  video$: Observable<ISearchResult | ICustomCard | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private router: Router,
    private store: Store<State>,
  ) {
    this.storeService.setIsShowSearchResult(false);
  }

  ngOnInit(): void {
    const videoId = this.route.snapshot.paramMap.get('id')!;
    this.video$ = this.store
      .select(getAllCards)
      .pipe(map((searchResult) => searchResult.find((res) => res.id === videoId)));
  }

  back() {
    this.storeService.setIsShowSearchResult(true);
    this.router.navigate(['/main']);
  }
}
