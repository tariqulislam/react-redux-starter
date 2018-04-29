import axios from 'axios'
import RequestHeaderHelper from '../../../shared/RequestHeaderHelper'
export const GET_CONTACT_INFO = 'GET_CONTACT_INFO'
export const SET_CONTACT_INFO = 'SET_CONTACT_INFO'

export const GET_POST_INFO = 'GET_POST_INFO'
export const SET_POST_INFO = 'SET_POST_INFO'

export function getPostInfo () {
    return {
        type: GET_POST_INFO,
        payload: {}
    }
}

export function setPostInfo (data) {
    return {
        type: SET_POST_INFO,
        payload: {data}
    }
}


export function getContactInfo () {
  return { 
      type: GET_CONTACT_INFO,
      payload: {}
  }
}

export function setContactInfo (data) {
    return {
        type: SET_CONTACT_INFO,
        payload: {data}
    }
}

export const getPostInfoFromApi = (data) => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${data.id}`
    const request = axios.get(url, RequestHeaderHelper.jsonHeaderWithAuth())
    return {type: 'GET_POST_INFO', payload: request}
}

const CONTACT_ACTION_HANDLER = {
    [GET_CONTACT_INFO]: (state, action) => {
        return ({...state, contactTitle: null, contactDetails: null})
    },
    [SET_CONTACT_INFO]: (state, action) => {
        return ({...state, contactTitle: action.payload.data.contactTitle, contactDetails: action.payload.data.contactDetails})
    },
    [GET_POST_INFO]: (state, action) => {
        return ({...state, posts: null })
    },
    [SET_POST_INFO]: (state, action) => {
        return ({...state, posts: action.payload.data })
    }
}

const initialState = {
    contactTitle: null,
    contactDetails: null,
    posts: null
}

export default function contactReducer (state = initialState, action) {
    const handler = CONTACT_ACTION_HANDLER[action.type]
    return handler? handler(state, action): state
}



