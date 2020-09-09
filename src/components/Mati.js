import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ButtonGroup from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import MatiGridTile from './MatiGridTile'
import { store } from '../index'
import { matiFu } from '../actions/Score'

export default class Mati extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ryan: false, shan: false, pen: false, kan: false, tan: false, nobe: false, tamen: false }
    }

    Ryan = () => {
        this.setState({ ryan: true, shan: false, pen: false, kan: false, tan: false, nobe: false, tamen: false });
        store.dispatch(matiFu(0))
    }

    Shan = () => {
        this.setState({ ryan: false, shan: true, pen: false, kan: false, tan: false, nobe: false, tamen: false });
        store.dispatch(matiFu(2))
    }

    Pen = () => {
        this.setState({ ryan: false, shan: false, pen: true, kan: false, tan: false, nobe: false, tamen: false });
        store.dispatch(matiFu(2))
    }

    Kan = () => {
        this.setState({ ryan: false, shan: false, pen: false, kan: true, tan: false, nobe: false, tamen: false });
        store.dispatch(matiFu(2))
    }

    Tan = () => {
        this.setState({ ryan: false, shan: false, pen: false, kan: false, tan: true, nobe: false, tamen: false });
        store.dispatch(matiFu(2))
    }
    Nobe = () => {
        this.setState({ ryan: false, shan: false, pen: false, kan: false, tan: false, nobe: true, tamen: false });
        store.dispatch(matiFu(2))
    }

    Tamen = () => {
        this.setState({ ryan: false, shan: false, pen: false, kan: false, tan: false, nobe: false, tamen: true });
        // store.dispatch(matiFu(2))
    }






    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <Grid container spacing={3} style={{ margin: "2%" }}>
                <Grid item xs={4} lg={4} style={{ width: "100%" }}><MatiGridTile name="両面待ち" isSelect={this.state.ryan} selected={() => { this.Ryan(); }} /></Grid>
                <Grid item xs={4} lg={4} style={{ width: "100%" }}><MatiGridTile name="シャンポン待ち" isSelect={this.state.shan} selected={() => { this.Shan(); }} /></Grid>
                <Grid item xs={4} lg={4} style={{ width: "100%" }}><MatiGridTile name="ペンチャン待ち" isSelect={this.state.pen} selected={() => { this.Pen(); }} /></Grid>
                <Grid item xs={4} lg={4} style={{ width: "100%" }}><MatiGridTile name="カンチャン待ち" isSelect={this.state.kan} selected={() => { this.Kan(); }} /></Grid>
                <Grid item xs={4} lg={4}><MatiGridTile name="単騎待ち" isSelect={this.state.tan} selected={() => { this.Tan(); }} /></Grid>
                <Grid item xs={4} lg={4}><MatiGridTile name="ノベタン" isSelect={this.state.nobe} selected={() => { this.Nobe(); }} /></Grid>
                <Grid item xs={4} lg={4}><MatiGridTile name="多面待ち" isSelect={this.state.tamen} selected={() => { this.Tamen(); }} /></Grid>
                {/* 多面待ちの時は両面以外に解釈できるかを追加で出す */}
                {(() => {
                    if (this.state.tamen) {
                        return (
                            <div>
                                <p>this is tamenmati</p>
                                <p>select next idea</p>
                            </div>
                        )
                    }
                })()}
            </Grid>
        )
    }
}