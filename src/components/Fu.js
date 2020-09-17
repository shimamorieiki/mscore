import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

export default class Fu extends React.Component {

    constructor(props) {
        super(props);
        this.bgc = this.setBgc(props.fu)
        this.style = { maxWidth: '500px', maxHeight: '200px', margin: 'auto auto', backgroundColor: this.bgc }
    }

    setBgc = (fu) => {
        if (fu === "2") {
            return "#eeffff"
        } else if (fu === "4") {
            return "#ffffee"
        } else if (fu === "8") {
            return "#effefe"
        } else if (fu === "10") {
            return "#ffeffe"
        } else if (fu === "16") {
            return "#feeffe"
        } else if (fu === "32") {
            return "#effffe"
        } else {
            return "#ffffff"
        }
    }

    render() {
        return (
            <Grid item xs={12} sm={4} md={3}>
                <Card
                    key={this.props.name}
                    style={this.style}
                >
                    <CardContent>
                        <Typograpy type="title">{this.props.name} {this.props.fu}符</Typograpy>
                        <p>{this.props.text}</p>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}
