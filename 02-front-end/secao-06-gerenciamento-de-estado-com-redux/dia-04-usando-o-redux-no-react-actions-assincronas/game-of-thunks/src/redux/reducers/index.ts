import { combineReducers } from 'redux';
import characterGotReducer from './characterGotReducer';

const rootReducer = combineReducers({ characterData: characterGotReducer });

export default rootReducer;
