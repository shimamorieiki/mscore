import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List, ListItem } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import YakuGrid from './YakuGrid';

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
        const { han, fu, score, error } = this.props;
        // const classes = useStyles();
        return (
            <div ref={this.wrapper}>
                <Typography><h2>得点計算</h2></Typography>
                {/* 役が一つ選択されたときに同時に成立し得ない役は非表示になる */}
                <div>
                    <Typography><h3>成立した役を選んでください</h3></Typography>
                    <YakuGrid />
                    <Typography><h3>符の計算をします</h3></Typography>
                    {/* 役が確定すればある程度符は決まるはず */}
                </div>
                <div>
                    <p>現在の役は</p>
                    <List>
                        <ListItem>平和</ListItem>
                        <ListItem>一盃口</ListItem>
                    </List>
                    <p>合計N翻</p>
                    <p>合計N符</p>
                </div>
            </div >
        );
    }
}

// Score.propTypes = {
//     onMount: PropTypes.func.isRequired,
//     onUpdate: PropTypes.func.isRequired,

//     category: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//     }),

//     ranking: PropTypes.arrayOf(
//         PropTypes.shape({
//             code: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             url: PropTypes.string.isRequired,
//             imageUrl: PropTypes.string.isRequired,
//         })
//     ),

//     error: PropTypes.bool.isRequired
// };


// Score.defaultProps = {
//     categoryId: '1'
// };
