import React, { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchField from './components/SearchField/SearchField'
import MovieList from './components/MovieList/MovieList'
import Spinner from './components/Spinner/Spinner'


const API_KEY = "f6170df7";
const DEFAULT_API_REQUEST = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`

const initialState = {
  loading: false,
  movies: [],
  errorMessage: null,
  info: {},
  activateInfo: false,
}


const searchMoviesRequest = () => ({
  type: "SEARCH_MOVIES_REQUEST"
})

const searchMoviesSucces = (data) => ({
  type: "SEARCH_MOVIES_SUCCESS",
  movies: data.Search
})

const searchMoivesFailure = (data) => ({
  type: "SEARCH_MOVIES_FAILURE",
  error: data.Error
})

const getInfo = (info) => ({
  type: "GET_INFORMATION",
  info
})

const setInfoActivated = (status) => ({
  type: "ACTIVATE_INFO_FIELD",
  status
})

const resetInfo = () => ({
  type: "RESET_INFORMATION"
})

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMessage: null,
        movies: action.movies
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    case "GET_INFORMATION":
      return {
        ...state,
        info: action.info
      }
    case "ACTIVATE_INFO_FIELD":
      return {
        ...state,
        activateInfo: action.status
      }
    case "RESET_INFORMATION":
      return {
        ...state,
        info: {}
      }
    default:
      return state;
  }
};

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(searchMoviesRequest())
    fetch(DEFAULT_API_REQUEST)
    .then(response => response.json())
    .then(data => dispatch(searchMoviesSucces(data)))
  }, []);

  const search = (searchValue) => {

    dispatch(searchMoviesRequest())
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "True") 
      {
        setTimeout(() => dispatch(searchMoviesSucces(data)), 300);
      } 
      else 
      {
        dispatch(searchMoivesFailure(data))
      }
    });
  }

  
  let MovieCLickedStatus = false;
  const clickOnMovie = (...arg) => {
    // console.log(MovieCLickedStatus)
    MovieCLickedStatus = true
    // console.log(MovieCLickedStatus)
    const ID = arg[0].imdbID
    
    if(activateInfo === false)
    {
          dispatch(setInfoActivated(true))
    }

    fetch(`https://www.omdbapi.com/?i=${ID}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(response => dispatch(getInfo(response)))
  }

  const onCloseInfo = () => {
    // console.log(MovieCLickedStatus)   
    if (!MovieCLickedStatus && activateInfo === true)
    {
        dispatch(setInfoActivated(false))
    }
    dispatch(resetInfo())   
  }

  const { movies, errorMessage, loading, info, activateInfo} = state;

  return (
    <div className="App">

        <Header onCloseInfo={onCloseInfo} />
        <SearchField search={search} onCloseInfo={onCloseInfo} />
        {(loading) ? 
        <div style={{marginTop: '50px'}}>
          <Spinner/> 
        </div> 
        :
        ( errorMessage ? <h1 style={{marginTop: '50px'}}>Not Found</h1> 
        : 
        <MovieList onCloseInfo={onCloseInfo} 
                   info={info} 
                   activateInfo={activateInfo} 
                   movies={movies} 
                   clickOnMovie={clickOnMovie}/> )}

    </div>
  );
}

export default App;
