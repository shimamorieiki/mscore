//Reducer は現在の state と Action から、新しい state を生成します。
//Reducer は新しい state を生成してください。　前の state を変更してはいけません。
const initialState = {
    han: undefined,
    fu: undefined,
    score: undefined,
    error: false
};

//Action はすべての Reducer に送られるため、関係のない Action の場合は現在の state を返してください。
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HAN':
            return {
                ...state,
                han: state.han + action.payload
            };
        case 'ADD_FU':
            return {
                ...state,
                fu: state.fu + action.payload
            };
        default:
            return state;
    }
}