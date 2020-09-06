// import { Action } from "history";
//Reducer は現在の state と Action から、新しい state を生成します。
const getScore = response => {

    const ranking = [];
    const itemLength = response.ResultSet.totalResultsReturned;

    for (let index = 0; index < itemLength; index++) {
        const item = response.ResultSet['0'].Result[index + ''];
        ranking.push({
            code: item.Code,
            name: item.Name,
            url: item.Url,
            imageUrl: item.Image.Medium
        })
    }
    return ranking;
};


//Reducer は新しい state を生成してください。　前の state を変更してはいけません。
const initialState = {
    category: undefined,
    ranking: undefined,
    error: false
};

//Action はすべての Reducer に送られるため、関係のない Action の場合は現在の state を返してください。
export default (state = initialState, action) => {
    switch (action.type) {
        case 'START_REQUEST':
            return {
                category: action.payload.category,
                ranking: undefined,
                error: false
            };
        case 'RECEIVE_DATA':
            return action.payload.error
                ? { ...state, error: true }
                : {
                    ...state,
                    ranking: getScore(action.payload.response)
                };
        default:
            return state;
    }
}