import React from 'react' 
import Movie from '../Movie/Movie'
import Info from '../Info/Info'
import './movieList.css'

function MovieList({ movies, clickOnMovie, info, activateInfo, onCloseInfo}) {
	


	return (
		<React.Fragment>
			<div className="movieList" onClick={onCloseInfo}>
				{movies.map((movie, i) => (<Movie clickOnMovie={clickOnMovie}
												  movie={movie} 
												  key={`${i}&${movie.imdbID}&${movie.Title}`} />))}
			</div>
				<Info activateInfo={activateInfo} info={info} onCloseInfo={onCloseInfo}/>
		</React.Fragment>
	);
}

export default MovieList