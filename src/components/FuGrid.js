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

export default class FuGrid extends React.Component {
    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <div>
                {(() => {
                    var result = (store.getState()).Score.yakus.some(function (value) {
                        return value === "門前清自摸和" || value === "海底撈月" || value === "嶺上開花"
                    });
                    if (!result) {
                        return (
                            <div>
                                <Typograpy type="headline">アガり方</Typograpy>
                                <Hora />
                            </div>
                        )
                    }
                })()}

                {(() => {
                    var result = (store.getState()).Score.yakus.some(function (value) {
                        return value === "二盃口";
                    });
                    if (!result) {
                        return (
                            <div>
                                <Typograpy type="headline">面子の種類</Typograpy>
                                <Mentu />
                            </div>
                        )
                    }
                })()}

                {(() => {
                    var result = (store.getState()).Score.yakus.some(function (value) {
                        return value === "断么九" || value === "純全帯公九";
                    });
                    if (!result) {
                        return (
                            <div>
                                <Typograpy type="headline">雀頭の牌の種類</Typograpy>
                                <Janto />
                            </div>
                        )
                    }
                })()}

                {(() => {
                    var result = (store.getState()).Score.yakus.some(function (value) {
                        return value === "平和";
                    });
                    if (!result) {
                        return (
                            <div>
                                <Typograpy type="headline">待ち形の種類</Typograpy>
                                <Mati />
                            </div>
                        )
                    }
                })()}
            </div>
        );
    }
}