import React from 'react';


import classes from './Movie.module.css';

const Movie = (props) => {

  const deletemovie=  async (e) => {
    const movieId = e.target.id;
    
    const url = `https://react-http-e4aeb-default-rtdb.firebaseio.com/movies/${movieId}.json`;
    
    const response = await fetch(url, {
      method: 'DELETE',
    })
    const data = await response.json();

    use
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deletemovie} id={props.id}>DELETE MOVIE</button>
    </li>
  );
};

export default Movie;
