import { ActionReducerMap } from '@ngrx/store';
import { videoReducer } from './set-custom-card.reducer';
import { State } from '../state.model';

export const reducers: ActionReducerMap<State> = {
  videosStore: videoReducer,
};



