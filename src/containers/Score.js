import { connect } from 'react-redux';
import Score from '../components/Score';
import * as actions from '../actions/Score';

const mapStateToProps = (state, ownProps) => ({
    categoryId: ownProps.categoryId,
    category: state.Ranking.category,
    ranking: state.Ranking.ranking,
    error: state.Ranking.error
});

const mapDispatchToProps = dispatch => ({
    onMount(categoryId) {
        dispatch(actions.fetchRanking(categoryId));
    },
    onUpdate(categoryId) {
        dispatch(actions.fetchRanking(categoryId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);