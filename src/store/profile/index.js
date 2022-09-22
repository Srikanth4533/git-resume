const inititalState = {
    data: [],
    user: {},
    reposPerPage: 8,
    currentPage: 1,
    isReposLoading: false,
    isReposError: false,
    isProfileLoading: false,
    isProfileError: false,
    userProfile: {}
}


export const GET_USER_REPOS_ERROR = 'GET_USER_REPOS_ERROR'
export const GET_USER_REPOS_PENDING = 'GET_USER_REPOS_PENDING'
export const GET_USER_REPOS_SUCCESS = 'GET_USER_REPOS_SUCCESS'
export const GET_USER_PROFILE_ERROR = 'GET_USER_ERROR'
export const GET_USER_PROFILE_PENDING = 'GET_USER_PENDING'
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_SUCCESS'
export const CLEAR_DATA = 'CLEAR_DATA'

export const SET_P_PAGE = 'SET_P_PAGE'
export const SET_CURRENT_P_PAGE = 'SET_CURRENT_P_PAGE'

function profileReducer(state = inititalState, action) {
    switch(action.type) {
        case GET_USER_REPOS_ERROR:
            return {
                ...state,
                isReposError: action.payload,
                isReposLoading: false
            }

        case GET_USER_REPOS_PENDING:
            return {
                ...state,
                isReposLoading: true
            }

        case GET_USER_REPOS_SUCCESS:
            const { data, owner } = action.payload
            return {
                ...state,
                data: data,
                user: owner,
                isReposLoading: false,
                isReposError: false
            }

        case GET_USER_PROFILE_ERROR:
            return {
                ...state,
                isProfileError: action.payload,
                isProfileLoading: false
            }

        case GET_USER_PROFILE_PENDING:
            return {
                ...state,
                isProfileLoading: true
            }

        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                userProfile: action.payload,
                isProfileLoading: false,
                isProfileError: false
            }

            case SET_CURRENT_P_PAGE:
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
    
            case SET_P_PAGE:
                let val = state.currentPage
                val = val + action.payload
    
                if(val === 0 || val > Math.ceil(state.data.length / state.reposPerPage)) {
                    return {
                        ...state
                    }
                }
    
                return {
                    ...state,
                    currentPage: val
                }

            case CLEAR_DATA:
                return {
                    ...state,
                    data: [],
                    user: {},
                    userProfile: {}
                }

        default:
            return state
    }
}

export default profileReducer