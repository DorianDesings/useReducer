import { COUNTER_ACTIONS } from '../actions/actions.counter';

export const counterReducer = (counter, action) => {
	switch (action) {
		case COUNTER_ACTIONS.INCREMENT:
			return {
				...counter,
				value: counter.value + counter.step,
				clicks: counter.clicks + 1
			};
		case COUNTER_ACTIONS.DECREMENT:
			return {
				...counter,
				value: counter.value - counter.step,
				clicks: counter.clicks + 1
			};
		case COUNTER_ACTIONS.ADD_STEP:
			return {
				...counter,
				step: counter.step + 1
			};
		case COUNTER_ACTIONS.RESET:
			return {
				value: 0,
				clicks: 0,
				step: 1
			};

		default:
			throw new Error('Invalid action');
	}
};
