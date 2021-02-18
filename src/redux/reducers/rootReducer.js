import { combineReducers } from 'redux';
import { finalPriceReducer } from './finalPriceReducer';
import { formErrorReducer } from './formErrorReducer';
import { setPolicyReducer } from './setPolicyReducer';

export const rootReducer = combineReducers({
	finalPriceReducer,
	formErrorReducer,
	setPolicyReducer
});