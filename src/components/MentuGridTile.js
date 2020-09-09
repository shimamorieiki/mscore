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

export default class MentuGridTile extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0
        this.state = { backgroundColor: "#fff0ff" }
    }

    selected = () => {
        this.counter = this.counter + 1
        // setStateを使うときは自分が変化させたいものだけ
        // this.stateに入れておけばsetStateを使うことで実現できる
        this.setState({ backgroundColor: "#ff77ff" });
        store.dispatch(addFu(this.props.fu))
        console.log(this.props.fu);
    }

    unselected = () => {
        this.counter = this.counter + 1
        this.setState({ backgroundColor: "#fff0ff" });
        store.dispatch(addFu(-this.props.fu))
    }

    render() {
        return (
            <Button style={{ height: '100%', width: "100%", backgroundColor: this.state.backgroundColor }} centerRipple="True"
                onClick={(() => {
                    if (this.counter % 5 !== 4) {
                        return this.selected;
                    } else {
                        return this.unselected;
                    }
                })()}>{this.props.name}</Button>
        );
    }
}