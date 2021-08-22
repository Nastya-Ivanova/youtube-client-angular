import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService, IYoutubeResponseItem } from '../../../core/services/http.service';
import { StoreService } from '../../../store/store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  card$!: Observable<IYoutubeResponseItem>;

  constructor(
    private route: ActivatedRoute,
    private cardsHttpService: HttpService,
    private storeService: StoreService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    this.storeService.setIsShowSearchResult(false);
    const id = this.route.snapshot.paramMap.get('id')!;
    this.card$ = this.cardsHttpService.getById(id);
  }

  back() {
    this.storeService.setIsShowSearchResult(true);
    this.router.navigate(['/main']);
  }
}
