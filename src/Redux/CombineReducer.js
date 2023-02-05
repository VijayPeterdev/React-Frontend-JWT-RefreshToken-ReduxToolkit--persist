// combine reducer create pannanum
// athu redux laa irunthu varum so  -  npm i redux 

import {combineReducers} from 'redux'

import userReducer  from './userSlice'

const rootReducers = combineReducers({
    user:userReducer
});

export default rootReducers;


// next step npm i redux persit pananum

