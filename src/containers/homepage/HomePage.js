import React from 'react';
import Auxiliary from '../../hoc/auxiliary';
import Logo from '../../components/Logo/Logo';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../store/actions/actions';
import Action from '../../components/Movie/Movies';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const HomePage = () => {
    const dispatch = useDispatch();
    let show = useSelector(state => state.movies.showModal);
    let rend = useSelector(state => state.movies.movieDetails);
    const close = () => {
        dispatch(userActions.clearMovieDetails());
    };
    return (
        <Auxiliary>
            <Logo />
            <Action />
            <Modal show={show} backdrop="static"
                keyboard={false} className="Modal">
                <Modal.Body >{
                    <div>
                        <div>
                            {rend.name}: {rend.overview}
                        </div>
                        <div>
                            Country:{rend.origin_country}
                        </div>
                        Popularity : {rend.popularity} | Vote average: {rend.vote_average}
                    </div>
                }</Modal.Body>
                <Button variant="dark" size="lg" onClick={() => { close(); }}>
                    Close
            </Button>
            </Modal>
        </Auxiliary>

    );
};
export default HomePage;