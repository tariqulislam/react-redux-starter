import { combineReducers } from 'redux'
import layout from '../reducers/layout'
import home from '../reducers/home'


const createReducer = asyncReducer => combineReducers({
    home,
    layout,
    ...asyncReducer
})

export default createReducer