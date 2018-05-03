import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GameActions } from '../../actions';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentWillMount() {
    this.props.getTopics(this.props.location.state.participantId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.categories && nextProps.categories !== this.props.categories) {
      this.setState({ categories: nextProps.categories })
    }
  }
  goToNewQuestion(selectedCategory) {
    this.props.history.push({
      pathname: '/newQuestion',
      state: {
        participantId: this.props.location.state.participantId,
        selectedCategory,
      }
    })
  }
  render() {
    let { categories } = this.state;
    let noOfRows = (this.state.categories.length) / 3;
    let categories2dArray = [];
    for (let i = 0; i < noOfRows; i++) {
      categories2dArray.push(this.state.categories.slice(i * 3, ((i + 1) * 3)));
    }
    const listItems = categories2dArray.map((categoriesInEachRow) => {
      return (
        <li className="categoryList">
          <div className="categoryList">
            <div className="category" onClick={() => this.goToNewQuestion(categoriesInEachRow[0])}>
              {categoriesInEachRow[0].emoji && <h1 className="categoryIcon">{categoriesInEachRow[0].emoji} </h1>}
              <h5 className="m0PH10">{categoriesInEachRow[0].topic}</h5>
            </div>
            <div className="category" onClick={() => this.goToNewQuestion(categoriesInEachRow[1])}>
              {categoriesInEachRow[1].emoji && <h1 className="categoryIcon">{categoriesInEachRow[1].emoji} </h1>}
              <h5 className="m0PH10">{categoriesInEachRow[1].topic}</h5>
            </div>
            <div className="category" onClick={() => this.goToNewQuestion(categoriesInEachRow[2])}>
              {categoriesInEachRow[2].emoji && <h1 className="categoryIcon">{categoriesInEachRow[2].emoji}</h1>}
              <h5 className="m0PH10">{categoriesInEachRow[2].topic}</h5>
            </div>
          </div>
        </li>
      )
    });
    return (
      <div className="container">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.get('game').get('categories'),
  };
}

Category.propTypes = {
};

export default connect(mapStateToProps, { ...GameActions })(withRouter(Category));
