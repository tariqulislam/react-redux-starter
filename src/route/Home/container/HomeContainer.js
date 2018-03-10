import { push } from 'react-router-redux'
import { connect} from 'react-redux'
import {bindActionCreators} from "redux";
import Home from "../Home";

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)