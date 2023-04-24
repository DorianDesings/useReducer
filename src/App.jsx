import { useReducer, useState } from 'react';

const App = () => {
	const { counter, dispatch } = useCounter();
	return (
		<div>
			<h1>Value: {counter.value}</h1>
			<h1>Step: {counter.step}</h1>
			<h1>Clicks: {counter.clicks}</h1>
			<div>
				<button onClick={() => dispatch('increment')}>Incrementar</button>
				<button onClick={() => dispatch('decrement')}>Decrementar</button>
				<button onClick={() => dispatch('addStep')}>Incrementar Step</button>
				<button onClick={() => dispatch('reset')}>Reset</button>
			</div>
		</div>
	);
};

// CUSTOM HOOK - hecho

// Estado agrupado - hecho
// Cambio a acciones - hecho
// Centralizar setState en una función que devuelva el nuevo estado
// Reducer

// const useCounter = () => {
// 	const [value, setValue] = useState(0);
// 	const [step, setStep] = useState(1);
// 	const [clicks, setClicks] = useState(0);

// 	const handleIncrement = () => {
// 		setValue(value + step);
// 		setClicks(clicks + 1);
// 	};

// 	const handleDecrement = () => {
// 		setValue(value - step);
// 		setClicks(clicks + 1);
// 	};

// 	const handleAddStep = () => {
// 		setStep(step + 1);
// 	};

// 	const handleReset = () => {
// 		setValue(0);
// 		setStep(1);
// 		setClicks(0);
// 	};

// 	return {
// 		value,
// 		step,
// 		clicks,
// 		handleIncrement,
// 		handleDecrement,
// 		handleAddStep,
// 		handleReset
// 	};
// };

// const useCounter = () => {
// 	const [counter, setCounter] = useState({
// 		value: 0,
// 		step: 1,
// 		clicks: 0
// 	});

// 	const increment = () => {
// 		setCounter({
// 			...counter,
// 			value: counter.value + counter.step,
// 			clicks: counter.clicks + 1
// 		});
// 	};

// 	const decrement = () => {
// 		setCounter({
// 			...counter,
// 			value: counter.value - counter.step,
// 			clicks: counter.clicks + 1
// 		});
// 	};

// 	const addStep = () => {
// 		setCounter({
// 			...counter,
// 			step: counter.step + 1
// 		});
// 	};

// 	const reset = () => {
// 		setCounter({ value: 0, step: 1, clicks: 0 });
// 	};

// 	return {
// 		counter,
// 		increment,
// 		decrement,
// 		addStep,
// 		reset
// 	};
// };

// const getNewState = (counter, action) => {
// 	switch (action) {
// 		case 'increment':
// 			return {
// 				...counter,
// 				value: counter.value + counter.step,
// 				clicks: counter.clicks + 1
// 			};
// 		case 'decrement':
// 			return {
// 				...counter,
// 				value: counter.value - counter.step,
// 				clicks: counter.clicks + 1
// 			};
// 		case 'addStep':
// 			return {
// 				...counter,
// 				step: counter.step + 1
// 			};
// 		case 'reset':
// 			return { value: 0, step: 1, clicks: 0 };
// 		default:
// 			throw new Error('Invalid action');
// 	}
// };

// const useCounter = () => {
// 	const [counter, setCounter] = useState({
// 		value: 0,
// 		step: 1,
// 		clicks: 0
// 	});

// 	const dispatch = action => {
// 		const newState = getNewState(counter, action);
// 		setCounter(newState);
// 	};

// 	return {
// 		counter,
// 		dispatch
// 	};
// };

const counterReducer = (counter, action) => {
	switch (action) {
		case 'increment':
			return {
				...counter,
				value: counter.value + counter.step,
				clicks: counter.clicks + 1
			};
		case 'decrement':
			return {
				...counter,
				value: counter.value - counter.step,
				clicks: counter.clicks + 1
			};
		case 'addStep':
			return {
				...counter,
				step: counter.step + 1
			};
		case 'reset':
			return { value: 0, step: 1, clicks: 0 };
		default:
			throw new Error('Invalid action');
	}
};

const useCounter = () => {
	const [counter, dispatch] = useReducer(counterReducer, {
		value: 0,
		step: 1,
		clicks: 0
	});

	return {
		counter,
		dispatch
	};
};

export default App;
