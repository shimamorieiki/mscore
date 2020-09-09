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

    bgc(bool) {
        if (bool) {
            return "#ffff0f"
        } else {
            return "#eeffff"
        }
    }




    render() {
        // 面子の種類以外は一つ選ぶと他が選べない
        // 面子の種類は複数選ぶことができるが全体で5つ以上は選べない

        return (
            <Grid container spacing={10}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <MatiGridTile name="両面待ち" isSelect={this.state.ryan} selected={() => { this.Ryan(); }} bgc={this.bgc(this.state.ryan)} />
                    <MatiGridTile name="シャンポン待ち" isSelect={this.state.shan} selected={() => { this.Shan(); }} bgc={this.bgc(this.state.shan)} />
                    <MatiGridTile name="ペンチャン待ち" isSelect={this.state.pen} selected={() => { this.Pen(); }} bgc={this.bgc(this.state.pen)} />
                    <MatiGridTile name="カンチャン待ち" isSelect={this.state.kan} selected={() => { this.Kan(); }} bgc={this.bgc(this.state.kan)} />
                    <MatiGridTile name="単騎待ち" isSelect={this.state.tan} selected={() => { this.Tan(); }} bgc={this.bgc(this.state.tan)} />
                    <MatiGridTile name="ノベタン" isSelect={this.state.nobe} selected={() => { this.Nobe(); }} bgc={this.bgc(this.state.nobe)} />
                    <MatiGridTile name="多面待ち" isSelect={this.state.tamen} selected={() => { this.Tamen(); }} bgc={this.bgc(this.state.tamen)} />
                    {/* 多面待ちの時は両面以外に解釈できるかを追加で出す */}
                </ButtonGroup>
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