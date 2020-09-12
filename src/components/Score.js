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

    showHanAndFu = () => {
        const han = Number((store.getState()).Score.han)
        const fu = Number((store.getState()).Score.fu)

        if (han >= 600) {
            return "six"
        } else if (han >= 500) {
            return "six"
        } else if (han >= 400) {
            return "six"
        } else if (han >= 300) {
            return "six"
        } else if (han >= 200) {
            return "six"
        } else if (han >= 100) {
            return "six"
        } else if (han >= 13) {
            return "six"
        } else if (han >= 11) {
            return "six"
        } else if (han >= 8) {
            return "six"
        } else if (han >= 6) {
            return "six"
        } else if (han >= 5) {
            return "six"
        } else if (han >= 4) {
            if (fu >= 40) {
                return "six"
            } else {
                return (han + "+" + fu)
            }
        } else if (han >= 3) {
            if (fu >= 70) {
                return "six"
            } else {
                return (han + "+" + fu)
            }
        } else {
            return (han + "+" + fu)
        }
    }





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
                            <p>{this.showHanAndFu()}</p>
                            {/* <p>{(store.getState()).Score.fu}符</p> */}
                            {(() => {
                                if ((store.getState()).Score.fu >= 20 && (store.getState()).Score.han >= 1) {
                                    return <TotalScore />
                                } else if ((store.getState()).Score.fu < 20) {
                                    return <p>calc fu</p>
                                } else if ((store.getState()).Score.han < 1) {
                                    return <p>calc han</p>
                                } else {
                                    return <p>calc both han and fu</p>
                                }
                            })()}
                        </Grid>
                    </Grid>
                </div>
            </div >
        );
    }

}