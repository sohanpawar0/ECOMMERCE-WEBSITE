import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  console.log(props);
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
       
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release}
          openingText={movie.openingText}

        />
   
      ))}
    </ul>
  );
};

export default MovieList;
