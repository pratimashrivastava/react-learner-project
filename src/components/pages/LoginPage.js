import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserActions } from '../../actions';
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component{

	componentWillReceiveProps(nextProps) {
		if(nextProps.currentUser && nextProps.currentUser !== this.props.currentUser){
			this.props.history.push("/dashboard");
		}
}
	submit = (data) => {
		this.props.userLogin(data);
	}
		
	render(){
		return(
		<div>
			<LoginForm submit={this.submit}/>
		</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    currentUser: state.get('user').get('currentUser'),
  };
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

export default connect(mapStateToProps, {...UserActions})(withRouter(LoginPage));
