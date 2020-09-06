import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { makeStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

// export default function CenteredGrid() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <Paper className={classes.paper}>xs=12</Paper>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Paper className={classes.paper}>xs=6</Paper>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Paper className={classes.paper}>xs=6</Paper>
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Paper className={classes.paper}>xs=3</Paper>
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Paper className={classes.paper}>xs=3</Paper>
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Paper className={classes.paper}>xs=3</Paper>
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Paper className={classes.paper}>xs=3</Paper>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }


export default class Score extends React.Component {

    componentWillUnmount() {
        this.props.onMount(this.props.categoryId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.categoryId !== nextProps.categoryId) {
            this.props.onUpdate(nextProps.categoryId);
        }
    }


    render() {
        const { category, ranking, error } = this.props;
        // const classes = useStyles();
        return (
            <div>
                <h2>得点計算</h2>
                <div>
                    <Grid container spacing={10}>
                        <Grid item xs={3}>
                            <Card
                                key={`pinhu`}
                                style={{ maxWidth: '500px', margin: '32px auto' }}
                            >
                                <CardContent>
                                    <Typograpy type="title">pinhu</Typograpy>
                                    1翻
                                </CardContent>
                                <CardActions>
                                    <Button
                                        raised
                                        color="secondary"
                                        fullWidth>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                key={`pinhu`}
                                style={{ maxWidth: '500px', margin: '32px auto' }}
                            >
                                <CardContent>
                                    <Typograpy type="title">1翻</Typograpy>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        raised
                                        color="secondary"
                                        fullWidth>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                key={`pinhu`}
                                style={{ maxWidth: '500px', margin: '32px auto' }}
                            >
                                <CardContent>
                                    <Typograpy type="title">1翻</Typograpy>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        raised
                                        color="secondary"
                                        fullWidth>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                key={`pinhu`}
                                style={{ maxWidth: '500px', margin: '32px auto' }}
                            >
                                <CardContent>
                                    <Typograpy type="title">1翻</Typograpy>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        raised
                                        color="secondary"
                                        fullWidth>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                key={`pinhu`}
                                style={{ maxWidth: '500px', margin: '32px auto' }}
                            >
                                <CardContent>
                                    <Typograpy type="title">1翻</Typograpy>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        raised
                                        color="secondary"
                                        fullWidth>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}

Score.propTypes = {
    categoryId: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,

    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),

    ranking: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ),

    error: PropTypes.bool.isRequired
};


Score.defaultProps = {
    categoryId: '1'
};
