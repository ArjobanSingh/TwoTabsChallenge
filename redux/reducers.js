import { combineReducers } from 'redux'

import {FETCH_IMAGES, IMAGE_API_ERROR, FETCHED_IMAGES, FETCHED_DATA, API_ERROR, FETCH_DATA} from './actions'

function fakeImages(state={images: null, error: false, err_msg: null, loading: true}, action) {
    switch (action.type) {
        case FETCH_IMAGES:
            return {images : null, error : false, err_msg : null, loading: true}
        case IMAGE_API_ERROR:
            return {images : null, error : true, err_msg : action.payload.message, loading: false};
        case FETCHED_IMAGES:
            return {images : action.payload.data, error: false, err_msg: null, loading: false}    
        default:
            return state
    }
}

function usersData(state = {users : null, error : false, err_msg : null, loading : false }, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {users : null, error : false, err_msg : null, loading: true}
        case API_ERROR:
            return {users : null, error : true, err_msg : action.payload.message, loading: false};
        case FETCHED_DATA:
            return {users : action.payload.data, error: false, err_msg: null, loading: false}    
        default:
            return state
    }
}

export default combineReducers({
    usersData,
    fakeImages
})