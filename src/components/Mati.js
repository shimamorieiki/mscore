import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ButtonGroup from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import MatiGridTile from './MatiGridTile'

export default class Mati extends React.Component {
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
                    <MatiGridTile name="両面待ち" text="両面待ち" fu="0" />
                    <MatiGridTile name="シャンポン待ち" text="シャンポン待ち" fu="2" />
                    <MatiGridTile name="ペンチャン待ち" text="ペンチャン待ち" fu="2" />
                    <MatiGridTile name="カンチャン待ち" text="カンチャン待ち" fu="2" />
                    <MatiGridTile name="単騎待ち" text="単騎待ち" fu="2" />
                    <MatiGridTile name="ノベタン" text="ノベタン" fu="2" />
                    <MatiGridTile name="多面待ち" text="リャンメン待ち以外に解釈できれば2符" fu="0or2" />
                </ButtonGroup>
            </Grid>
        )
    }
}