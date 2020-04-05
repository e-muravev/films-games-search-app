import React, {useState} from 'react'
import './searchfield.css' 

function SearchField({ search, onCloseInfo }) {
	
	const [searchValue, setSearchField] = useState("")
	const [errorInput, setErrorInput] = useState(false)

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
		}
		else
		{
			setErrorInput(true)
			setSearchField('Fill the field')
		}
	}

	return (
		<div onClick={onCloseInfo}>
			<form className="search" onSubmit={callSearchFunction}>
        		<input
          			id='input'
          			value={searchValue}
          			onFocus={()=>{setSearchField(""); setErrorInput(false)}}
          			onChange={handleSearchInputChanges}
          			type="text"
          			placeholder="Enter a movie or game title..."
          			style={errorInput ? {border: '2px solid red', color: 'red'} : null}
        		/>
        		<button  type="submit" value="search" >SEARCH</button>
      		</form>
		</div>
	);
}

export default SearchField