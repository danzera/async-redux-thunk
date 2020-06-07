// reducers must return a value other than 'undefined'
// and they produce 'state' (data) using only previous state and the action
// reducers are pure ==> must not reach 'out of itself' to decide what value to return
// e.g. they should not be making API requests, read file info or solicit user/DOM for input
// and they must not mutate its input 'state' argument
// in actuality 'state' can be mutated, BUT Redux may not register it as a state change and if so does not forward the state change onto the rest of the application

// state will be a list of records eventually, so default state to an empty array 
export default (state = [], action) => {
	// reducers generall use switch statements as opposed to if statements
	// often times the switch statements will end up having multiple cases
	switch (action.type) {
		case 'FETCH_POSTS':
			console.log('fetch posts')
			return action.payload;
		// include default to ensure we always return some value from our reducer
		default:
			return state;
	}
};
