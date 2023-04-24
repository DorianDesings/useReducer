import { useReducer } from 'react';
import {
	INITIAL_STATE_COUNTER,
	counterReducer
} from '../reducers/counterReducer';

export const useCounter = () => {
	const [counter, dispatch] = useReducer(counterReducer, INITIAL_STATE_COUNTER);

	return { counter, dispatch };
};
