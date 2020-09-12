import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ButtonGroup from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import MentuGridTile from './MentuGridTile'
import MentuGridColorBox from './MentuGridColorBox';
import { store } from '../index';
import { addHan } from '../actions/Score';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default class Mentu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cshun: 0, cmko1: 0, cmko2: 0, cako1: 0, cako2: 0, cmkan1: 0, cmkan2: 0, cakan1: 0, cakan2: 0, dora: 0 }
    }

    addDora() {
        this.setState({ dora: this.state.dora + 1 })
        store.dispatch(addHan(1))
    }

    subDora() {
        if (this.state.dora >= 1) {
            this.setState({ dora: this.state.dora - 1 })
            store.dispatch(addHan(-1))
        }
    }

    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <div style={{ margin: "2%" }}>
                <Grid container style={{ width: "100%", height: "100%", marginTop: "1%", marginBottom: "1%" }}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={6} style={{ maxWidth: "100%", maxHeight: "100%", backgroundColor: "#cccccc" }}><div style={{ textAlign: "center" }} >ドラ{this.state.dora}</div></Grid>
                            <Grid item xs={3} style={{ margin: 0, padding: 0 }}>
                                <IconButton variant="contained" aria-label="add" color="primary" onClick={() => this.addDora()}>
                                    <AddIcon fontSize="medium" />
                                </IconButton>
                            </Grid>
                            <Grid item xs={3} style={{ margin: 0, padding: 0 }} onClick={() => this.subDora()}>
                                <IconButton aria-label="remove" >
                                    <RemoveIcon fontSize="medium" color="primary" variant="outlined" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>

                <Grid container style={{ marginTop: "1%", marginBottom: "1%" }} >
                    <Grid item xs={6}>
                        <MentuGridColorBox name="順子" fu="0" count={this.state.cshun} color="primary" />
                    </Grid>
                </Grid>
                <Grid container style={{ width: "100%", height: "100%", marginTop: "1%", marginBottom: "1%" }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4} style={{ backgroundColor: "#cccccc", textAlign: "center" }}><span>2~8</span></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4} style={{ backgroundColor: "#cccccc", textAlign: "center" }}><span>1.9.字</span></Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid container style={{ width: "100%", height: "100%", marginTop: "1%", marginBottom: "1%" }}>
                    <Grid item xs={6}>
                        <MentuGridColorBox name="明刻" fu="2" count={this.state.cmko1} color="primary" />
                    </Grid>
                    <Grid item xs={6}>
                        <MentuGridColorBox name="明刻" fu="4" count={this.state.cmko2} color="secondary" />
                    </Grid>
                </Grid>

                <Grid container style={{ width: "100%", height: "100%", marginTop: "1%", marginBottom: "1%" }}>
                    <Grid item xs={6}>
                        <MentuGridColorBox name="暗刻" fu="8" count={this.state.cako1} color="primary" />
                    </Grid>
                    <Grid item xs={6}>
                        <MentuGridColorBox name="暗刻" fu="16" count={this.state.cako2} color="secondary" />
                    </Grid>
                </Grid>

                <Grid container style={{ width: "100%", height: "100%", marginTop: "1%", marginBottom: "1%" }}>
                    <Grid item xs={6}>
                        <MentuGridColorBox name="明槓" fu="4" count={this.state.cmkan1} color="primary" />
                    </Grid>
                    <Grid item xs={6}>
                        <MentuGridColorBox name="明槓" fu="8" count={this.state.cmkan2} color="secondary" />
                    </Grid>
                </Grid>

                <Grid container style={{ width: "100%", height: "100%", marginTop: "1%", marginBottom: "1%" }}>
                    <Grid item xs={6}>
                        <MentuGridColorBox name="暗槓" fu="16" count={this.state.cakan1} color="primary" />
                    </Grid>
                    <Grid item xs={6}>
                        <MentuGridColorBox name="暗槓" fu="32" count={this.state.cakan2} color="secondary" />
                    </Grid>
                </Grid>
            </div >
        );
    }
}
