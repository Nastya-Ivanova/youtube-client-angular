import { createAction, props } from '@ngrx/store';
import { ICustomCard } from '../state.model';
import { ISearchResult } from '../../youtube/models/search-result.model';

export const setCustomCardAction = createAction(
  '[Admin Component] SET_CUSTOM_CARD',
  props<{ customCard: ICustomCard }>(),
);

export const setYoutubeCardAction = createAction(
  '[HttpService] SET_YOUTUBE_CARDS',
  props<{ youtubeCard: ISearchResult }>(),
);

export const deleteYoutubeCardAction = createAction(
  '[Header component] DELETE_YOUTUBE_CARDS'
);

