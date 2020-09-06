import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Yaku from "./Yaku"

export default class YakuList extends React.Component {

    // componentWillUnmount() {
    //     console.log("maybe");
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.categoryId !== nextProps.categoryId) {
    //         this.props.onUpdate(nextProps.categoryId);
    //     }
    // }

    render() {
        return (
            <div ref={this.wrapper}>
                <h2>役一覧</h2>
                <div>
                    <Grid container spacing={10}>
                        <Typograpy><h2>1翻</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="リーチ" text="リーチしたときにつく役" />
                        <Yaku name="一発" text="立直の宣言後一巡目までにアガる" />
                        <Yaku name="門前清自摸和" text="平和なときにつく役" />
                        <Yaku name="役牌" text="平和なときにつく役" />
                        <Yaku name="断么九" text="平和なときにつく役" />
                        <Yaku name="一盃口" text="平和なときにつく役" />
                        <Yaku name="海底撈月" text="平和なときにつく役" />
                        <Yaku name="河底撈魚" text="平和なときにつく役" />
                        <Yaku name="嶺上開花" text="平和なときにつく役" />
                        <Yaku name="槍槓" text="平和なときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>2翻</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="ダブル立直" text="平和なときにつく役" />
                        <Yaku name="三色同順" text="リーチしたときにつく役" />
                        <Yaku name="三色同刻" text="平和なときにつく役" />
                        <Yaku name="三暗刻" text="平和なときにつく役" />
                        <Yaku name="一気通貫" text="平和なときにつく役" />
                        <Yaku name="七対子" text="平和なときにつく役" />
                        <Yaku name="対々和" text="平和なときにつく役" />
                        <Yaku name="混全帯幺九" text="平和なときにつく役" />
                        <Yaku name="三槓子" text="平和なときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>3翻</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="二盃口" text="平和なときにつく役" />
                        <Yaku name="純全帯公九" text="リーチしたときにつく役" />
                        <Yaku name="混一色" text="平和なときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>4翻</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="小三元" text="平和なときにつく役" />
                        <Yaku name="混老頭" text="リーチしたときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>6翻</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="清一色" text="平和なときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>役満</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="四暗刻" text="平和なときにつく役" />
                        <Yaku name="大三元" text="リーチしたときにつく役" />
                        <Yaku name="国士無双" text="平和なときにつく役" />
                        <Yaku name="緑一色" text="平和なときにつく役" />
                        <Yaku name="字一色" text="平和なときにつく役" />
                        <Yaku name="清老頭" text="平和なときにつく役" />
                        <Yaku name="四槓子" text="平和なときにつく役" />
                        <Yaku name="小四喜" text="平和なときにつく役" />
                        <Yaku name="九蓮宝燈" text="平和なときにつく役" />
                        <Yaku name="地和" text="平和なときにつく役" />
                        <Yaku name="天和" text="平和なときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>ダブル役満</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="四暗刻単騎" text="平和なときにつく役" />
                        <Yaku name="国士無双13面待ち" text="リーチしたときにつく役" />
                        <Yaku name="純正九蓮宝燈" text="平和なときにつく役" />
                        <Yaku name="發なし緑一色" text="平和なときにつく役" />
                        <Yaku name="大四喜" text="平和なときにつく役" />
                    </Grid>
                </div>
            </div>
        );
    }
}

