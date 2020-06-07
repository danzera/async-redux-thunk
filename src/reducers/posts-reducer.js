// reducers must return a value other than 'undefined'
// and they produce 'state' (data) using only previous state and the action
// reducers are pure ==> must not reach 'out of itself' to decide what value to return
// e.g. they should not be making API requests, read file info or solicit user/DOM for input
// and they must not mutate its input 'state' argument
// in actuality 'state' can be mutated, BUT Redux may not register it as a state change and if so does not forward the state change onto the rest of the application
export default (state, action) => {
	console.log('posts-reduer')
	// reducers must have a default return statement
	// if the state passed to the reducer is undefined, you must explicitly return the initial state
	return 123;
};
