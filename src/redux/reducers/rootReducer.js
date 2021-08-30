import {CLEAR_STORE, FETCH_USERS, PUSH_USER} from "../actions/actionTypes";

export const rootReducer = (state = {users: []}, action) => {
    // console.log('reducer', state);
    console.log(action);
    switch (action.type) {
        case FETCH_USERS:
            console.log('case 1', action.payload);
            return {...state, users: [...action.payload]};
        case CLEAR_STORE:
            return {...state, users: []}
        case PUSH_USER:
            // state.users.push(action.payload);
            // return  {...state}
            return {...state, users: [...state.users, action.payload]};
        default:
            return state;
    }
}