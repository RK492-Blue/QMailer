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

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    // return { type: 'submit_survey' };
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({
        type: FETCH_USER, 
        payload: res.data
    })
};