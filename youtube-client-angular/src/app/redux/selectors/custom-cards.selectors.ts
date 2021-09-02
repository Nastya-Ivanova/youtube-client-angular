import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IVideosStore, State } from '../state.model';

export const getVideos: MemoizedSelector<State, IVideosStore> =
  createFeatureSelector('videosStore');

export const getAllCards = createSelector(getVideos, ({ customCards, youtubeCards }) => [
  ...customCards,
  ...youtubeCards,
]);

