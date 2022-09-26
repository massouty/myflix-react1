/* eslint-disable no-undef */
import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieView from "../Movie-view/movie-view";

import Login from  "../Login/login";
import Register from "../Register/register";
import Director from '../Director/director';
import Genre from '../Genre/genre';
import ProfileView from '../Profile-view/profile-view';
import Header from '../Header';
import MoviesList from "../Movies-list";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './main-view.scss';


export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      isRegistered: true,
      user: null,
      visable: false
    }
  }
  
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  getMovies() {
    axios.get('https://moviehut-random-movie.p.rapidapi.com/api/movies', {

    params: {limit: '8', page: '5', select: 'name'},
  headers: {
    'X-RapidAPI-Key': 'f5 6dac72afmsh9169bd8bc5415a6p121da0jsn0ed46b2f501f',
    'X-RapidAPI-Host': 'moviehut-random-movie.p.rapidapi.com'
  }
    })
    .then(response => {
      this.props.setMovies(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  onRegister() {
    this.setState({
      isRegistered: false
    });
  }

  render() {

    let { movies } = this.props;
    let { user } = this.state;

    return (
      <Router>
        <Header user={user} /> 
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
              if (!user) return <Col>
                <Login onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <MoviesList movies={movies}/>;
         }} />
          <Route path="/register" render={() => {
            // eslint-disable-next-line react/jsx-no-undef
            if (user) return < Redirect to ="/" />
            return <Col>
              <Register/>
            </Col>
          }} />
    <Route path="/movies/:id" render={({ match, history }) => {
       if (!user) return <Col>
       <Login onLoggedIn={user => this.onLoggedIn(user)} />
     </Col>
     if (movies.length === 0) return <div className="main-view" />;
     return <Col md={8}>
        <MovieView movie={movies.find(m => m._id === match.params.id)} onBackClick={() => history.goBack()} />
      </Col>
    }} />
    <Route path="/directors/:name" render={({ match, history}) => {
      if (!user) return <Col>
      <Login onLoggedIn={user => this.onLoggedIn(user)} />
    </Col>
    if (movies.length === 0) return <div className="main-view" />;
    return <Col md={8}>
      <Director director={movies.find(m => m.Director.Name === match.params.name )} onBackClick={() => history.goBack()}/>
      </Col>
    }} />
    <Route path="/genres/:name" render={({ match, history}) => {
      if (!user) return <Col>
      <Login onLoggedIn={user => this.onLoggedIn(user)} />
    </Col>
    if (movies.length === 0) return <div className="main-view" />;
    return <Col md={8}>
      <Genre genre={movies.find(m => m.Genre.Name === match.params.name )} onBackClick={() => history.goBack()}/>
      </Col>
    }} />
    <Route path={`/users/${user}`} render={({ history}) => {
       if (!user) return <Col>
       <Login onLoggedIn={user => this.onLoggedIn(user)} />
     </Col>
     if (movies.length === 0) return <div className="main-view" />;
     return <Col md={8}>
      <ProfileView movies={movies} user={user} onBackClick={() => history.goBack()} />
      </Col>
    }} />
  </Row>
</Router>
     
    );
  }
}

let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect (mapStateToProps, { setMovies } )(MainView);





