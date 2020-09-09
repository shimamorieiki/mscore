import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ButtonGroup from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import HoraGridTile from './HoraGridTile'
import { store } from '../index'
import { horaFu } from '../actions/Score'

export default class Hora extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menzen: undefined, ron: false, tumo: false }
    }

    bgc(bool) {
        if (bool) {
            return "#ffff0f"
        } else {
            return "#eeffff"
        }
    }

    Ron = () => {
        this.setState({ menzen: true, ron: true, tumo: false });
        store.dispatch(horaFu(10))
    }

    Tumo = () => {
        this.setState({ ron: false, tumo: true });
        store.dispatch(horaFu(2))
    }


    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <Grid container spacing={10} style={{ margin: "2%" }}>
                <HoraGridTile name="面前ロン" isSelect={this.state.ron} selected={() => { this.Ron(); }} bgc={this.bgc(this.state.ron)} />
                <HoraGridTile name="ツモ" isSelect={this.state.tumo} selected={() => { this.Tumo(); }} bgc={this.bgc(this.state.tumo)} />
            </Grid>
        )
    }
}