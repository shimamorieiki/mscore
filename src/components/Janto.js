import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ButtonGroup from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import JantoGridTile from './JantoGridTile'
import { store } from '../index'
import { jantoFu } from '../actions/Score'

export default class Janto extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: false, ota: false, jifu: false, bafu: false, san: false }
    }

    Num = () => {
        this.setState({ num: true, ota: false, jifu: false, bafu: false, san: false });
        store.dispatch(jantoFu(0))

    }
    Ota = () => {
        this.setState({ num: false, ota: true, jifu: false, bafu: false, san: false });
        store.dispatch(jantoFu(0))
    }
    Jifu = () => {
        this.setState({ num: false, ota: false, jifu: true, bafu: false, san: false });
        store.dispatch(jantoFu(2))
    }
    Bafu = () => {
        this.setState({ num: false, ota: false, jifu: false, bafu: true, san: false });
        store.dispatch(jantoFu(2))
    }
    San = () => {
        this.setState({ num: false, ota: false, jifu: false, bafu: false, san: true });
        store.dispatch(jantoFu(2))
        console.log(store.getState().Score);
    }

    bgc(bool) {
        if (bool) {
            return "#ffff0f"
        } else {
            return "#eeffff"
        }
    }



    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <Grid container spacing={10}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <JantoGridTile name="数牌" isSelect={this.state.num} selected={() => { this.Num(); }} bgc={this.bgc(this.state.num)} />
                    <JantoGridTile name="オタ風牌" isSelect={this.state.ota} selected={() => { this.Ota(); }} bgc={this.bgc(this.state.ota)} />
                    <JantoGridTile name="自風牌" isSelect={this.state.jifu} selected={() => { this.Jifu(); }} bgc={this.bgc(this.state.jifu)} />
                    <JantoGridTile name="場風牌" isSelect={this.state.bafu} selected={() => { this.Bafu(); }} bgc={this.bgc(this.state.bafu)} />
                    <JantoGridTile name="三元牌" isSelect={this.state.san} selected={() => { this.San(); }} bgc={this.bgc(this.state.san)} />
                </ButtonGroup>
            </Grid>
        )
    }
}
