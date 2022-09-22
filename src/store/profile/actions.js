import axios from "axios"
import {  
    CLEAR_DATA,
    GET_USER_PROFILE_ERROR, 
    GET_USER_PROFILE_PENDING, 
    GET_USER_PROFILE_SUCCESS, 
    GET_USER_REPOS_ERROR, 
    GET_USER_REPOS_PENDING, 
    GET_USER_REPOS_SUCCESS, 
    SET_CURRENT_P_PAGE,
    SET_P_PAGE
} from "."



export const getUserRepos = (user) => {
    return async(dispatch) => {
        try {
            dispatch({ type: GET_USER_REPOS_PENDING })
            let { data } = await axios(`https://api.github.com/users/${user}/repos?per_page=100`)
            // console.log(data)
            const owner = data && data[0].owner
            dispatch({
                type: GET_USER_REPOS_SUCCESS,
                payload: {data, owner}
            })
        } catch (error) {
            dispatch({
                type: GET_USER_REPOS_ERROR,
                payload: error
            })
        }
    }
}

export const getUser = (url) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_USER_PROFILE_PENDING })
            let { data } = await axios(url)
            console.log(data)
            dispatch({
                type: GET_USER_PROFILE_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_USER_PROFILE_ERROR,
                payload: error
            })
        }
    }
}

export const setCurrentPPage = (val) => {
    return {
        type: SET_CURRENT_P_PAGE,
        payload: val
    }
}

export const setPPage = (value)  => {
    return {
        type: SET_P_PAGE,
        payload: value
    }
}

export const clearData = () => {
    return {
        type: CLEAR_DATA
    }
}