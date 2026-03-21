import { useEffect, useState } from "react";

export const useResetStateWithTimeout = (initialState, resetValue, delay) => {
	const [state, setState] = useState(initialState);

	useEffect(() => {
		if (state === resetValue) return;

		const timeout = setTimeout(() => {
			setState(resetValue);
		}, delay);

		return () => clearTimeout(timeout);
	}, [state, resetValue, delay]);

	return [state, setState];
};
