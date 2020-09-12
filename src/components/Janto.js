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
import { store } from '../index'
import { jantoFu } from '../actions/Score'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DoneIcon from '@material-ui/icons/Done';
import PanToolIcon from '@material-ui/icons/PanTool';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import CropDinIcon from '@material-ui/icons/CropDin';
import LayersIcon from '@material-ui/icons/Layers';


export default class Janto extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 }
        // this.state = { num: false, ota: false, jifu: false, bafu: false, san: false, value: 0 }
    }

    // Num = () => {
    //     this.setState({ num: true, ota: false, jifu: false, bafu: false, san: false });
    //     store.dispatch(jantoFu(0))

    // }
    // Ota = () => {
    //     this.setState({ num: false, ota: true, jifu: false, bafu: false, san: false });
    //     store.dispatch(jantoFu(0))
    // }
    // Jifu = () => {
    //     this.setState({ num: false, ota: false, jifu: true, bafu: false, san: false });
    //     store.dispatch(jantoFu(2))
    // }
    // Bafu = () => {
    //     this.setState({ num: false, ota: false, jifu: false, bafu: true, san: false });
    //     store.dispatch(jantoFu(2))
    // }
    // San = () => {
    //     this.setState({ num: false, ota: false, jifu: false, bafu: false, san: true });
    //     store.dispatch(jantoFu(2))
    //     console.log(store.getState().Score);
    // }

    bgc(bool) {
        if (bool) {
            return "#ffff0f"
        } else {
            return "#eeffff"
        }
    }

    change = (newValue) => {
        if (newValue === 0) {
            store.dispatch(jantoFu(0))
            this.setState({ value: newValue });
        } else if (newValue === 1) {
            store.dispatch(jantoFu(0))
            this.setState({ value: newValue });
        } else if (newValue === 2) {
            store.dispatch(jantoFu(2))
            this.setState({ value: newValue });
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
                <BottomNavigationAction label="数牌" icon={<LooksOneIcon />} />
                <BottomNavigationAction label="オタ風牌" icon={<CropDinIcon />} color="primary" />
                <BottomNavigationAction label="役牌" icon={<LayersIcon />} />
            </BottomNavigation>
            // <Grid container spacing={10} style={{ margin: "2%" }}>
            //     <JantoGridTile name="数牌" isSelect={this.state.num} selected={() => { this.Num(); }} bgc={this.bgc(this.state.num)} />
            //     <JantoGridTile name="オタ風牌" isSelect={this.state.ota} selected={() => { this.Ota(); }} bgc={this.bgc(this.state.ota)} />
            //     <JantoGridTile name="自風牌" isSelect={this.state.jifu} selected={() => { this.Jifu(); }} bgc={this.bgc(this.state.jifu)} />
            //     <JantoGridTile name="場風牌" isSelect={this.state.bafu} selected={() => { this.Bafu(); }} bgc={this.bgc(this.state.bafu)} />
            //     <JantoGridTile name="三元牌" isSelect={this.state.san} selected={() => { this.San(); }} bgc={this.bgc(this.state.san)} />
            // </Grid>
        )
    }
}
