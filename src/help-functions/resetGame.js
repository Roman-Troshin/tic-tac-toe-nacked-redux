import { store } from "../store";

import { INITIAL_CELLS_VALUES } from "../constants/initialCellsValues";

export 	const resetGame = () => {
	store.dispatch({ type: 'SET_WIN_SIGN', payload: '' });
	store.dispatch({ type: 'SET_IS_ALL_MOVES_MADE', payload: false });
	store.dispatch({ type: 'SET_CELLS_VALUES', payload: INITIAL_CELLS_VALUES });
};
