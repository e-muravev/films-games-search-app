import React, { useState, useEffect } from 'react' 
import default_poster from './default poster.jpg'
import './movie.css'
import Spinner from '../Spinner/Spinner'
 
function Movie({ movie, clickOnMovie}) {
	
	const poster = (movie.Poster === 'N/A') ? default_poster : movie.Poster
  
  const [isImgLoaded, setImgStatus] = useState(false)

  useEffect(() => {      
    setImgStatus(false)

    const img = new Image()
    img.onload = () => {
      setImgStatus(true)
    }
    img.onerror = (error) => {
      console.log(error)
    }
    img.src = poster
  }, [movie, poster]);

  	return (
		<div className="movie" onClick={() => clickOnMovie(movie)}>
      {isImgLoaded ? <div>
                        <h3>{movie.Title}</h3>
      		              <div className="divForImg">
                          <img style={{width: '100%'}}
          			                       alt={`The movie titled: ${movie.Title}`}
          			                       src={poster}/> 
                        </div>
      		              <h4>{movie.Year}</h4>
                    </div>
      : <Spinner/>}
    </div>
	);
}

export default Movie



