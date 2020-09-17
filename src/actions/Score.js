// {
//     type: "アクションの種類を一意に識別できる文字列またはシンボル",
//         payload: "アクションの実行に必要な任意のデータ",
// }

export const addHan = (han) => ({
    type: 'ADD_HAN',
    payload: { han },
});

export const addFu = (fu) => ({
    type: 'ADD_FU',
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

export const jantoFu = (janto) => ({
    type: 'SELECT_JANTO',
    payload: { janto },
});

export const matiFu = (mati) => ({
    type: 'SELECT_MATI',
    payload: { mati },
});

export const horaFu = (hora) => ({
    type: 'SELECT_HORA',
    payload: { hora },
});

export const mentuFu = (mentu1, mentu2, mentu3, mentu4) => ({
    type: 'SELECT_MENTU',
    payload: { mentu1, mentu2, mentu3, mentu4 },
});

export const nakiTrue = (naki) => ({
    type: 'TRUE_NAKI',
    payload: { naki },
});

export const nakiFalse = (naki) => ({
    type: 'FALSE_NAKI',
    payload: { naki },
});