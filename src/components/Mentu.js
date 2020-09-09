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

export default class Mentu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { naki: undefined, isSelectRon: false, isSelectTumo: false, bgcRon: "#eeffff", bgcTumo: "#eeffff" }
        console.log(this.state);
    }

    RonIsSelected = () => {
        this.setState({ isSelectRon: true, isSelectTumo: false, bgcRon: "#ffff0f", bgcTumo: "#eeffff" });
    }

    TumoIsSelected = () => {
        this.setState({ isSelectRon: false, isSelectTumo: true, bgcRon: "#eeffff", bgcTumo: "#ffff0f" });
    }


    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <div style={{ margin: "2%" }}>
                <Grid container style={{ width: "100%", height: "100%" }}>
                    <Grid item xs={3} style={{ width: "100%", height: "100%" }}><MentuGridTile name="順子" fu="0" /></Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4} style={{ backgroundColor: "#cccccc", textAlign: "center" }}><span>2~8</span></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4} style={{ backgroundColor: "#cccccc", textAlign: "center" }}><span>1.9.字</span></Grid>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={3} style={{ width: "100%", height: "100%" }}>
                        <MentuGridTile name="明刻1" fu="2" />
                    </Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%" }}>
                        <MentuGridTile name="明刻2" fu="4" />
                    </Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={3} ><MentuGridTile name="暗刻1" fu="8" /></Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} ><MentuGridTile name="暗刻2" fu="16" /></Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} ><MentuGridTile name="明槓1" fu="4" /></Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} ><MentuGridTile name="明槓2" fu="8" /></Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} ><MentuGridTile name="暗槓1" fu="16" /></Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} ><MentuGridTile name="暗槓2" fu="32" /></Grid>
                    <Grid item xs={3} style={{ width: "100%", height: "100%", marginTop: "1%" }}>
                        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#fa43a0" }}>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>1</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>2</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>3</Grid>
                            <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: "#00ffaa" }}>4</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        )
    }
}
