import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../../store/store.service';
import { ISearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  video$!: Observable<ISearchResult | undefined>;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.storeService.setIsShowSearchResult(false);
    const videoId = this.route.snapshot.paramMap.get('id')!;
    this.video$ = this.storeService.searchResult$.pipe(
      map((searchResult) => searchResult.find((res) => res.id === videoId)),
    );
  }

  back() {
    this.storeService.setIsShowSearchResult(true);
    this.router.navigate(['/main']);
  }
}
