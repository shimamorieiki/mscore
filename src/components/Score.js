import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List, ListItem } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import YakuGrid from './YakuGrid';
import { store } from '../index';
import FuGrid from './FuGrid';
import TotalScore from './TotalScore';
// import { addFu } from '../actions/Score'

export default class Score extends React.Component {

    // componentWillUnmount() {
    //     this.props.onMount(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.categoryId !== nextProps.categoryId) {
    //         this.props.onUpdate(nextProps.categoryId);
    //     }
    // }


    // nowYakus() {
    //     const listItem = (store.getState()).Score.yakus.map((yaku) =>
    //         <ListItem>{yaku}</ListItem>
    //     );
    //     if ((store.getState()).Score.han === 0) {
    //         return <Typography><h3>成立した役を選んでください</h3></Typography>
    //     } else if ((store.getState()).Score.han < 100 && (store.getState()).Score.han >= 1) {
    //         return (
    //             <div>
    //                 <List>{listItem}</List>
    //                 <p>{(store.getState()).Score.han}翻</p>
    //             </div>
    //         )
    //     }
    // }

    // showFuGrid() {
    //     if ((store.getState()).Score.han <= 4 && (store.getState()).Score.han >= 1) {
    //         var result = (store.getState()).Score.yakus.some(function (value) {
    //             return value === "七対子";
    //         });
    //         if (result) {
    //             return (
    //                 <div>
    //                     <p>七対子</p>
    //                     <TotalScore />
    //                 </div>
    //             );
    //         } else {
    //             if ((store.getState()).Score.fu >= 0) {
    //                 return <FuGrid />
    //             }
    //         }
    //     }
    // }
    // showTotalScore() {
    //     if ((store.getState()).Score.fu > 0) {
    //         return (
    //             <div>
    //                 <p>{(store.getState()).Score.fu}符</p>
    //                 <TotalScore />
    //             </div>);
    //     }
    // }


    render() {
        const listItem = (store.getState()).Score.yakus.map((yaku) =>
            <ListItem>{yaku}</ListItem>
        );
        return (
            <div ref={this.wrapper}>
                <Typography><h2>得点計算</h2></Typography>
                <div>

                    {/* 役が一つ選択されたときに同時に成立し得ない役は非表示になる */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <YakuGrid />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <FuGrid />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={4}>
                            {/* <List>{listItem}</List> */}
                            <p>{(store.getState()).Score.han}翻</p>
                            <p>{(store.getState()).Score.fu}符</p>
                            <TotalScore />
                        </Grid>
                    </Grid>
                </div>
            </div >
        );
    }

}