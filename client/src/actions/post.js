import axios from 'axios';
import { setAlert } from './alert';
import { 
    GET_POSTS,
    POST_ERROR
} from './types';

// GEt Posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });

    } catch (err) {
        dispatch({ 
            type: POST_ERROR,
            payload: { msg: err.response.status, status: err.response.status }
        });
    }
}