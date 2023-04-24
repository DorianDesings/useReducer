import { useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';

export const useCounter = () => {
	const [counter, dispatch] = useReducer(counterReducer, {
		value: 0,
		step: 1,
		clicks: 0
	});

	return { counter, dispatch };
};
