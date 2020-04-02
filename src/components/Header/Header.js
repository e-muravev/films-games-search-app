import React from 'react' 
import './header.css'

function Header({ titleApp = 'Movie/Game Search App', onCloseInfo }) {
	return (
		<header className="header" onClick={onCloseInfo}>
			{/*<img src={projector} alt="popcorn_img" style={{width: '6rem'}} />*/}
			<h1>{titleApp}</h1>
			{/*<div style={{width: '6rem'}}></div>*/}
		</header>
	);
}

export default Header