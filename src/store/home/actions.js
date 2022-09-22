import axios from "axios"
import { 
    GET_SEARCH_RESULTS_ERROR, 
    GET_SEARCH_RESULTS_PENDING, 
    GET_SEARCH_RESULTS_SUCCESS, 
    SET_CURRENT_PAGE, 
    SET_PAGE 
} from "."


export const getSearchResults = (query) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_SEARCH_RESULTS_PENDING })
            let {data} = await axios(`https://api.github.com/search/users?q=${query}`)
            console.log(data)
            
            dispatch({
                type: GET_SEARCH_RESULTS_SUCCESS,
                payload: data.items
            })
        } catch (error) {
            dispatch({
                type: GET_SEARCH_RESULTS_ERROR,
                payload: error
            })
        }
    }
}

export const setCurrentPage = (val) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: val
    }
}

export const setPage = (val)  => {
    return {
        type: SET_PAGE,
        payload: val
    }
}

