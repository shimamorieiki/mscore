import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typograpy from 'material-ui/Typography';
import Button from 'material-ui/Button';

export default class Ranking extends React.Component {

    componentWillUnmount() {
        this.props.onMount(this.props.categoryId);
    }

    // componentWillMount() {
    //     this.setState({
    //         currentColor: this.props.defaultColor,
    //         palette: 'rgb',
    //     });
    // }
    // state = {
    //     currentColor: this.props.defaultColor,
    //     palette: 'rgb',
    // };


    componentWillReceiveProps(nextProps) {
        if (this.props.categoryId !== nextProps.categoryId) {
            this.props.onUpdate(nextProps.categoryId);
        }
    }


    render() {
        console.log("this is this prop");

        console.log(this.props);

        console.log("ここまで");


        const { category, ranking, error } = this.props;

        return (
            <div>
                <h2>{
                    typeof category !== 'undefined'
                        ? `${category.name}のランキング`
                        : ''
                }</h2>

                {(() => {
                    if (error) {
                        return <p>エラーが発生しました。リロードしてください</p>;
                    } else if (typeof ranking === 'undefined') {
                        return <p>読み込み中...</p>;
                    } else {
                        return ranking.map((item, i) => (
                            <Card
                                key={`rankning-item-${item.code}`}
                                style={{ maxWidth: '500px', margin: '32px auto' }}
                            >
                                <CardMedia
                                    image={item.imageUrl}
                                    title={item.name}
                                    style={{ height: '200px' }}
                                />
                                <CardContent>
                                    <Typograpy type="title">
                                        {`${i + 1}位 ${item.name}`}
                                    </Typograpy>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        raised
                                        color="secondary"
                                        fullWidth
                                        href={item.url}>
                                        商品ページへ
                                        </Button>
                                </CardActions>
                            </Card>
                        ));
                    }
                })()}
            </div>
        );
    }
}

Ranking.propTypes = {
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


Ranking.defaultProps = {
    categoryId: '1'
};
