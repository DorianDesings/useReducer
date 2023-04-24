import { useReducer, useState } from 'react';
import { useCounter } from './hooks/useCounter';
import { COUNTER_ACTIONS } from './actions/actions.counter';

const App = () => {
	const { counter, dispatch } = useCounter();
	return (
		<div>
			<h1>useReducer() Example</h1>
			<h1>Value: {counter.value}</h1>
			<h1>Step: {counter.step}</h1>
			<h1>Clicks: {counter.clicks}</h1>
			<div>
				<button onClick={() => dispatch(COUNTER_ACTIONS.INCREMENT)}>
					Incrementar
				</button>
				<button onClick={() => dispatch(COUNTER_ACTIONS.DECREMENT)}>
					Decrementar
				</button>
				<button onClick={() => dispatch(COUNTER_ACTIONS.ADD_STEP)}>
					Incrementar Step
				</button>
				<button onClick={() => dispatch(COUNTER_ACTIONS.RESET)}>Reset</button>
			</div>
		</div>
	);
};

export default App;
