import { ReduxState } from '../../type';
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  character: {},
  errorMessage: '',
};

type ActionType = {
  type: string;
  payload: ReduxState;
};

const characterGotReducer = (state = INITIAL_STATE, { type, payload }: ActionType) => {
  switch (type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        character: {},
        errorMessage: '',

      };
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        character: payload,
        errorMessage: '',

      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        character: {},
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default characterGotReducer;
