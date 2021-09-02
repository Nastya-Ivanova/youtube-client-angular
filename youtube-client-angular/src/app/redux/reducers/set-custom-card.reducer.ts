import { Action, createReducer, on } from '@ngrx/store';
import {
  deleteYoutubeCardAction,
  setCustomCardAction,
  setYoutubeCardAction,
} from '../actions/set-custom-card.action';
import { IVideosStore } from '../state.model';

const initialState: IVideosStore = {
  customCards: [],
  youtubeCards: [],
};

const reducer = createReducer(
  initialState,
  on(setCustomCardAction, (state, { customCard }) => ({
    ...state,
    customCards: [...state.customCards, customCard],
  })),
  on(setYoutubeCardAction, (state, { youtubeCard }) => ({
    ...state,
    youtubeCards: [...state.youtubeCards, youtubeCard],
  })),
  on(deleteYoutubeCardAction, (state) => ({
    ...state,
    youtubeCards: [],
  })),
);

export function videoReducer(state: IVideosStore | undefined, action: Action): IVideosStore {
  return reducer(state, action);
}
