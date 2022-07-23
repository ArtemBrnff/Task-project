import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import studentsReducer from '../Reducers/studentsReducer'

const reducers = combineReducers({
    studentsPage : studentsReducer
})
const store = createStore(reducers, applyMiddleware(thunk))
export default store