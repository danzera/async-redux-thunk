import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}

	render () {
		const { user } = this.props;
		// don't show anything if there is no user
		if (!user) return null;

		return (
			<div className="user-header header">
				{ user.name }
			</div>
		);
	}
}

// any time we want data in our React component from the Redux side of our app, we define a mapStateToProps() function
// mapStateToProps receives a reference to the component's props as a second arg
const mapStateToProps = (state, ownProps) => {
	// search for user in the users array
	// best to do this here in the mapStateToProps function since our component only needs access to one user
	// improves component reusability and allows use to factor out the mapStateToProps function to a separate file, if desired
	const user = state.users.find(user => user.id === ownProps.userId);
	return { user };
}

// mapStateToProps gets passed off to the connect() function
export default connect(
	mapStateToProps,
	{ fetchUser }
)(UserHeader);
