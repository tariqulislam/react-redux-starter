import { push } from 'react-router-redux'
import {connect} from 'react-redux'

import {
    receiveShowHeader,
    requestShowHeader
} from '../reducer/HomeReducer'
import Home from '../Home'

/* action dispatcher function for reducers */

const loadChangeHomePage = (dispatch) => {
    dispatch(push('/about-us'))
}

const loadshowHeaderAtHome = (dispatch) => {
    dispatch(receiveShowHeader())
}

const loadClearHeaderAtHome = (dispatch) => {
    dispatch(requestShowHeader())
}

const mapStateToProps = (state) => ({
    headerText: state.homeReducer.headerText,
    showHeader: state.homeReducer.showHeader
})


const mapActionCreators = (dispatch) => ({
  changeHomePage: () => loadChangeHomePage(dispatch),
  showHeaderAtHome: () => loadshowHeaderAtHome(dispatch),
  clearHeaderAtHome: () => loadClearHeaderAtHome(dispatch)
})

export default connect(
  mapStateToProps,
  mapActionCreators
)(Home)
