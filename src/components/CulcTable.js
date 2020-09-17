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
import CulcTableRow from './CulcTableRow';
import Tabs, { Tab } from 'material-ui/Tabs'
// import { Box } from 'material-ui/Box';


export default class CulcTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 }
    }

    culcBaseScore = () => {
        var han = Number((store.getState()).Score.han);
        var fu = Math.ceil(Number((store.getState()).Score.fu) / 10) * 10;
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
        } else if (han >= 100) {
            return 32000 * 1 / 4
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
        } else {
            var result = (store.getState()).Score.yakus.some(function (value) {
                return value === "七対子";
            });
            if (result) {
                fu = 25
            }
            return fu * Math.pow(2, han + 2)
        }
    }

    handleChange = (event, newValue) => {
        if (this.state.value !== newValue) {
            this.setState({ value: newValue })
            console.log(event, newValue);
        }
    };

    render() {
        return (
            <div style={{ height: "100%", overflowX: "visible" }}>
                <Tabs value={this.state.value}
                    onChange={this.handleChange}
                    aria-label="simple tabs example"
                    style={{ height: "100%" }}
                    selectionFollowsFocus="true"
                    textColor="primary"
                    indicatorColor="primary"

                >
                    <Tab label="子の点数" id="0" aria-controls="simple-tabpanel-$0" />
                    <Tab label="親の点数" id="1" aria-controls="simple-tabpanel-$1" />
                </Tabs>

                <div
                    role="tabpanel"
                    hidden={this.state.value !== 0}
                    id="simple-tabpanel-$0"
                    aria-labelledby="simple-tab-$0"
                >
                    <Table aria-label="simple table" style={{ height: "100%", width: "100%", overflowX: "visible" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ backgroundColor: "#bbbbbb", color: "#000000" }}>ロン<br />(ツモ 親/子)</TableCell>
                                <TableCell align="center" style={{ backgroundColor: "#cccccc", color: "#000000" }}>1翻</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>2翻</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>3翻</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>4翻</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(() => {
                                const fu = [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110];
                                const ChildListItems = fu.map((number) =>
                                    <CulcTableRow fu={number} role="child" />
                                );
                                return ChildListItems;
                            })()}
                        </TableBody>
                    </Table>

                    <Table aria-label="simple table" style={{ backgroundColor: "#ffffff", height: "100%", maxWidht: "100%", paddingTop: 2 }}>
                        <TableHead>
                            <TableRow>
                                {/* <TableCell style={{ backgroundColor: "#bbbbbb", color: "#000000" }}>ロン<br />(ツモ 親/子)</TableCell> */}
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>満貫<br />(3/4/5翻)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>跳満<br />(6/7翻)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>倍満<br />(8/9/10翻)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>三倍満<br />(11/12翻)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>役満<br />(13翻~)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>N倍役満</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {/* <TableCell style={{ backgroundColor: "#eeeeee", color: "#000000" }}>符に関係なく一定</TableCell> */}
                                <TableCell align="center">8000<br />(4000/2000)</TableCell>
                                <TableCell align="right">12000<br />(6000/3000)</TableCell>
                                <TableCell align="right">16000<br />(8000/4000)</TableCell>
                                <TableCell align="right">24000<br />(12000/6000)</TableCell>
                                <TableCell align="right">32000<br />(16000/8000)</TableCell>
                                <TableCell align="right">32000*N<br />(16000*N/8000*N)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>

                <div
                    role="tabpanel"
                    hidden={this.state.value !== 1}
                    id="simple-tabpanel-$0"
                    aria-labelledby="simple-tab-$1"
                >
                    <Table aria-label="simple table" style={{ backgroundColor: "#ffffff", height: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ backgroundColor: "#bbbbbb", color: "#000000" }}>ロン<br />(ツモ)</TableCell>
                                <TableCell align="center" style={{ backgroundColor: "#cccccc", color: "#000000" }}>1翻</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>2翻</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>3翻</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>4翻</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(() => {
                                const fu = [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110];
                                const listItems = fu.map((number) =>
                                    <CulcTableRow fu={number} role="parent" />
                                );
                                return listItems;
                            })()}
                        </TableBody>
                    </Table>
                    <Table aria-label="simple table" style={{ backgroundColor: "#ffffff", height: "100%", maxWidth: "100%", }}>
                        <TableHead>
                            <TableRow>
                                {/* <TableCell style={{ backgroundColor: "#bbbbbb", color: "#000000" }}>ロン<br />(ツモ)</TableCell> */}
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>満貫<br />(3/4/5翻)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>跳満<br />(6/7翻)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>倍満<br />(8/9/10翻)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>三倍満<br />(11/12翻)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>役満<br />(13翻~)</TableCell>
                                <TableCell align="right" style={{ backgroundColor: "#cccccc", color: "#000000" }}>N倍役満</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {/* <TableCell style={{ backgroundColor: "#eeeeee", color: "#000000" }}>符に関係なく一定</TableCell> */}
                                <TableCell align="center">12000<br />(4000)</TableCell>
                                <TableCell align="right">18000<br />(6000)</TableCell>
                                <TableCell align="right">24000<br />(8000)</TableCell>
                                <TableCell align="right">36000<br />(12000)</TableCell>
                                <TableCell align="right">48000<br />(16000)</TableCell>
                                <TableCell align="right">48000*N<br />(16000*N)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div >
        );
    }
}