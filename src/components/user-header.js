import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}

	render () {
		return (
			<div className="user-header">
				User Header
			</div>
		);
	}
}

// any time we want data in our React component from the Redux side of our app, we define a mapStateToProps() function
const mapStateToProps = state => {
	return { user: state.user };
}

// mapStateToProps gets passed off to the connect() function
export default connect(
	mapStateToProps,
	{ fetchUser }
)(UserHeader);
