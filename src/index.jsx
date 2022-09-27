import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainView from './Components/Main-view/main-view';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Footer  from './Components/footer';

class MyFlixApplication extends React.Component {
  render() {
    return (
    <Container>
        <Header/>
      <MainView />
      <Footer/>
    </Container>
    );
  }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MyFlixApplication), container);





