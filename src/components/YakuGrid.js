import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import YakuGridTile from './YakuGridTile';
import { store } from '../index'

export default class YakuGrid extends React.Component {
    ippatu() {
        if (((store.getState()).Score.yakus).length !== 0) {
            var result = (store.getState()).Score.yakus.some(function (value) {
                return value === "リーチ";
            });
            if (result) {
                var disable = false
            } else {
                disable = true
            }
        } else {
            disable = true
        }
        return <YakuGridTile name="一発" num="1" disable={disable} />
    }

    // yakuhai() {
    //     if (((store.getState()).Score.yakus).length !== 0) {
    //         var result = (store.getState()).Score.yakus.some(function (value) {
    //             return value === "役牌";
    //         });
    //         if (result) {
    //             return (
    //                 <div>
    //                     <YakuGridTile name="白" num="1" />
    //                     <YakuGridTile name="発" num="1" />
    //                     <YakuGridTile name="中" num="1" />
    //                     <YakuGridTile name="自風牌" num="1" />
    //                     <YakuGridTile name="場風牌" num="1" />
    //                 </div>
    //             )
    //         } else {
    //             return <div></div>
    //         }

    //     } else {
    //         return <div></div>
    //     }
    // }

    render() {
        return (
            <div style={{ height: '100%', width: "100%", backgroundColor: "#ffffff" }}>
                <Grid container spacing={0} style={{ width: "100%", height: '99%' }}>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="リーチ" num="1" /></Grid>
                    {/* <Grid item xs={4} style={{ marginTop: "1px" }}>{this.ippatu()}</Grid> */}
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="一発" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="門前清自摸和" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="平和" num='1' /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="白" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="発" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="中" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="自風牌" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="場風牌" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="断么九" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="一盃口" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="海底撈月" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="河底撈魚" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="嶺上開花" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="槍槓" num="1" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="ダブル立直" num="2" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="三色同順" num="2" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="三色同刻" num="2" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="三暗刻" num="2" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="一気通貫" num="2" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }}><YakuGridTile name="七対子" num="2" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="対々和" num="2" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="混全帯幺九" num="2" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="三槓子" num="2" /></Grid>

                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="二盃口" num="3" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="純全帯公九" num="3" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="混一色" num="3" /></Grid>

                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="小三元" num="4" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="混老頭" num="4" /></Grid>

                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="清一色" num="6" /></Grid>

                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="四暗刻" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="大三元" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="国士無双" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="緑一色" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="字一色" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="清老頭" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="四槓子" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="小四喜" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="九蓮宝燈" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="地和" num="100" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="天和" num="100" /></Grid>

                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="四暗刻単騎" num="200" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="国士13面待ち" num="200" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="純正九蓮宝燈" num="200" /></Grid>
                    <Grid item xs={4} style={{ marginTop: "1px" }} > <YakuGridTile name="大四喜" num="200" /></Grid>
                </Grid>
            </div>
        );
    }
}