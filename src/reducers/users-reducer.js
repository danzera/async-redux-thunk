export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_USER':
			// add payload to our state array
			return [...state, action.payload];
		default:
			return state;
	}
};
