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
        var han = Number((store.getState()).Score.han)
        var fu = Number((store.getState()).Score.fu)

        if ((store.getState()).Score.naki === true) {
            // console.log("is this run?");
            var result = (store.getState()).Score.yakus.some(function (value) {
                return value === "三色同順";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "一気通貫";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "混全帯幺九";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "純全帯公九";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "混一色";
            });
            if (result) {
                han = han - 1
            }
            result = (store.getState()).Score.yakus.some(function (value) {
                return value === "清一色";
            });
            if (result) {
                han = han - 1
            }

            // if ("三色同順" in yakus) {
            //     han = han - 1
            // }
            // if ("一気通貫" in yakus) {
            //     han = han - 1
            // }

            // if ("混全帯幺九" in yakus) {
            //     han = han - 1
            // }

            // if ("純全帯公九" in yakus) {
            //     han = han - 1
            // }
            // if ("混一色" in yakus) {
            //     han = han - 1
            // }
            // if ("清一色" in yakus) {
            //     han = han - 1
            // }
        }
        console.log(han);

        if (han >= 600) {
            return "六倍役満"
        } else if (han >= 500) {
            return "五倍役満"
        } else if (han >= 400) {
            return "四倍役満"
        } else if (han >= 300) {
            return "三倍役満"
        } else if (han >= 200) {
            return "ダブル役満"
        } else if (han >= 100) {
            return "役満"
        } else if (han >= 13) {
            return "数え役満 "
        } else if (han >= 11) {
            return "三倍満"
        } else if (han >= 8) {
            return "倍満"
        } else if (han >= 6) {
            return "跳満"
        } else if (han >= 5) {
            return "満貫"
        } else if (han >= 4) {
            if (fu >= 40) {
                return "満貫"
            } else {
                return (han + "翻/" + fu + "符")
            }
        } else if (han >= 3) {
            if (fu >= 70) {
                return "満貫"
            } else {
                return (han + "翻/" + fu + "符")
            }
        } else if (han >= 1) {
            return (han + "翻/" + fu + "符")
        } else if (han === 0) {
            return "成立した役を選んでください"
        }
    }





    render() {
        const listItem = (store.getState()).Score.yakus.map((yaku) =>
            <ListItem>{yaku}</ListItem>
        );
        // if () {
        //     store.dispatch(addHan(1))
        // }
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
                            {(() => {
                                if (Number((store.getState()).Score.han) >= 1) {
                                    return <TotalScore />
                                }
                            })()}
                        </Grid>
                    </Grid>
                </div>
            </div >
        );
    }

}