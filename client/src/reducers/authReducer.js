import { FETCH_USER } from '../actions/types';
// import { userInfo } from 'os';


// arguments:
//  state object, action object
// note: State needs a default value
export default function(state = null, action){
    //console.log(action);
    switch (action.type){
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}
