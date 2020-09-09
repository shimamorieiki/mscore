import { connect } from 'react-redux';
import Score from '../components/Score';
import { addHan, addFu, addYakus, removeYakus, jantoFu, matiFu, horaFu } from '../actions/Score';

const mapStateToProps = (state, ownProps) => ({
    han: state.Score.han,
    fu: state.Score.fu,
    janto: state.Score.janto,
    mati: state.Score.mati,
    hora: state.Score.hora,
    score: state.Score.score,
    error: state.Score.error,
});

const mapDispatchToProps = dispatch => ({
    addHan(han) { dispatch(addHan({ han })); },
    addHu(fu) { dispatch(addFu({ fu })); },
    addYakus(yaku) { dispatch(addYakus({ yaku })); },
    removeYakus(yaku) { dispatch(removeYakus({ yaku })); },
    jantoFu(janto) { dispatch(jantoFu({ janto })); },
    matiFu(mati) { dispatch(matiFu({ mati })); },
    horaFu(hora) { dispatch(horaFu({ hora })); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);