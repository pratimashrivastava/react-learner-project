import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
// import Splash from './components/common/splash';
// import { Analytics } from './components/common';
import Routes from './routes';

export default class FriendO extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      store: null
    }
  }

  componentWillMount() {
    // console.disableYellowBox = true;
    // if (__DEV__) {
    //   global.XMLHttpRequest = global.originalXMLHttpRequest ?
    //     global.originalXMLHttpRequest :
    //     global.XMLHttpRequest;
    //   global.FormData = global.originalFormData ?
    //     global.originalFormData :
    //     global.FormData;
    // }
		// Analytics.setTrackerId(GLOBALS.GA_TRACKER_ID);
		
		// localStorage.getItem('applicationState', (error, appState) => {
		// 	if(!error) {
		// 		this.setState({ store: configureStore(JSON.parse(appState)) });
    //   }
    // });
		this.setState({ store: configureStore() });
  }

  render () {
    if(this.state.store) {
      return (
        <Provider store={this.state.store}>
          <Routes />
        </Provider>
      )
    }

    return (
      <div>
				<h1> hello</h1>
			</div>
    );
  }
}

