import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserActions, GameActions } from '../../actions';
import { Button, List } from 'semantic-ui-react';

class Dashboard extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			games: []
		}
	}
	componentWillMount(){
		this.props.getGames();
	}

	componentWillReceiveProps(nextProps){
		if(this.props.gamesArray !== nextProps.gamesArray){
			this.setState({
				games: nextProps.gamesArray.toJS()
			})
		}

	}

	render() {
		let { games } = this.state;
		const listItems = games.map((game) => {
  		return <li>{game.actor.firstName}</li>
		});
		return (
			<div>
				<h1>Dashboard</h1>
					<ul>{ listItems }</ul>
			</div>
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

export default connect(mapStateToProps, { ...UserActions, ...GameActions })(Dashboard);
