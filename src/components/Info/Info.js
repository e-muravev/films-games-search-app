import React from 'react'
import './info.css'
import Spinner from '../Spinner/Spinner'

function Info({ info, activateInfo, onCloseInfo}) {
	// console.log(info)
	if (activateInfo === true) 
	{
		if (info.Title === undefined)
		{
			return (
				<div className="info" style={{diplay: 'flex', justifyContent:'center'}}>
					<Spinner/>
				</div>	
			)
		}
		else
		{
			return (
			<div className="info" onClick={onCloseInfo}>
				<div className="poster">
					<img src={info.Poster} alt="poster" />
				</div>
				<div className="text">
					<p><span className="x">Title:</span> {info.Title}</p>
					<p><span className="x">Year:</span> {info.Year}</p>
					<p><span className="x">Released:</span> {info.Released}</p>
					<p><span className="x">Runtime:</span> {info.Runtime}</p>
					<p><span className="x">Genre:</span> {info.Genre}</p>
					<p><span className="x">Plot:</span> {info.Plot}</p>
					<p><span className="x">Director:</span> {info.Director}</p>
					<p><span className="x">Writer:</span> {info.Writer}</p>
					<p><span className="x">Actors:</span> {info.Actors}</p>
					<p><span className="x">BoxOffice:</span> {info.BoxOffice}</p>
					<p><span className="x">Awards:</span> {info.Awards}</p>
					<p><span className="x">Country:</span> {info.Country}</p>
				</div>
			</div>
			);
		}
		
	}
	return null
}

export default Info