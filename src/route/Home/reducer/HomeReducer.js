/* Action Constraint */
export const REQUEST_SHOW_HEADER = 'REQUEST_SHOW_HEADER'
export const RECEIVE_SHOW_HEADER = 'RECEIVE_SHOW_HEADER'

/* action for change reducers */
export function requestShowHeader() {
  return {
    type: REQUEST_SHOW_HEADER,
    payload: {}
  }
}

export function receiveShowHeader(data) {
  return {
    type: RECEIVE_SHOW_HEADER,
    payload: {data}
  }
}

/** reducers condition are handled by this object
 * purpose: Remove the else if or switch case statement
 * @type {{}}
 */
const HOME_ACTION_HANDLER = {
  [REQUEST_SHOW_HEADER]: (state, action) => {
    return ({
      ...state,
      showHeader: false,
      headerText: null
    })
  },
  [RECEIVE_SHOW_HEADER]: (state, action) => {
    return ({
      ...state,
      showHeader: true,
      headerText: "Home page is loading ......."
    })
  }
}

/** seperate the initialState
 * purpose: for coder friendly development
 **/
const initialState = {
  showHeader: false,
  headerText: null
}

export default function homeReducer (state = initialState, action) {
  const handler = HOME_ACTION_HANDLER[action.type]
  return handler? handler(state, action): state
}