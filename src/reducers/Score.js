//Reducer は現在の state と Action から、新しい state を生成します。
//Reducer は新しい state を生成してください。　前の state を変更してはいけません。
const initialState = {
    han: 2,
    fu: 2,
    score: 2,
    error: false
};

//Action はすべての Reducer に送られるため、関係のない Action の場合は現在の state を返してください。
export default function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_HAN':
            console.log(action.payload)
            return {
                ...state,
                han: state.han + 2
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