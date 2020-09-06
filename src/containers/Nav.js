import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { push } from 'connected-react-router'

const mapStateToProp = state => ({
    // categories: state.shopping.categories
});

const mapDispatchToProps = dispatch => ({
    onClick(path) {
        dispatch(push(path));
    }
})
export default connect(mapStateToProp, mapDispatchToProps)(Nav);