import { INITIAL_STATE } from './constants/initialState';


export const appReducer = (state = INITIAL_STATE , action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_WIN_SIGN': {
			return {
			...state,
			winSign: payload,
			};
		}
		case 'SET_IS_ALL_MOVES_MADE': {
			return {
				...state,
				isAllMovesMade: payload,
			};
		}
		case 'SET_CELLS_VALUES': {
				return {
				...state,
				cellsValues: payload,
			};
		}
		case 'SET_CURRENT_SIGN_MOVE': {
			return {
				...state,
				currentSignMove: payload,
			};
		}
		/*
		case 'SET_IS_BUTTONS_BLOCKED': {
				return {
				...state,
				isButtonsBlocked: ,
			}
		*/
		default:
			return state;

	}
}
