import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Fu from "./Fu"

export default class FuList extends React.Component {

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
                <h2>符計算</h2>
                <div>
                    <Grid container spacing={10}>
                        <Typograpy><h1>基礎点</h1></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Grid item xs={3}>
                            <Card
                                key={""}
                                style={{ maxWidth: '500px', maxHeight: '200px', margin: '32px auto' }}
                            >
                                <CardContent>
                                    <Typograpy type="title">基礎点 20符</Typograpy>
                                    <p></p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h1>アガり方</h1></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Fu name="面前ロン" text="鳴いていない状態でロンアガリ" fu="10" />
                        <Fu name="ツモ" text="自分で引いて上がる" fu="2" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>2 ～8 の中張牌</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Fu name="明刻1" text="鳴いて作った刻子" fu="2" />
                        <Fu name="暗刻1" text="鳴かないで作った刻子" fu="4" />
                        <Fu name="明槓1" text="鳴いて作った槓" fu="8" />
                        <Fu name="暗槓1" text="鳴かないで作った槓" fu="16" />
                    </Grid>
                    <Grid container spacing={10}>
                        <Typograpy><h2>1・9・字牌の幺九牌</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Fu name="明刻" text="鳴いて作った刻子" fu="4" />
                        <Fu name="暗刻" text="鳴かないで作った刻子" fu="8" />
                        <Fu name="明槓" text="鳴いて作った槓" fu="16" />
                        <Fu name="暗槓" text="鳴かないで作った槓" fu="32" />
                    </Grid>

                    <Grid container spacing={10}>
                        <Typograpy><h1>雀頭の牌の種類</h1></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Fu name="数牌" text="各数牌" fu="0" />
                        <Fu name="オタ風牌" text="役がつかない字牌" fu="0" />
                        <Fu name="自風牌" text="現在の局における自分の風の風牌" fu="2" />
                        <Fu name="場風牌" text="現在の局における場と同じ風牌" fu="2" />
                        <Fu name="三元牌" text="白・発・中のいずれか" fu="2" />
                    </Grid>
                    <Grid containerf spacing={10}>
                        <Typograpy><h2>待ち形の種類</h2></Typograpy>
                    </Grid>
                    <Grid container spacing={10}>
                        <Fu name="両面待ち" text="両面待ち" fu="0" />
                        <Fu name="シャンポン待ち" text="シャンポン待ち" fu="2" />
                        <Fu name="ペンチャン待ち" text="ペンチャン待ち" fu="2" />
                        <Fu name="カンチャン待ち" text="カンチャン待ち" fu="2" />
                        <Fu name="単騎待ち" text="単騎待ち" fu="2" />
                        <Fu name="ノベタン" text="ノベタン" fu="2" />
                        <Fu name="多面待ち" text="リャンメン待ち以外に解釈できれば2符" fu="0or2" />
                    </Grid>
                </div>
            </div>
        );
    }
}