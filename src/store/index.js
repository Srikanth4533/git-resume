import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import home from "./home"
import profile from "./profile"



const rootReducer = combineReducers({
    home,
    profile
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store