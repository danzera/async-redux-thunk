import jsonPlaceholder from '../apis/json-placeholder';

// generally return an arrow function when returning a function from an action creatore with redux-thunk
// don't have to list the getState arg unless you're using it - listed here just for example purposes
// since we are returning a function we can eliminate the braces following the first arrow function
export const fetchPosts = () => async (dispatch, getState) => {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response });
};
