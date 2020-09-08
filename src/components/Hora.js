import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ButtonGroup from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import FuGridTile from './FuGridTile'

export default class Hora extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0
        this.state = { backgroundColor: "#fff0ff" }
    }

    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <Grid container spacing={10}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <FuGridTile name="面前ロン" fu="10" />
                    <FuGridTile name="鳴いてロン" fu="0" />
                    <FuGridTile name="ツモ" fu="2" />
                    <FuGridTile name="鳴いてツモ" fu="2" />
                </ButtonGroup>
            </Grid>)
    }
}