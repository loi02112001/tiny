import * as types from '../constants'

const DEFAULT_STATE = {
    listData: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 1,
    totalPage: 1
}
export default (state = DEFAULT_STATE, actions) => {
    console.log(state, 'day la state');
    console.log(actions, 'day la actions')
    switch (actions.type) {
        case types.ADD_ITEM_REQUEST:
        case types.DELETE_ITEM_REQUEST:
        case types.UPDATE_ITEM_REQUEST:
        case types.PAGINATE_ITEM_REQUEST:
        case types.SEARCHPAGINATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.ADD_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }
        case types.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }


        case types.PAGINATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                activePage: actions.payload.activePage,
                listData: actions.payload.ItemPage,
                totalPage: actions.payload.totalPage
            }
        case types.PAGINATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }

        case types.SEARCHPAGINATE_ITEM_SUCCESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                activePage: actions.payload.activePage,
                listData: actions.payload.ItemPage,
                totalPage: actions.payload.totalPage,
                nameSearch: actions.payload.nameSearch
            }
        case types.SEARCHPAGINATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }
        default:
            return state
    }
}