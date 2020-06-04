import jsonPlaceholder from '../apis/json-placeholder';

export const fetchPosts = async () => {
	// bad approach - breaks the rules of action creators with Redux
	// Babel transpiles this function into different looking code
	// aync-await returns a request object the first time the action creator is called
	const response = await jsonPlaceholder.get('/posts');

	return {
		type: 'FETCH_POSTS',
		payload: response
	};
};
