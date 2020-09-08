import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ButtonGroup from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import FuGridTile from './FuGridTile'
import Hora from './Hora'
import { store } from '../index';
// import { addFu } from '../actions/Score'
import Mentu from './Mentu'

export default class FuGrid extends React.Component {
    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <div>
                {(() => {
                    var result = (store.getState()).Score.yakus.some(function (value) {
                        return value === "門前清自摸和" || value === "海底撈月" || value === "嶺上開花"
                    });
                    if (!result) {
                        return (
                            <div>
                                <Typograpy type="headline">アガり方</Typograpy>
                                <Hora />
                            </div>
                        )
                    }
                })()}

                {(() => {
                    var result = (store.getState()).Score.yakus.some(function (value) {
                        return value === "二盃口";
                    });
                    if (!result) {
                        return (
                            <div>
                                <Typograpy type="headline">面子の種類</Typograpy>
                                <Mentu />
                            </div>
                        )
                    }
                })()}
                {/* <Grid container spacing={10}>
                    <Typograpy><h2>1・9・字牌の幺九牌</h2></Typograpy>
                </Grid> */}
                {/* <Grid container spacing={10}>
                    <FuGridTile name="明刻" text="鳴いて作った刻子" fu="4" />
                    <FuGridTile name="暗刻" text="鳴かないで作った刻子" fu="8" />
                    <FuGridTile name="明槓" text="鳴いて作った槓" fu="16" />
                    <FuGridTile name="暗槓" text="鳴かないで作った槓" fu="32" />
                </Grid> */}

                <Typograpy type="headline">雀頭の牌の種類</Typograpy>
                <Grid container spacing={10}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <FuGridTile name="数牌" text="各数牌" fu="0" />
                        <FuGridTile name="オタ風牌" text="役がつかない字牌" fu="0" />
                        <FuGridTile name="自風牌" text="現在の局における自分の風の風牌" fu="2" />
                        <FuGridTile name="場風牌" text="現在の局における場と同じ風牌" fu="2" />
                        <FuGridTile name="三元牌" text="白・発・中のいずれか" fu="2" />
                    </ButtonGroup>
                </Grid>
                <Typograpy type="headline">待ち形の種類</Typograpy>
                <Grid container spacing={10}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <FuGridTile name="両面待ち" text="両面待ち" fu="0" />
                        <FuGridTile name="シャンポン待ち" text="シャンポン待ち" fu="2" />
                        <FuGridTile name="ペンチャン待ち" text="ペンチャン待ち" fu="2" />
                        <FuGridTile name="カンチャン待ち" text="カンチャン待ち" fu="2" />
                        <FuGridTile name="単騎待ち" text="単騎待ち" fu="2" />
                        <FuGridTile name="ノベタン" text="ノベタン" fu="2" />
                        <FuGridTile name="多面待ち" text="リャンメン待ち以外に解釈できれば2符" fu="0or2" />
                    </ButtonGroup>
                </Grid>
            </div>
        );
    }
}