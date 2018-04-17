import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserActions } from '../../actions';
import { withRouter } from 'react-router-dom';

class NewQuestion extends React.Component{

	componentWillReceiveProps(nextProps) {
}
		
	render(){
		return(
		<div>
			<h1>NewQuestion{this.props.location.state.selectedCategory.topic}</h1> 
		</div>
		);
	}
}

const mapStateToProps = state => {
  return {
  };
}

NewQuestion.propTypes = {
};

export default connect(mapStateToProps, {...UserActions})(withRouter(NewQuestion));
