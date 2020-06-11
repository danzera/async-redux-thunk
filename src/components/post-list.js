import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './user-header';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		return this.props.posts.map(post => {
			// pass userId from post object down to UserHeader component
			// so it can call json placeholder API for user info
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="description">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
					<UserHeader userId={post.userId} />
				</div>
			);
		});
	}

	render() {
		return (
			<div className="post-list ui relaxed divided list">
				{this.renderList()}
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
