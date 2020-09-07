// {
//     type: "アクションの種類を一意に識別できる文字列またはシンボル",
//         payload: "アクションの実行に必要な任意のデータ",
// }

export const addHan = (han) => ({
    type: 'ADD_HAN',
    payload: { han },
});

export const subHan = (han) => ({
    type: 'SUB_HAN',
    payload: { han },
});

export const addFu = (fu) => ({
    type: 'ADD_Fu',
    payload: { fu },
});
export const addYakus = (yaku) => ({
    type: 'ADD_YAKUS',
    payload: { yaku },
});

export const removeYakus = (yaku) => ({
    type: 'REMOVE_YAKUS',
    payload: { yaku },
});