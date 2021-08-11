import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ISearchItem } from '../search-results/search-item/search-item.model';
import { CardsHttpService } from '../../../core/services/cards-http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  card$!: Observable<ISearchItem>;

  constructor(private route: ActivatedRoute, private cardsHttpService: CardsHttpService) {}
  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.card$ = this.cardsHttpService.getById(id);
  }
}
