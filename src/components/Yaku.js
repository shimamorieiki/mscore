import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

export default class Yaku extends React.Component {

    render() {
        return (
            <Grid item xs={12} sm={4} md={3}>
                <Card
                    key={this.props.name}
                    style={{ maxWidth: '500px', maxHeight: '200px', margin: 'auto' }}
                >
                    <CardContent>
                        <Typograpy type="title">{this.props.name}</Typograpy>
                        <p>{this.props.text}</p>
                    </CardContent>
                </Card>
            </Grid>)
    }
}