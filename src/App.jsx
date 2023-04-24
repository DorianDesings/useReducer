import { useState } from 'react';

const App = () => {
	const [value, setValue] = useState(0);
	const [step, setStep] = useState(1);
	const [clicks, setClicks] = useState(0);

	const handleIncrement = () => {
		setValue(value + step);
		setClicks(clicks + 1);
	};

	const handleDecrement = () => {
		setValue(value - step);
		setClicks(clicks + 1);
	};

	const handleAddStep = () => {
		setStep(step + 1);
	};

	const handleReset = () => {
		setValue(0);
		setStep(1);
		setClicks(0);
	};

	return (
		<div>
			<h1>Value: {value}</h1>
			<h1>Step: {step}</h1>
			<h1>Clicks: {clicks}</h1>
			<div>
				<button onClick={handleIncrement}>Incrementar</button>
				<button onClick={handleDecrement}>Decrementar</button>
				<button onClick={handleAddStep}>Incrementar Step</button>
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
};

//CUSTOM HOOK
// Estado agrupado
// Cambio a acciones
// Reducer

export default App;
