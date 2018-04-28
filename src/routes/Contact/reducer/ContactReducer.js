export const GET_CONTACT_INFO = 'GET_CONTACT_INFO'
export const SET_CONTACT_INFO = 'SET_CONTACT_INFO'

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

const CONTACT_ACTION_HANDLER = {
    [GET_CONTACT_INFO]: (state, action) => {
        return ({...state, contactTitle: null, contactDetails: null})
    },
    [SET_CONTACT_INFO]: (state, action) => {
        return ({...state, contactTitle: action.payload.data.contactTitle, contactDetails: action.payload.data.contactDetails})
    }
}

const initialState = {
    contactTitle: null,
    contactDetails: null
}

export default function contactReducer (state = initialState, action) {
    const handler = CONTACT_ACTION_HANDLER[action.type]
    return handler? handler(state, action): state
}



