import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GameActions } from '../../actions';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import '../../App.css';

class Details extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gameDetails: {},
			selectedAnswer: null
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

	goTONewQuestion() {
		this.props.history.push({
			pathname: '/category',
			state: { participantId: this.props.location.state.participantId }
		})
	}
	setSelectedAnswer(answer) {
		this.setState({ selectedAnswer: answer });
	}

	render() {
		let quiz = this.state.gameDetails.quiz
		let answers = quiz && quiz[0].question.answers
		return (
			<div className="detailsContainer">
			<div className="detailCheckBoxCntr">
				<div className="ui checkbox">
					<input type="checkbox" tabIndex="0" />
					<label><h5 className="whiteText">Attach a comment to your answer?</h5></label>
				</div>
				</div>
				<div>
					{answers && <div class="ui form">
						<div class="grouped fields">
							<label>
								{
									quiz && <h5 className="whiteText">{quiz[0].question.question}</h5>
								}
							</label>
							<div class="field">
								<div class="ui radio checkbox">
									<input type="radio" name="options" onChange={() => this.setSelectedAnswer(answers[0])} />
									<label>
										<h5 className="whiteText">{answers[0].text}</h5>
									</label>
								</div>
							</div>
							<div class="field">
								<div class="ui radio checkbox">
									<input type="radio" name="options" onChange={() => this.setSelectedAnswer(answers[1])} />
									<label>
										<h5 className="whiteText">{answers[1].text}</h5>
									</label>
								</div>
							</div>
							{answers.length > 2 && <div class="field">
								<div class="ui radio checkbox">
									<input type="radio" name="options" onChange={() => this.setSelectedAnswer(answers[2])} />
									<label>
										<h5 className="whiteText">{answers[2].text}</h5>
									</label>
								</div>
							</div>}
							{answers.length > 3 && <div class="field">
								<div class="ui radio checkbox">
									<input type="radio" name="options" onChange={() => this.setSelectedAnswer(answers[3])} />
									<label>
										<h5 className="whiteText">{answers[3].text}</h5>
									</label>
								</div>
							</div>}
						</div>
					</div>
					}
				</div>
				<Button className='background-color: whitesmoke' onClick={() => this.goTONewQuestion()} color="facebook">New Question</Button>
				<h5>{this.state.selectedAnswer && this.state.selectedAnswer.text}</h5>
				<Button className='background-color: whitesmoke' onClick={() => this.goToAskBack()} >Ask Back</Button>
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
