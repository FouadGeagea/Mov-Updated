import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import Auxiliary from '../../hoc/auxiliary';
import * as userActions from '../../store/actions/actions';
import './Movies.css';
import SWAT from '../../images/SWAT.png';
import DRAGON from '../../images/Dragon.png';
import SIMPSONS from '../../images/Simpsons.png';
import PropTypes from 'prop-types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Movie = () => {
    const dispatch = useDispatch();
    let res, comedy, crime = [];
    res = useSelector(state => state.movies.actionMovies);
    comedy = useSelector(state => state.movies.comedyMovies);
    crime = useSelector(state => state.movies.crimeMovies);

    useEffect(() => {
        dispatch(userActions.Action());
        dispatch(userActions.Comedy());
        dispatch(userActions.Crime());
    }, []);

    const open = (movieDetails) => {
        dispatch(userActions.setMovieDetails(movieDetails));
    };

    function renderActionMovies() {
        return (
            res.map(arr => {
                return (
                    <SwiperSlide key className="item" onClick={() => { open(arr); }}>
                        {arr.name}
                        <img className="item1" alt="simpsons-img" src={SIMPSONS}></img>
                    </SwiperSlide>);
            }));
    }

    function renderComedyMovies() {
        return comedy.map(arr => {
            return (
                <SwiperSlide key className="item" onClick={() => open(arr)}>
                    {arr.name}
                    <img className="item1" alt="Dragon-img" src={DRAGON}></img>
                </SwiperSlide>);
        });
    }

    function renderCrimeMovies() {
        return crime.map(arr => {
            return (
                <SwiperSlide key className="item" onClick={() => open(arr)}>
                    {arr.name}
                    <img className="item1" alt="SWAT-img" src={SWAT}></img>
                </SwiperSlide>
            );
        });
    }

    return (
        <Auxiliary>
            <h2>Action</h2>
            <Swiper spaceBetween={50}
                slidesPerView={3}>
                {renderActionMovies()}
            </Swiper>
            <h2>Comedy</h2>
            <Swiper spaceBetween={50}
                slidesPerView={3}>
                {renderComedyMovies()}
            </Swiper>
            <h2>Crime</h2>
            <Swiper spaceBetween={50}
                slidesPerView={3}>
                {renderCrimeMovies()}
            </Swiper>
        </Auxiliary>);
};

Movie.propTypes = {
    crime: PropTypes.array.isRequired,
    res: PropTypes.array.isRequired,
    comedy: PropTypes.array.isRequired
};
export default Movie;