//Reducer は現在の state と Action から、新しい state を生成します。
//Reducer は新しい state を生成してください。　前の state を変更してはいけません。
const initialState = {
    han: 0,
    fu: 0,
    score: 0,
    yakus: [],
    error: false
};
const removeYakuItem = (state, action) => {
    const index = state.yakus.indexOf(action.payload.yaku)
    console.log(index);
    return state.yakus.splice(index, 1)
}

//Action はすべての Reducer に送られるため、関係のない Action の場合は現在の state を返してください。
export default function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_HAN':
            console.log(action.payload)
            return {
                ...state,
                han: Number(state.han) + Number(action.payload.han)
            };
        case 'ADD_FU':
            return {
                ...state,
                fu: Number(state.fu) + Number(action.payload.hu)
            };
        case 'ADD_YAKUS':
            return {
                ...state,
                yakus: state.yakus.concat(action.payload.yaku)
            };
        case 'REMOVE_YAKUS':
            return {
                ...state,
                yakus: removeYakuItem(state, action)
            };
        default:
            return state;
    }
}