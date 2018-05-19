import axios from 'axios';
import { FETCH_USER } from './types';

// Before refactor (lecture 79)
// export const fetchUser = () => {
//     return function(dispatch){
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({
//                 type: FETCH_USER,
//                 payload: res
//             }));
//     };
// };

// Refactor version 1 (lecture 79)
// export const fetchUser = () => 
//     function(dispatch){
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({
//                 type: FETCH_USER,
//                 payload: res
//             }));
//     };


// Refactor version 2 (lecture 79)
// export const fetchUser = () => dispatch => {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({
//                 type: FETCH_USER,
//                 payload: res
//             }));
//     };

// Refactor version 3 (lecture 79)
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    //dispatch({ type: FETCH_USER, payload: res });
    dispatch({ type: FETCH_USER, payload: res.data });
};