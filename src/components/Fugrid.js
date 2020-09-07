import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel, List } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';

export default class FuGrid extends React.Component {
    render() {
        return (
            <div>
                <GridList cellHeight={160} cols={6}>
                    <List>this is sample</List>
                </GridList>
            </div>
        );
    }
}