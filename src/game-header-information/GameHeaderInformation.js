import styles from './GameHeaderInformation.module.css';

import { store } from '../store';

const GameHeaderInformationLayout = ({ currentGameInformation }) => (
	<div className={styles.header}>{currentGameInformation}</div>
);

export const GameHeaderInformationContainer = () => {
	const { winSign, isAllMovesMade, currentSignMove } = store.getState();

	const checkCurrentStepOrResult = () => {
		if (winSign) {
			return `Игра окончена, победил: ${winSign}`;
		} else if (isAllMovesMade) {
			return 'Игра окончена, НИЧЬЯ!';
		} else {
			return `Сейчас ходит: ${currentSignMove}`;
		}
	};

	return (
		<GameHeaderInformationLayout currentGameInformation={checkCurrentStepOrResult()} />
	);
};
