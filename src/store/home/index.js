import { dummyRepos, user } from "utils"

const inititalState = {
    user: user,
    repos: dummyRepos,
    reposPerPage: 8,
    currentPage: 1,
    searchResults: [],
    isLoading: false,
}


export const GET_SEARCH_RESULTS_ERROR = 'GET_SEARCH_RESULTS_ERROR'
export const GET_SEARCH_RESULTS_PENDING = 'GET_SEARCH_RESULTS_PENDING'
export const GET_SEARCH_RESULTS_SUCCESS = 'GET_SEARCH_RESULTS_SUCCESS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_PAGE = 'SET_PAGE'


function homeReducer(state = inititalState, action) {
    switch(action.type) {

        case GET_SEARCH_RESULTS_ERROR:
            return {
                ...state,
                isError: action.payload,
                isLoading: false
            }

        case GET_SEARCH_RESULTS_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case GET_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                searchResults: action.payload,
                isLoading: false,
                isError: false
            }

        case SET_CURRENT_PAGE:
            let page = state.currentPage
            if(page === 0) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                currentPage: action.payload
            }

        case SET_PAGE:
            let val = state.currentPage
            val = val + action.payload

            if(val === 0 || val > Math.ceil(state.repos.length / state.reposPerPage)) {
                return {
                    ...state
                }
            }

            return {
                ...state,
                currentPage: val
            }


        default:
            return state
    }
}

export default homeReducer