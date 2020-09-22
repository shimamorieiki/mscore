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


export default class CulcTableRow extends React.Component {

    score = (han) => {
        var fu = Number(this.props.fu);
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
            return fu * Math.pow(2, han + 2)
        }
    }
    render() {
        return (
            <TableRow key={this.props.fu + this.props.role}>
                <TableCell component="th" scope="row" style={{ backgroundColor: "#eeeeee", color: "#000000" }}>{this.props.fu}符</TableCell>

                {(() => {
                    const han = [1, 2, 3, 4];
                    const listItems = han.map((number) => {
                        if (((number === 3 && Number(this.props.fu) >= 70)) || (number === 4 && Number(this.props.fu) >= 40)) {
                            return (
                                < TableCell align="center" style={{ backgroundColor: "#ffffff", width: "20%" }}>
                                    {(() => {
                                        if (this.props.role === "child") {
                                            return <span>満</span>
                                        } else {
                                            return <span>満貫</span>
                                        }
                                    })()}
                                </TableCell>
                            );
                        } else if (Number(this.props.fu) <= 25 && number === 1) {
                            return (
                                < TableCell align="center" style={{ backgroundColor: "#ffffff", width: "20%" }}>
                                    {(() => {
                                        if (this.props.role === "child") {
                                            return <span>-<br />-</span>
                                        } else {
                                            return <span>-<br />-</span>
                                        }
                                    })()}
                                </TableCell>
                            );
                        } else {
                            return (
                                < TableCell align="center" style={{ backgroundColor: "#ffffff", width: "20%" }}>
                                    {(() => {
                                        if (this.props.role === "child") {
                                            return (
                                                <span>
                                                    {Math.ceil(this.score(number) * 4 / 100) * 100} <br />
                                                    ({Math.ceil(this.score(number) * 2 / 100) * 100}/{Math.ceil(this.score(number) / 100) * 100})
                                                </span>
                                            );
                                        } else {
                                            return (
                                                <span>{Math.ceil(this.score(number) * 6 / 100) * 100} <br />({Math.ceil(this.score(number) * 2 / 100) * 100})</span>
                                            );
                                        }
                                    })()}
                                </TableCell>
                            );
                        }
                    })
                    return listItems;
                })()}
            </TableRow >
        );
    }
}