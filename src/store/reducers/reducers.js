import { SET_ACTION_MOVIES, SET_COMEDY_MOVIES, SET_CRIME_MOVIES,SET_MOVIES_DETAILS,CLEAR_MOVIE_DETAILS  } from '../constants/constants'

const initialState = {
    actionMovies: [],
    comedyMovies: [],
    crimeMovies: [],
    movieDetails:{
        name: '',
        overview: '',
        origin_country:'',
        popularity:'',
        vote_average:''
    },
    
    showModal: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTION_MOVIES:
            return {
                ...state,
                actionMovies: action.actionMovies
            }
        case SET_COMEDY_MOVIES:
            return {
                ...state,
                comedyMovies: action.comedyMovies
            }
        case SET_CRIME_MOVIES:
            return {
                ...state,
                crimeMovies: action.crimeMovies
            }
        case SET_MOVIES_DETAILS:
            return {
                ...state,
                showModal: action.showModal,
                movieDetails:action.movieDetails
               
            }
        case CLEAR_MOVIE_DETAILS:
            return {
                ...state,
                showModal: action.showModal,
                movieDetails:action.movieDetails
            }
   
        default: return state;
    }

}


export default reducer