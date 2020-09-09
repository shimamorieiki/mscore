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

export default class MatiGridTile extends React.Component {
    bgc(bool) {
        if (bool) {
            return "#ffff0f"
        } else {
            return "#eeffff"
        }
    }

    render() {
        return (
            <Button style={{ height: '100%', width: "100%", marginTop: "0", backgroundColor: this.bgc(this.props.isSelect) }} centerRipple="True"
                onClick={() => { this.props.selected(); }}>
                {this.props.name}
            </Button>
        );
    }
}