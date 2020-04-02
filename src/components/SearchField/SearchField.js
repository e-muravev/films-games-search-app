import React, {useState} from 'react'
import './searchfield.css' 

function SearchField({ search, onCloseInfo }) {
	
	const [searchValue, setSearchField] = useState("")

	const handleSearchInputChanges = (event) => {
		setSearchField(event.target.value)
	}

	const resetSearchField = () => {
		setSearchField("")
	}

	const callSearchFunction = (event) => {
		event.preventDefault();
		search(searchValue);
		resetSearchField();
	}

	return (
		<div onClick={onCloseInfo}>
			<form className="search">
        		<input
          			value={searchValue}
          			onChange={handleSearchInputChanges}
          			type="text"
          			placeholder="Enter a movie or game title..."
        		/>
        		<button onClick={callSearchFunction} type="submit" value="search">SEARCH</button>
      		</form>
		</div>
	);
}

export default SearchField