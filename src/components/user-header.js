import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}

	render () {
		// search for user in the users array
		const user = this.props.users.find(user => user.id === this.props.userId);

		// don't show anything if there is no user
		if (!user) return null;

		return (
			<div className="user-header header">
				{user.name}
			</div>
		);
	}
}

// any time we want data in our React component from the Redux side of our app, we define a mapStateToProps() function
const mapStateToProps = state => {
	return { users: state.users };
}

// mapStateToProps gets passed off to the connect() function
export default connect(
	mapStateToProps,
	{ fetchUser }
)(UserHeader);
