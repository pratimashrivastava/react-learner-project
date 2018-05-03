import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserActions } from '../../actions';
import { withRouter } from 'react-router-dom';
import styles from '../../App.css';

class NewQuestion extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			topic: this.props.location.state.selectedCategory,
			participantId: this.props.location.state.participantId
		}
	}

	componentWillReceiveProps(nextProps) {
}
		
componentWillMount() {
	let { topic , participantId } = this.state;
	let data = { topic, participantId };
	this.props.getQuestions(data);
}

	render(){
		return(
		<div>
			<h1>NewQuestion{this.state.topic}</h1> 
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
