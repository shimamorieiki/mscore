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

export default class Score extends React.Component {

    // componentWillUnmount() {
    //     this.props.onMount(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.categoryId !== nextProps.categoryId) {
    //         this.props.onUpdate(nextProps.categoryId);
    //     }
    // }


    render() {
        const listItem = (store.getState()).Score.yakus.map((yaku) =>
            <ListItem>{yaku}</ListItem>
        );
        // const { category, ranking, error } = this.props;

        return (
            <div ref={this.wrapper} >
                <Typography><h2>得点計算</h2></Typography>
                {/* 役が一つ選択されたときに同時に成立し得ない役は非表示になる */}
                <div>
                    {(() => {
                        if ((store.getState()).Score.han === 0) {
                            return <Typography><h3>成立した役を選んでください</h3></Typography>
                        } else {
                            return <List>{listItem}</List>
                        }
                    })()}

                    {(() => {
                        if ((store.getState()).Score.han >= 600) {
                            return <p>六倍役満</p>
                        } else if ((store.getState()).Score.han >= 500) {
                            return <p>五倍役満</p>
                        } else if ((store.getState()).Score.han >= 400) {
                            return <p>四倍役満</p>
                        } else if ((store.getState()).Score.han >= 300) {
                            return <p>トリプル役満</p>
                        } else if ((store.getState()).Score.han >= 200) {
                            return <p>ダブル役満</p>
                        } else if ((store.getState()).Score.han >= 100) {
                            return <p>役満</p>
                        } else if ((store.getState()).Score.han >= 13) {
                            return <p>数え役満</p>
                        } else {
                            return <p>{(store.getState()).Score.han}翻</p>
                        }
                    })()}
                    <YakuGrid />
                </div >
                <div>
                    {(() => {
                        if ((store.getState()).Score.fu === 0) {
                            return <Typography><h3>符の計算をしてください</h3></Typography>
                        } else {
                            return <p>合計N符</p>
                        }
                    })()}
                </div>
            </div >
        );
    }

}