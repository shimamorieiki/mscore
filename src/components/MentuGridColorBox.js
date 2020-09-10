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

export default class MentuGridColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { box1: 0, box2: 0, box3: 0, box4: 0, count: this.props.count }
    }

    add = () => {
        this.setState({ count: Number(this.state.count) + 1 })
    }

    setbgc = (num) => {
        if (num % 5 > this.state.count % 5) {
            return "#ffffff"
        } else {
            return "#000000"
        }
    }



    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <Grid container>
                <Grid item xs={6} style={{ width: "100%" }}>
                    <MentuGridTile name={this.props.name} fu={this.props.fu} count={this.state.count} addcount={() => { this.add(); }} />
                </Grid>
                <Grid item xs={6} style={{ width: "100%", marginTop: "2.5%", height: "60%" }}>
                    <Grid container style={{ width: "100%", height: "60%" }}>
                        <Grid item xs={3} style={{ width: "90%", height: "90%", backgroundColor: this.setbgc(1), textAlign: "center" }}>1</Grid>
                        <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: this.setbgc(2), textAlign: "center" }}>2</Grid>
                        <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: this.setbgc(3) }}>3</Grid>
                        <Grid item xs={3} style={{ width: "100%", height: "100%", backgroundColor: this.setbgc(4) }}>4</Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
