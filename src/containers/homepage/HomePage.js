import React from 'react'
import Auxiliary from '../../hoc/auxiliary'
import Logo from '../../components/Logo/Logo'
import { Modal,Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import * as userActions from '../../store/actions/actions'
import Action from '../../components/Movie/Movies'


const Movies = () => {
    const dispatch = useDispatch();
    var show = useSelector(state => state.movies.showModal);
    var rend = useSelector(state => state.movies.movieDetails.name + ':  ' +
        state.movies.movieDetails.overview);
    var count = useSelector(state => state.movies.movieDetails.origin_country);
    var pop = useSelector(state => 'Popularity : ' + state.movies.movieDetails.popularity + ' | Vote average: ' + state.movies.movieDetails.vote_average)

    const close = () => {
        dispatch(userActions.clearMovieDetails())
    }

    return (
        <Auxiliary>
            <Logo />
            <Action />
            <Modal show={show} backdrop="static"
                keyboard={false} className="Modal">
                <Modal.Body >{
                    <div>
                        <div>
                            {rend}
                            </div>
                        <div>
                            Country:{count}
                        </div>
                        {pop}
                    </div>}</Modal.Body>
             
                    <Button  variant="dark"  size="lg" onClick={() => { close() }}>
                        Close
                     </Button>
              </Modal>
        </Auxiliary>

    )
}



export default Movies;




