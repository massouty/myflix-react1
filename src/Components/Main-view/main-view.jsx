/* eslint-disable no-undef */
import React from "react";
import axios from "axios";
import MovieView from "../Movie-view/movie-view";
import MovieCard from "../Moviecard-view/moviecard-view";

import Silence from '../image/silence.jpg';
import Lord from '../image/lord.jpg';
import Coco from'../image/coco.jpg';



class  MainView extends React.Component {
      constructor() {
        super();
        this.state = {
            movies: [{
                    _id: 1,
                    Title: "Silence of the Lambs",
                    Description:
                        "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",

                    ImagePath:Silence,
                },
                {
                    _id: 2,
                    Title: "Lord of the Ring",
                    Description:
                        " A  fellowship of hobbits , elves,dwarfs and men is formed to destroy the ring by casting it into the volcanic fire of the crack of doom .",
                    ImagePath:Lord
                },
                {
                    _id: 3,
                    Title: "Coco",
                    Description:
                        "The story follows a 12-years-old boy named Miguel who is accidentally transported to the Land of Dead.",
                    ImagePath:Coco
                }, ],
            selectedMovie: null,
        };
    }
     componentDidMount() {
    axios.get('https://appformovies.herokuapp.com/movies')
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

        if (selectedMovie) {return (<MovieView movie={selectedMovie} onBackClick={() => 
            {this.setState((prev) => ({...prev,selectedMovie: null, }));
                    }}/>
            );
        } else {return movies.length === 0 ? (
                <div className="main-view">The list is empty!</div>) : 
                (<div className="main-view"> {movies.map((movie) => (<MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => 
                {this.setSelectedMovie(movie);}}/>
                    ))}
                </div>
            );
        }
    }
}


export default MainView;
