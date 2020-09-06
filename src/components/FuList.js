import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Yaku from "./Yaku"

export default class FuList extends React.Component {

    // componentWillUnmount() {
    //     console.log("maybe");
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.categoryId !== nextProps.categoryId) {
    //         this.props.onUpdate(nextProps.categoryId);
    //     }
    // }
    // 基礎点
    // ２０符。ただし、門前ロンの場合は３０符。
    // 門前加符（メンゼンカフ）＝メンゼンロン アガり
    // これは、 門前（メンゼン） で手牌を揃えて ロン で アガッた 場合に付与される加符点です。
    // これを、門前加符（メンゼンカフ） といいます。10符あります。
    // メンゼンとは、他家（ターチャ） の 捨牌 で ポン、チー、明カン などによる 鳴きをせずに牌山からのツモによって自力で手牌を揃えることです。
    // 従って、鳴き があると 門前加符 は付与されず0符となります。


    //     (1) 基本符（＝基本点）：副底（フーテイ）と言います。
    // (2) アガり方：メンゼンロン or ツモ のいずれか。
    // (3) 面子（メンツ）の種類：順子（シュンツ）／刻子（コーツ）／槓子（カンツ）
    // (4) 雀頭（ジャントウ＝アタマ）の牌の種類：役牌かどうか
    //     (5) 待ち形の種類：ペンチャン・カンチャン・リャンメンなど、、



    render() {
        return (
            <div ref={this.wrapper}>
                <h2>符計算</h2>
                <div>
                    <Grid container spacing={10}>
                        <Typograpy><h2>基礎点</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="リーチ" text="リーチしたときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>アガり方</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="リーチ" text="リーチしたときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>面子の種類</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="リーチ" text="リーチしたときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>雀頭の牌の種類</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="リーチ" text="リーチしたときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                    </Grid>
                    <Grid containerf spacing={10}>
                        <Typograpy><h2>待ち形の種類</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="リーチ" text="リーチしたときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                        <Yaku name="平和" text="平和なときにつく役" />
                    </Grid>
                </div>
            </div>
        );
    }
}