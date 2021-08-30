import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { StoreService } from '../../store/store.service';
import { IVideosResponse, IVideosResponseItems } from '../../youtube/models/videos-response.model';
import {
  IStatisticsResponse,
  IStatisticsResponseItems,
} from '../../youtube/models/statistics-response.model';
import { State } from '../../redux/state.model';
import { setYoutubeCardAction } from '../../redux/actions/set-custom-card.action';

@Injectable()
export class HttpService {
  searchURL = 'https://www.googleapis.com/youtube/v3/search';
  videosURL = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(
    private httpService: HttpClient,
    private store: Store<State>,
  ) {}

  getVideos$(searchStr: string): Observable<IVideosResponse> {
    return this.httpService.get<IVideosResponse>(
      `${this.searchURL}?type=video&part=snippet&maxResults=10&q=${searchStr}`,
    );
  }

  getStatistics$(idsStr: string): Observable<IStatisticsResponse> {
    return this.httpService.get<IStatisticsResponse>(
      `${this.videosURL}?part=statistics&id=${idsStr}`,
    );
  }

  getSearchResult$(searchStr: string): void {
    const result$ = this.getVideos$(searchStr).pipe(
      switchMap((videos) => {
        const idsStr = videos.items.map((item) => item.id.videoId).join(',');
        return this.getStatistics$(idsStr).pipe(
          map((statistics) => ({ statisticsItems: statistics.items, videosItems: videos.items })),
        );
      }),

      map((res) =>
        res.videosItems.map((item: IVideosResponseItems) => ({
          id: item.id.videoId,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          description: item.snippet.description,
          url: item.snippet.thumbnails.high.url,
          statistic: res.statisticsItems.find(
            (stat: IStatisticsResponseItems) => stat.id === item.id.videoId,
          )!.statistics,
        })),
      ),

      catchError(() => of([])),
    );
    result$.subscribe((result) => {
      result.map((item) => this.store.dispatch(setYoutubeCardAction({ youtubeCard: { ...item } })));
    });
  }
}
