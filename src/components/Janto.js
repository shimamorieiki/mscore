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

export default class Janto extends React.Component {
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
            // <Grid container spacing={10}>
            //     <ButtonGroup color="primary" aria-label="outlined primary button group">
            //         <HoraGridTile name="面前ロン" fu="10" isSelect={this.state.isSelectRon} selected={() => { this.RonIsSelected(); }} bgc={this.state.bgcRon} />
            //         <HoraGridTile name="ツモ" fu="2" isSelect={this.state.isSelectTumo} selected={() => { this.TumoIsSelected(); }} bgc={this.state.bgcTumo} />
            //     </ButtonGroup>
            // </Grid>

            <Grid container spacing={10}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <JantoGridTile name="数牌" text="各数牌" fu="0" />
                    <JantoGridTile name="オタ風牌" text="役がつかない字牌" fu="0" />
                    <JantoGridTile name="自風牌" text="現在の局における自分の風の風牌" fu="2" />
                    <JantoGridTile name="場風牌" text="現在の局における場と同じ風牌" fu="2" />
                    <JantoGridTile name="三元牌" text="白・発・中のいずれか" fu="2" />
                </ButtonGroup>
            </Grid>
        )
    }
}
