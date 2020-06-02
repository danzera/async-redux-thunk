import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div className="post-list">
				PostList
			</div>
		)
	}
}


export default connect(null, { fetchPosts })(PostList);