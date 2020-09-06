import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Checkbox, FormControlLabel } from 'material-ui';
import { Switch, GridListTile, GridList, Typography } from 'material-ui';
import YakuGridTile from './YakuGridTile';

export default class YakuGrid extends React.Component {
    render() {
        return (
            <div>
                <GridList cellHeight={160} cols={6}>
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                    <YakuGridTile name="平和" />
                </GridList>
            </div>
        );
    }
}