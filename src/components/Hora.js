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
import { horaFu, nakiFalse, nakiTrue } from '../actions/Score'
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
        store.dispatch(nakiFalse(false))
    }

    mTumo = () => {
        this.setState({ menzen: true, value: 1 });
        store.dispatch(horaFu(2))
        store.dispatch(nakiFalse(false))
    }

    nRon = () => {
        this.setState({ menzen: false, value: 2 });
        store.dispatch(horaFu(0))
        store.dispatch(nakiTrue(true))
    }

    nTumo = () => {
        this.setState({ menzen: false, value: 3 });
        store.dispatch(horaFu(2))
        store.dispatch(nakiTrue(true))
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
        // ?????????????????????????????????????????????????????????
        // ????????????????????????????????????????????????????????????5????????????????????????

        return (
            <BottomNavigation
                style={{ backgroundColor: "inherit" }}
                value={this.state.value}
                onChange={(event, newValue) => {
                    this.change(newValue)
                }}

                showLabels
            >
                <BottomNavigationAction label="??????/??????" icon={<SupervisorAccountIcon />} />
                <BottomNavigationAction label="??????/??????" icon={<PanToolIcon />} color="primary" />
                <BottomNavigationAction label="??????/??????" icon={<SupervisorAccountIcon />} />
                <BottomNavigationAction label="??????/??????" color="secondary" icon={<PanToolIcon />} />
            </BottomNavigation>
        )
    }
}