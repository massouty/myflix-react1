import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainView from './Components/Main-view/main-view';

class MyFlixApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MyFlixApplication), container);





