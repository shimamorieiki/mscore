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
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DoneIcon from '@material-ui/icons/Done';
import PanToolIcon from '@material-ui/icons/PanTool';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export default class Hora extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menzen: undefined, mron: false, mtumo: false, nron: false, ntumo: false, value: 0 }
        store.dispatch(horaFu(10))
    }

    bgc(bool) {
        if (bool) {
            return "#ffff0f"
        } else {
            return "#eeffff"
        }
    }

    mRon = () => {
        this.setState({ menzen: true, value: 0 });
        store.dispatch(horaFu(10))
    }

    mTumo = () => {
        this.setState({ menzen: true, value: 1 });
        store.dispatch(horaFu(2))
    }

    nRon = () => {
        this.setState({ menzen: false, value: 2 });
        store.dispatch(horaFu(0))
    }

    nTumo = () => {
        this.setState({ menzen: false, value: 3 });
        store.dispatch(horaFu(2))
    }

    change = (newValue) => {
        if (newValue === 0) {
            this.mRon();
        } else if (newValue === 1) {
            this.mTumo();
        } else if (newValue === 2) {
            this.nRon();
        } else if (newValue === 3) {
            this.nTumo();
        }
    }

    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <BottomNavigation
                style={{ backgroundColor: "inherit" }}
                value={this.state.value}
                onChange={(event, newValue) => {
                    this.change(newValue)
                }}

                showLabels
            >
                <BottomNavigationAction label="面前/ロン" icon={<SupervisorAccountIcon />} />
                <BottomNavigationAction label="面前/ツモ" icon={<PanToolIcon />} color="primary" />
                <BottomNavigationAction label="鳴き/ロン" icon={<SupervisorAccountIcon />} />
                <BottomNavigationAction label="鳴き/ツモ" color="secondary" icon={<PanToolIcon />} />
            </BottomNavigation>
        )
    }
}