import {LOGIN_START, FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE} from '../actions/index';

const initialState = {
    friends: [],
    isLoggingIn: false,
    error:'',
    fetching: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(LOGIN_START):{
            return{
                ...state,    
                isLoggingIn: true
            };
        };
        case(FETCH_DATA):{
            return{
                ...state,
                fetching: true,
                error: ''
            };
        };
        case(FETCH_SUCCESS):{
            return{
                ...state,
                fetching: false,
                error: '',
                friends: action.payload
            };
        };
        case(FETCH_FAILURE):{
            return{
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        default: return state;            
    }
}

export default reducer;