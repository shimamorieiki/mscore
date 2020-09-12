import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ButtonGroup from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import FuGridTile from './FuGridTile'
import Hora from './Hora'
import { store } from '../index';
// import { addFu } from '../actions/Score'
import Mentu from './Mentu'
import Janto from './Janto';
import Mati from './Mati'
import { horaFu, mentuFu, jantoFu, matiFu } from '../actions/Score';

export default class FuGrid extends React.Component {

    // hora() {
    //     var result = (store.getState()).Score.yakus.some(function (value) {
    //         return value === "門前清自摸和" || value === "海底撈月" || value === "嶺上開花"
    //     });
    //     if (!result) {
    //         if (store.getState().Score.hora !== 0) {
    //             store.dispatch(horaFu(0))
    //         }
    //         return (
    //             <div style={{ width: "100%", height: "100%" }}>
    //                 <Typograpy type="headline">アガり方</Typograpy>
    //                 <Hora />
    //             </div>
    //         )
    //     } else {
    //         if (store.getState().Score.hora !== 2) {
    //             store.dispatch(horaFu(2))
    //         }
    //     }
    // }

    // mentu() {
    //     var result = (store.getState()).Score.yakus.some(function (value) {
    //         return value === "二盃口";
    //     });
    //     if (!result) {
    //         return (
    //             <div style={{ width: "100%", height: "100%" }}>
    //                 <Typograpy type="headline">面子の種類</Typograpy>
    //                 <Mentu />
    //             </div>
    //         )
    //     } else {
    //         console.log(store.getState().Score.mentuSum);
    //         if (store.getState().Score.mentuSum !== 0) {
    //             store.dispatch(mentuFu(0, 0, 0, 0))
    //         }
    //     }
    // }
    // janto() {
    //     var result = (store.getState()).Score.yakus.some(function (value) {
    //         return value === "断么九" || value === "純全帯公九";
    //     });
    //     if (!result) {
    //         return (
    //             <div style={{ width: "100%", height: "100%" }}>
    //                 <Typograpy type="headline">雀頭の牌の種類</Typograpy>
    //                 <Janto />
    //             </div>
    //         )
    //     } else {
    //         if (store.getState().Score.janto !== 0) {
    //             store.dispatch(jantoFu(0))
    //         }
    //     }
    // }

    // mati() {
    //     var result = (store.getState()).Score.yakus.some(function (value) {
    //         return value === "平和";
    //     });
    //     if (!result) {
    //         return (
    //             <div style={{ width: "100%", height: "100%" }}>
    //                 <Typograpy type="headline">待ち形の種類</Typograpy>
    //                 <Mati />
    //             </div>
    //         )
    //     } else {
    //         if (store.getState().Score.hora !== 0) {
    //             store.dispatch(matiFu(0))
    //         }
    //     }
    // }

    render() {

        return (
            <div>
                {/* <Typograpy type="headline">アガり方</Typograpy> */}
                <Hora />

                {/* <Typograpy type="headline">面子の種類</Typograpy> */}
                <Mentu />

                {/* <Typograpy type="headline">雀頭の牌の種類</Typograpy> */}
                <Janto />

                {/* <Typograpy type="headline">待ち形の種類</Typograpy> */}
                <Mati />

            </div>
        );
    }
}