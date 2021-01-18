import instance from '../../axios';
import * as type from '../constants/constants';

export const setMovieDetails = (movieDetails) => {
    return {
        type: type.SET_MOVIES_DETAILS,
        showModal: true,
        movieDetails: {
            name:movieDetails.name,
            overview: movieDetails.overview,
            origin_country: movieDetails.origin_country,
            popularity: movieDetails.popularity,
            vote_average: movieDetails.vote_average
        }};};
       
export const clearMovieDetails = () => {
    return {
        type: type.CLEAR_MOVIE_DETAILS,
        showModal: false,
        movieDetails:{
            name: '',
            overview: '',
            originCountry: '',
            popularity: '',
            voteAverage: ''
        }};};

export const setActionMovies = (movies) => {
    return {
        type: type.SET_ACTION_MOVIES,
        actionMovies: movies
    };};

export const setComedyMovies = (movies) => {
    return {
        type: type.SET_COMEDY_MOVIES,
        comedyMovies: movies
    };};
export const setCrimeMovies = (movies) => {
    return {
        type: type.SET_CRIME_MOVIES,
        crimeMovies: movies
    };};

export const Action = () => {
    return dispatch => {
        // eslint-disable-next-line no-undef
        console.log('process',process.env.REACT_APP_GET);
        instance.get('&with_genres=28')
            .then(response => {
                dispatch(setActionMovies(response.data.results));

            }).catch(err => {
                alert(err);
            });};};
export const Comedy = () => {
    return dispatch => {
        instance.get('&with_genres=35').then(response => {
            dispatch(setComedyMovies(response.data.results));
           console.log(response);
        }).catch(err => {
            alert(err);
        });};};

export const Crime = () => {
    return dispatch => {
        instance.get('&with_genres=80').then(response => {
            dispatch(setCrimeMovies(response.data.results));
        }).catch(err => {
            alert(err);
        });};};


