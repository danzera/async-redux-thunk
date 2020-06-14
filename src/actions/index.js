import _ from 'lodash';
import jsonPlaceholder from '../apis/json-placeholder';

// generally return an arrow function when returning a function from an action creatore with redux-thunk
// don't have to list the getState arg unless you're using it - listed here just for example purposes
// since we are returning a function we can eliminate the braces following the first arrow function
export const fetchPosts = () => async (dispatch, getState) => {
		const response = await jsonPlaceholder.get('/posts');

		// we only care about the data property on the response, generally speaking
		dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchUser = userId => async dispatch => {
// 	const response = await jsonPlaceholder.get(`/users/${userId}`);

// 	dispatch({ type: 'FETCH_USER', payload: response.data });
// }

// fetchUser is now a function that returns a function that calls _fetchUser with userId/dispatch
// this may not be the best solution, but it is a solution to preventing repetitive calls to the json placeholder API (ex. requesting user info for the same userId numerous times)
// this solution will NOT allow you to re-fetch user data for the same userId more than once
export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);
// this function gets memoized one time and then called via fetchUser
// prepending an underscore to this function name is a way of flagging it as a private function
// denotes a function that should only be used if another developer is certain they know what they're doing
export const _fetchUser = _.memoize(async (userId, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${userId}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
});