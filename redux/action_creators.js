import { FETCH_DATA, API_ERROR, FETCHED_DATA, FETCH_IMAGES, IMAGE_API_ERROR, FETCHED_IMAGES,} from './actions'
import {fetchFakeData, fetchFakeImages} from '../api'

const fetchData = () => {
    return {
        type: FETCH_DATA
    }
}

const fetchedData = (data) => {
    return {
        type: FETCHED_DATA,
        payload : {
            data
        }
    }
}

const apiError = (message) => {
    return {
        type: API_ERROR,
        payload : {
            message
        }
    }
}

const getUsersData = () => {
    return (async(dispatch) => {
        dispatch(fetchData())
        const result = await fetchFakeData()
        if (result.error) {
            dispatch(apiError("Something went wrong"))
            return
        }
        dispatch(fetchedData(result.data))
    })
}


const fetchImages = () => {
    return {
        type: FETCH_IMAGES
    }
}

const fetchedImages = (data) => {
    return {
        type: FETCHED_IMAGES,
        payload : {
            data
        }
    }
}

const imageApiError = (message) => {
    return {
        type: IMAGE_API_ERROR,
        payload : {
            message
        }
    }
}

const getFakeImages = () => {
    return (async(dispatch) => {
        dispatch(fetchImages())
        const result = await fetchFakeImages()
        if (result.error) {
            dispatch(imageApiError("Something went wrong"))
            return
        }
        dispatch(fetchedImages(result.data))
    })
}

export {getUsersData, getFakeImages};