import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import { createStore } from 'redux'
import scoreReducer from '../reducers/Score'
import { addFu } from '../actions/Score';
import { store } from '../index'
import Table, { TableBody, TableRow, TableHead, TableRowColumn, TableHeaderColumn, TableCell } from 'material-ui/Table';
import { Paper } from 'material-ui/Paper'


export default class TotalScore extends React.Component {

    culcBaseScore = () => {
        var han = Number((store.getState()).Score.han);
        var fu = Math.ceil(Number((store.getState()).Score.fu) / 10) * 10;

        if ((store.getState()).Score.naki === true) {
            // console.log("is this run?");
            var result = (store.getState()).Score.yakus.some(function (value) {
                return value === "三色同順";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "一気通貫";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "混全帯幺九";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "純全帯公九";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "混一色";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "清一色";
            });
            if (result) {
                han = han - 1
            }
        }

        if (han >= 600) {
            return 32000 * 6 / 4
        } else if (han >= 500) {
            return 32000 * 5 / 4
        } else if (han >= 400) {
            return 32000 * 4 / 4
        } else if (han >= 300) {
            return 32000 * 3 / 4
        } else if (han >= 200) {
            return 32000 * 2 / 4
        } else if (han >= 13) {
            return 32000 * 1 / 4
        } else if (han >= 11) {
            return 24000 * 1 / 4
        } else if (han >= 8) {
            return 16000 * 1 / 4
        } else if (han >= 6) {
            return 12000 * 1 / 4
        } else if (han >= 5) {
            return 8000 * 1 / 4
        } else if ((han >= 4 && fu >= 40) || (han >= 3 && fu >= 70)) {
            return 8000 * 1 / 4
        } else {
            var result2 = (store.getState()).Score.yakus.some(function (value) {
                return value === "七対子";
            });
            if (result2) {
                fu = 25
            } else {
                result2 = (store.getState()).Score.yakus.some(function (value) {
                    return value === "平和";
                });
                if (result && (store.getState()).Score.yakus.length === 1 && fu === 20(store.getState()).Score.hora === 2) {
                    fu = 20
                } else {
                    fu = 30
                }
            }
            return fu * Math.pow(2, han + 2)
        }
    }
    table() {
        return (
            <Table aria-label="simple table" style={{ backgroundColor: "#ffffff", height: "100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>\</TableCell>
                        <TableCell align="right">ロン</TableCell>
                        <TableCell align="right">ツモ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key="1">
                        <TableCell component="th" scope="row">子</TableCell>
                        <TableCell align="right">
                            {Math.ceil(this.culcBaseScore() * 4 / 100) * 100}点
                        </TableCell>
                        <TableCell align="right">
                            親 {Math.ceil(this.culcBaseScore() * 2 / 100) * 100}点<br />
                            子 {Math.ceil(this.culcBaseScore() * 1 / 100) * 100}点
                        </TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell component="th" scope="row">親</TableCell>
                        <TableCell align="right">
                            {Math.ceil(this.culcBaseScore() * 6 / 100) * 100}点
                        </TableCell>
                        <TableCell align="right">
                            {Math.ceil(this.culcBaseScore() * 2 / 100) * 100}点
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }

    render() {
        return (

            <div>
                <h3>支払い</h3>
                <Table aria-label="simple table" style={{ backgroundColor: "#ffffff", height: "100%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>\</TableCell>
                            <TableCell align="right">ロン</TableCell>
                            <TableCell align="right">ツモ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell component="th" scope="row">子</TableCell>
                            <TableCell align="right">
                                {Math.ceil(this.culcBaseScore() * 4 / 100) * 100}点
                        </TableCell>
                            <TableCell align="right">
                                親 {Math.ceil(this.culcBaseScore() * 2 / 100) * 100}点<br />
                            子 {Math.ceil(this.culcBaseScore() * 1 / 100) * 100}点
                        </TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell component="th" scope="row">親</TableCell>
                            <TableCell align="right">
                                {Math.ceil(this.culcBaseScore() * 6 / 100) * 100}点
                        </TableCell>
                            <TableCell align="right">
                                {Math.ceil(this.culcBaseScore() * 2 / 100) * 100}点
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}