import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserActions } from '../../actions';

class Dashboard extends React.Component {

	render() {
		return (
			<div>
				<h1>Dashboard</h1>
			</div>
		);
	}
}

Dashboard.propTypes = {
};

export default connect(null, { ...UserActions })(Dashboard);
