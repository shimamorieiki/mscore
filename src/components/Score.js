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


    nowYakus() {
        const listItem = (store.getState()).Score.yakus.map((yaku) =>
            <ListItem>{yaku}</ListItem>
        );
        if ((store.getState()).Score.han === 0) {
            return <Typography><h3>成立した役を選んでください</h3></Typography>
        } else if ((store.getState()).Score.han < 100 && (store.getState()).Score.han >= 1) {
            return (
                <div>
                    <List>{listItem}</List>
                    <p>{(store.getState()).Score.han}翻</p>
                </div>
            )
        }
    }

    showScore() {
        if ((store.getState()).Score.han >= 600) {
            return (
                <div>
                    <p>六倍役満</p>
                    <TotalScore />
                </div>);
        } else if ((store.getState()).Score.han >= 500) {
            return (
                <div>
                    <p>五倍役満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 400) {
            return (
                <div>
                    <p>四倍役満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 300) {
            return (
                <div>
                    <p>トリプル役満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 200) {
            return (
                <div>
                    <p>ダブル役満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 100) {
            return (
                <div>
                    <p>役満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 13) {
            return (
                <div>
                    <p>数え役満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 11) {
            return (
                <div>
                    <p>三倍満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 8) {
            return (
                <div>
                    <p>倍満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 6) {
            return (
                <div>
                    <p>跳満</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han === 5) {
            return (
                <div>
                    <p>満貫</p>
                    <TotalScore />
                </div>
            );
        } else if ((store.getState()).Score.han >= 1) {
            var result = (store.getState()).Score.yakus.some(function (value) {
                return value === "七対子";
            });
            if (result) {
                return (
                    <div>
                        <p>七対子</p>
                        <TotalScore />
                    </div>
                );
            } else {
                if ((store.getState()).Score.fu >= 0) {
                    return <FuGrid />
                }
            }
        }
    }
    showFu() {
        if ((store.getState()).Score.fu > 0) {
            return (
                <div>
                    <p>{(store.getState()).Score.fu}符</p>
                    <TotalScore />
                </div>);
        }
    }


    render() {
        return (
            <div ref={this.wrapper}>
                <Typography><h2>得点計算</h2></Typography>
                <div style={{
                    backgroundColor: "#aaff01"
                }}>

                    {/* 役が一つ選択されたときに同時に成立し得ない役は非表示になる */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <YakuGrid />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            {this.nowYakus()}
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            {this.showScore()}
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            {this.showFu()}
                        </Grid>
                    </Grid>
                </div>
            </div >
        );
    }

}