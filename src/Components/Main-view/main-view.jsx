/* eslint-disable no-undef */
import React from "react";
import MovieView from "../Movie-view/movie-view";
import MovieCard from "../Moviecard-view/moviecard-view";
import Login from "../Login/login";
import Register from '../Register/register';


class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [ ],
            selectedMovie: null,
        };
    }
     componentDidMount() {
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://moviehut-random-movie.p.rapidapi.com/api/movies',
  params: {limit: '8', page: '5', select: 'name'},
  headers: {
    'X-RapidAPI-Key': 'f56dac72afmsh9169bd8bc5415a6p121da0jsn0ed46b2f501f',
    'X-RapidAPI-Host': 'moviehut-random-movie.p.rapidapi.com'
  }
}

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

    }
    setSelectedMovie = (movie) => {
        this.setState((prev) => ({
            ...prev,
            selectedMovie: movie,
        }));
    }

      onLoggedIn(user) {this.setState({user});}

onRegistration(register) {
    this.setState({register});
    };


    render() {
        const { movies, selectedMovie, user, register } = this.state;

    if (!user) return <Login onLoggedIn={user => this.onLoggedIn(user)} />;

    if (!register) return <Register onRegistration={(register) => this.onRegistration(register)} />;

        if (selectedMovie) {
            return (
                <MovieView
                    movie={selectedMovie}
                    onBackClick={() => {
                        this.setState((prev) => ({
                            ...prev,
                            selectedMovie: null,
                        }));
                    }}
                />
            );
        } else {
            return movies.length === 0 ? (
                <div className="main-view">The list is empty!</div>
            ) : (
                <div className="main-view">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.Title}
                            movie={movie}
                            onMovieClick={(movie) => {
                                this.setSelectedMovie(movie);
                            }}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default MainView;
