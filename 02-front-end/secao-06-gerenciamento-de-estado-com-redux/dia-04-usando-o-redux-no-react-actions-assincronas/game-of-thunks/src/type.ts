import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ReduxState = {
  isLoading: boolean;
  character: CharacterType;
  errorMessage: string;
};

export type CharacterType = {
  name: string;
  titles: string[];
  aliases: string[];
};

export type GlobalState = {
  characterData: ReduxState
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
