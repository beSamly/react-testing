
import loggerReducer from './isLoggedIn'
import counterReducer from './counter'

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,
    loggerReducer
})

export default allReducers