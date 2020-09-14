import { connect } from 'react-redux';
import HeaderAndNav from '../components/HeaderAndNav';
// import { addHan, addFu } from '../actions/Score';

const mapStateToProps = (state, ownProps) => ({
    // han: state.Score.han,
    // fu: state.Score.fu,
    // score: state.Score.score,
    // error: state.Score.error
});

const mapDispatchToProps = dispatch => ({
    // addHan(han) { dispatch(addHan({ han })); },
    // addHu(fu) { dispatch(addFu({ fu })); }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAndNav);