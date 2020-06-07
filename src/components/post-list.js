import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		console.log('this.props.posts', this.props.posts);
		return (
			<div className="post-list">
				PostList
			</div>
		)
	}
}

// any time we want data in our React component from the Redux side of our app, we define a mapStateToProps() function
const mapStateToProps = state => {
	return { posts: state.posts };
}

// mapStateToProps gets passed off to the connect() function
export default connect(
	mapStateToProps,
	{ fetchPosts }
)(PostList);
