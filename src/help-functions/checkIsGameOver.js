export const checkIsGameOver = (cellsValues, isAllMovesMade, setIsAllMovesMade) => {
	const isCellsFulled = cellsValues.every((value) => value !== '');

	if (isCellsFulled && isAllMovesMade === false) {
		setIsAllMovesMade({type: 'SET_IS_ALL_MOVES_MADE', payload: true});
	}
};
