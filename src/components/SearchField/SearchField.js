import React, {useState} from 'react'
import './searchfield.css' 

function SearchField({ search, onCloseInfo }) {
	
	const [searchValue, setSearchField] = useState("")
	const [errorInput, setErrorInput] = useState(false)
	const [errorPlaceholder, setErrorPlaceholder] = useState('Enter a movie or game title...')

	const handleSearchInputChanges = (event) => {
		setSearchField(event.target.value)
	}

	const resetSearchField = () => {
		setSearchField("")
	}

	const callSearchFunction = (event) => {
		event.preventDefault();
		if(searchValue)
		{
			search(searchValue);
			resetSearchField();
			setErrorInput(false)
			setErrorPlaceholder('Enter a movie or game title...')	
		}
		else
		{
			setErrorInput(true)
			setErrorPlaceholder('Fill the field...')
		}
	}

	return (
		<div onClick={onCloseInfo}>
			<form className="search" onSubmit={callSearchFunction}>
        		<input
          			id='input'
          			value={searchValue}
          			onChange={handleSearchInputChanges}
          			type="text"
          			placeholder={errorPlaceholder}
          			style={errorInput ? {border: '2px solid red'} : null}
        		/>
        		<button  type="submit" value="search" >SEARCH</button>
      		</form>
		</div>
	);
}

export default SearchField