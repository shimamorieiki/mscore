//Reducer は現在の state と Action から、新しい state を生成します。
//Reducer は新しい state を生成してください。　前の state を変更してはいけません。
const initialState = {
    han: 0,
    fu: 0,
    base: 20,
    score: 0,
    janto: 0,
    mati: 0,
    hora: 0,
    mentu1: 0,
    mentu2: 0,
    mentu3: 0,
    mentu4: 0,
    mentuSum: 0,
    yakus: [],
    error: false,
    Riichi: false,
    Tumo: false,
    naki: false
};


//Action はすべての Reducer に送られるため、関係のない Action の場合は現在の state を返してください。
export default function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_HAN':
            return {
                ...state,
                han: Number(state.han) + Number(action.payload.han)
            };
        case 'ADD_FU':
            return {
                ...state,
                fu: Number(state.fu) + Number(action.payload.fu)
            };
        case 'ADD_YAKUS':
            return {
                ...state,
                yakus: state.yakus.concat(action.payload.yaku)
            };
        case 'REMOVE_YAKUS':
            return {
                ...state,
                yaskus: state.yakus.splice(state.yakus.indexOf(action.payload.yaku), 1)
            };
        case 'SELECT_JANTO':
            return {
                ...state,
                janto: action.payload.janto,
                fu: Number(action.payload.janto) + Number(state.mati) +
                    Number(state.hora) + Number(state.mentuSum) + Number(state.base)
            };
        case 'SELECT_MATI':
            return {
                ...state,
                mati: action.payload.mati,
                fu: Number(state.janto) + Number(action.payload.mati) +
                    Number(state.hora) + Number(state.mentuSum) + Number(state.base)
            };
        case 'SELECT_HORA':
            return {
                ...state,
                hora: action.payload.hora,
                fu: Number(state.janto) + Number(state.mati) +
                    Number(action.payload.hora) + Number(state.mentuSum) + Number(state.base)
            };
        case 'SELECT_MENTU':
            return {
                ...state,
                mentu1: action.payload.mentu1,
                mentu2: action.payload.mentu2,
                mentu3: action.payload.mentu3,
                mentu4: action.payload.mentu4,
                mentuSum: Number(action.payload.mentu1) + Number(action.payload.mentu2) +
                    Number(action.payload.mentu3) + Number(action.payload.mentu4),
                fu: Number(state.janto) + Number(state.mati) + Number(state.hora) +
                    Number(action.payload.mentu1) + Number(action.payload.mentu2) +
                    Number(action.payload.mentu3) + Number(action.payload.mentu4) + Number(state.base)
            };
        case 'TRUE_NAKI':
            return {
                ...state,
                naki: true
            }
        case 'FALSE_NAKI':
            return {
                ...state,
                naki: false
            }
        default:
            return state;
    }
}