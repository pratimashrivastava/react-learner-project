import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserActions, GameActions } from '../../actions';
import { Button } from 'semantic-ui-react';
import '../../App.css';
import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			games: []
		}
	}
	componentWillMount() {
		this.props.getGames();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.gamesArray !== nextProps.gamesArray) {
			this.setState({
				games: nextProps.gamesArray.toJS()
			})
		}

	}

	goTODetails(participantId) {
		this.props.history.push({
			pathname: '/details',
			state: { participantId: participantId }
		})
	}
	render() {
		let { games } = this.state;
		const listItems = games.map((game) => {
			return (

				<li className="dasboardLists" key={game._id}>
					<div className="oneOnOneRowContainer">
						<div className="flexRow">
							<img className="avatar" src={game.actor.avatarUrl} alt="" />
							<h5 className="m0PH10">{game.actor.firstName}</h5>
						</div>
						<div>
							<Button onClick={() => this.goTODetails(game.actor._id)} color="facebook">Play</Button>
						</div>
					</div>
				</li>
			)
		});
		return (
				<ul className="dashboardContainer">{listItems}</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		gamesArray: state.get('game').get('gamesArray'),
	};
}

Dashboard.propTypes = {
};

export default connect(mapStateToProps, { ...UserActions, ...GameActions })(withRouter(Dashboard));
