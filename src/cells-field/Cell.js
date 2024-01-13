import styles from './Cell.module.css';

import { store } from '../store';

const CellsLayout = ({ activateButton }) => {
	const { winSign, isAllMovesMade, cellsValues } = store.getState();
	const isButtonsBlocked = winSign || isAllMovesMade;

	return (
		<div className={styles.field}>
			{cellsValues.map((value, index) => (
				<button
					key={index}
					className={styles.button}
					disabled={isButtonsBlocked}
					onClick={() => {
						activateButton(index);
					}}
				>
					{value}
				</button>
			))}
		</div>
	);
};

export const CellsContainer = () => {

	const activateButton = (index) => {
		const { currentSignMove, cellsValues } = store.getState();
		const updatedValue = [...cellsValues];
		updatedValue[index] = currentSignMove;
		const nextCurrentSignMove = currentSignMove === 'x' ? 'o' : 'x';

		store.dispatch({ type: 'SET_CELLS_VALUES', payload: updatedValue });
		store.dispatch({ type: 'SET_CURRENT_SIGN_MOVE', payload: nextCurrentSignMove });
	};

	return <CellsLayout activateButton={activateButton} />;
};
