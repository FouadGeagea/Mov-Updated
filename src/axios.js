import axios from 'axios';

const instance = axios.create({
    // eslint-disable-next-line no-undef
    baseURL:`https://api.themoviedb.org/3/discover${process.env.REACT_APP_GET}`
});
export default instance