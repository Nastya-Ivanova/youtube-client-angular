import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, share } from 'rxjs/operators';
import { URL } from '../../types/url.types';

export interface IYoutubeResponse {
  kind?: string;
  etag?: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo?: {
    totalResults?: number;
    resultsPerPage?: number;
  };
  items: IYoutubeResponseItem[];
}

export interface IYoutubeResponseItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: IYoutubeResponseItemSnippet;
}
interface IYoutubeResponseItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IYoutubeResponseItemSnippetThumbnails;
    medium: IYoutubeResponseItemSnippetThumbnails;
    high: IYoutubeResponseItemSnippetThumbnails;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IYoutubeResponseItemSnippetThumbnails {
  url: string;
  width: number;
  height: number;
}

@Injectable()
export class HttpService {
  constructor(private httpService: HttpClient, private router: Router) {}

  get(): Observable<IYoutubeResponseItem[]> {
    return (
      this.httpService
        .get<IYoutubeResponse>('assets/resp.json')
        //.get<ISearchResult>('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBss-C0YUbYMYaiYn89gxgHrNYSoTX3rAM&type=video&part=snippet&maxResults=15&q=js')
        .pipe(map((res) => res.items))
    );
  }

  getById(id: string): Observable<IYoutubeResponseItem> {
    const card = this.get().pipe(
      map((cards) => cards.find((item) => item.id.videoId === id)!),
      share(),
    );

    card.subscribe((item) => {
      if (item === undefined) {
        this.router.navigateByUrl(URL.main);
      }
    });

    return card;
  }
}
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyBss-C0YUbYMYaiYn89gxgHrNYSoTX3rAM&type=video&part=snippet&maxResults=15
// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBss-C0YUbYMYaiYn89gxgHrNYSoTX3rAM&part=snippet,statistics
// assets/response.json
