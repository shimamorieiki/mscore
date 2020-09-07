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
import { addHan, addYakus, removeYakus } from '../actions/Score';
import { store } from '../index'

export default class YakuGridTile extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0
        this.style = { height: '100%', width: "100%", backgroundColor: "#fff0ff", }
    }

    selected = () => {
        this.counter = this.counter + 1
        this.style = { height: '100%', width: "100%", backgroundColor: "#ff77ff" }
        store.dispatch(addYakus(this.props.name))
        store.dispatch(addHan(this.props.num))
    }

    unselected = () => {
        this.counter = this.counter + 1
        this.style = { height: '100%', width: "100%", backgroundColor: "#fff0ff" }
        store.dispatch(removeYakus(this.props.name))
        store.dispatch(addHan(-this.props.num))
    }

    render() {
        return (
            <div>
                <GridListTile key={this.props.name} cols="" style={{ color: '#001100', backgroundColor: "ffeeff" }}>
                    <Button style={this.style} centerRipple="True"
                        onClick={(() => {
                            if (this.counter % 2 === 0) {
                                return this.selected;
                            } else {
                                return this.unselected;
                            }
                        })()}>{this.props.name}</Button>
                </GridListTile>
            </div>);
    }
}