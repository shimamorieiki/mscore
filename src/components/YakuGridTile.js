import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';

export default class YakuGridTile extends React.Component {
    render() {
        return (
            <div>
                <GridListTile key={this.props.name} cols="" style={{ color: '#001100', backgroundColor: "ffeeff" }}>
                    <Button style={{ height: '100%', width: "100%" }} >{this.props.name}</Button>
                </GridListTile>
            </div>);
    }
}