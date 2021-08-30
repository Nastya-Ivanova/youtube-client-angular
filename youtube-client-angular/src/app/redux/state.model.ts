import { ISearchResult } from '../youtube/models/search-result.model';

export interface State {
  videosStore: IVideosStore;
}

export interface IVideosStore {
  customCards: ICustomCard[];
  youtubeCards: ISearchResult[];
}

export interface ICustomCard {
  id: string;
  title: string;
  description: string;
  url: string;
  videoUrl: string;
  publishedAt: string;
}
