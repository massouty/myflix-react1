import React from 'react';
class MovieCard extends React.Component {
    constructor(){
    super();
    this.state = {
      movies: [
  {
    _id: 1,
    Title: 'Silence of the Lambs',
    Description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
      
    ImagePath: 'https://www.imdb.com/title/tt0102926/mediaviewer/rm803658241/?ref_=tt_md_3',

  },
  {
    _id: 2,
    Title: 'Lord of the Ring',
    Description: ' A  fellowship of hobbits , elves,dwarfs and men is formed to destroy the ring by casting it into the volcanic fire of the crack of doom .',
    ImagePath: 'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976/?ref_=tt_ov_i',
  
  },
  {
    _id: 3,
    Title: 'Coco',
    Description: 'The story follows a 12-years-old boy named Miguel who is accidentally transported to the Land of Dead.',
    ImagePath: 'https://www.imdb.com/title/tt2380307/mediaviewer/rm585455872/?ref_=tt_ov_i',

  },
      ]
    }
}
  render() {
    const { movie, onMovieClick } = this.props;

    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}

export default MovieCard;