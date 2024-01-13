import styles from './App.module.css';

import { useEffect, useState } from 'react';
import { store } from './store';

import { WIN_CASES } from './constants/winCases';

import { checkIsGameOver } from './help-functions/checkIsGameOver';
import { checkIsSomeoneWin } from './help-functions/checkIsSomeoneWin';
import { resetGame } from './help-functions/resetGame';

import { GameHeaderInformationContainer } from './game-header-information/GameHeaderInformation';
import { CellsContainer } from './cells-field/Cell';

const AppLayout = () => (
	<button className={styles.button} onClick={resetGame }>
		Начать сначала
	</button>
);

export const AppContainer = () => {

	const [winSign, setWinSign] = useState(store.getState().winSign);
	const [isAllMovesMade, setIsAllMovesMade] = useState(store.getState().isAllMovesMade);
	const [cellsValues, setCellsValues] = useState(store.getState().cellsValues);

	useEffect(() => {
		const subscribe = store.subscribe(() => {
			setWinSign(store.getState().winSign);
			setIsAllMovesMade(store.getState().isAllMovesMade);
			setCellsValues(store.getState().cellsValues);
		});

		return () => {
			subscribe();
		}
	}, [])

	checkIsSomeoneWin(WIN_CASES, winSign, store.dispatch, cellsValues);
	checkIsGameOver(cellsValues, isAllMovesMade, store.dispatch);

	return (
		<div className={styles.mainContainer}>
			<GameHeaderInformationContainer />

			<CellsContainer />

			<AppLayout />
		</div>
	);
};
