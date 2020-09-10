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
        this.state = { bgc: this.setbgc() }
    }

    selected = () => {
        // setStateを使うときは自分が変化させたいものだけ
        // this.stateに入れておけばsetStateを使うことで実現できる
        // this.setState({ backgroundColor: "#ff77ff" });
        this.setState({ bgc: this.setbgc() })
        store.dispatch(addFu(this.props.fu))
        console.log(this.props.fu);
        this.props.addcount();
    }

    unselected = () => {
        this.setState({ bgc: this.setbgc() })
        store.dispatch(addFu(-Number(this.props.fu) * (Number(this.props.count) % 5 + 4)))
        this.props.addcount();
    }

    setbgc = () => {
        if ((Number(this.props.count) + 1) % 5 === 0) {
            return "#fff0ff"
        } else {
            return "#ff77ff"
        }
    }

    render() {
        return (
            <Button style={{ height: '100%', width: "100%", backgroundColor: this.state.bgc }} centerRipple="True"
                onClick={(() => {
                    if (Number(this.props.count) % 5 !== 0) {
                        return this.selected;
                    } else {
                        return this.unselected;
                    }
                })()}>{this.props.name}</Button>
        );
    }
}