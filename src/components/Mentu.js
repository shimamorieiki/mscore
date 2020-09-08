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
            <Grid container spacing={10}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <MentuGridTile name="順子" fu="0" />
                    <MentuGridTile name="明刻1" fu="2" />
                    <MentuGridTile name="暗刻1" fu="4" />
                    <MentuGridTile name="明槓1" fu="8" />
                    <MentuGridTile name="暗槓1" fu="16" />
                    <MentuGridTile name="明刻" fu="4" />
                    <MentuGridTile name="暗刻" fu="8" />
                    <MentuGridTile name="明槓" fu="16" />
                    <MentuGridTile name="暗槓" fu="32" />
                </ButtonGroup>

            </Grid>
        )
    }
}
