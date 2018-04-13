import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GameActions } from '../../actions';
import { withRouter } from 'react-router-dom';
import styles from '../common/styles.css';
import _ from 'lodash';

class Details extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gameDetails: {}
		}
	}
	componentWillMount() {
		const participantId = this.props.location.state.participantId;
		this.props.getDetails(participantId);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.gameDetails) {
			this.setState({
				gameDetails: nextProps.gameDetails.toJS()
			})
		}

	}
	renderAnswers() {
		let gameDetails = this.state.gameDetails.quiz
		let answers = _.get(gameDetails, gameDetails.quiz.question[0].answers);
		if (answers) {
			return (
				<div class="ui radio checkbox">
					<input type="radio" name="option1" checked="checked" />
					<label>{answers[0].text}</label>
					<input type="radio" name="option2" checked="checked" />
					<label>{answers[1].text}</label>
					<input type="radio" name="option3" checked="checked" />
					<label>{answers[2].text}</label>
					<input type="radio" name="option4" checked="checked" />
					<label>{answers[3].text}</label>
				</div>
			)
		}
	}

	render() {
		let quiz = this.state.gameDetails.quiz

		return (
			<div className={styles.detailsContainer}>
				<div className="ui checkbox">
					<input type="checkbox" tabIndex="0" />
					<label>Attach a comment to your answer?</label>
				</div>
				<div>
					{quiz && <h1>{quiz[0].question.question}</h1>}
					{quiz && <div class="ui radio checkbox">
						<input type="radio" name="option1" checked="checked" />
						<label>{quiz[0].question.answers[0].text}</label>
						<input type="radio" name="option2" checked="checked" />
						<label>{quiz[0].question.answers[1].text}</label>
						<input type="radio" name="option3" checked="checked" />
						<label>{ quiz[0].question.answers.length > 2 && quiz[0].question.answers[2].text}</label>
						<input type="radio" name="option4" checked="checked" />
						<label>{quiz[0].question.answers.length > 3 && quiz[0].question.answers[3].text}</label>
					</div>}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		gameDetails: state.get('game').get('gameDetails'),
	};
}

Details.propTypes = {
};

export default connect(mapStateToProps, { ...GameActions })(withRouter(Details));
