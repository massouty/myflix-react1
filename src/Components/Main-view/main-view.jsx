/* eslint-disable no-undef */
import React from "react";
import axios from "axios";
import MovieView from "../Movie-view/movie-view";
import MovieCard from "../Moviecard-view/moviecard-view";
import Header from "../Header";
import Footer from '../Footer';


class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [ ],
            selectedMovie: null,
        };
    }
     componentDidMount() {
    axios.get('https://moviehut-random-movie.p.rapidapi.com/api/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
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
        const { movies, selectedMovie } = this.state;
        return (
       <>
           <div>
            <Header/>
          </div>
          <div>
            if (selectedMovie) {
                <MovieView
                    movie={selectedMovie}
                    onBackClick={() => {
                        this.setState((prev) => ({
                            ...prev,
                            selectedMovie: null,
                        }));
                    }}
                />
        } else {
             movies.length === 0 ? (
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
            )
         }
         </div>
         <div>
        <Footer/>
        </div>
</>
)
}

}

export default MainView;
