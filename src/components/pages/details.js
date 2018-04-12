import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GameActions } from '../../actions';
import { withRouter } from 'react-router-dom';

class Details extends React.Component {

 componentWillMount() {
	const participantId = this.props.location.state.participantId;
	 console.log(participantId);
	 this.props.getDetails(participantId);
 }
	render() {
		return (
			<div>
				<h1>DETAILS</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
	};
}

Details.propTypes = {
};

export default connect(mapStateToProps, { ...GameActions })(withRouter(Details));
