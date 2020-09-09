import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { addHan, addYakus, removeYakus } from '../actions/Score';
import { store } from '../index'

export default class YakuGridTile extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0
        this.state = { bgc: this.setbgc(Number(this.props.num)), color: this.color(Number(this.props.num)) }
    }

    componentDidUpdate() {
        if (this.props.disable && this.state.color === "#000000") {
            this.setState({ color: this.color(Number(this.props.num)) })
        }
    }

    setbgc(num) {
        if (this.props.disable) {
            return "#eeeeee"
        } else {
            if (num === 1) {
                return "#eeeeee"
            } else if (num === 2) {
                return "#dddddd"
            } else if (num === 3) {
                return "#cccccc"
            } else if (num === 4) {
                return "#bbbbbb"
            } else if (num === 6) {
                return "#aaaaaa"
            } else if (num === 100) {
                return "#999999"
            } else {
                return "#8f8f8f"
            }
        }
    }

    setSelectedbgc(num) {
        if (num === 1) {
            return "#00b5de"
        } else if (num === 2) {
            return "#ec6c1f"
        } else if (num === 3) {
            return "#73a82d"
        } else if (num === 4) {
            return "#d01026"
        } else if (num === 6) {
            return "#2a6d39"
        } else if (num === 100) {
            return "#843a8e"
        } else {
            return "#b0941e"
        }
    }

    color() {
        if (this.props.disable) {
            return "#999999"
        } else {
            return "#000000"
        }
    }

    selected = () => {
        this.counter = this.counter + 1
        this.setState({ bgc: this.setSelectedbgc(Number(this.props.num)), color: "#ffffff" });
        store.dispatch(addYakus(this.props.name))
        store.dispatch(addHan(this.props.num))
    }

    unselected = () => {
        this.counter = this.counter + 1
        this.setState({ bgc: this.setbgc(Number(this.props.num)), color: this.color(Number(this.props.num)) });
        store.dispatch(removeYakus(this.props.name))
        store.dispatch(addHan(-this.props.num))
    }

    render() {
        return (
            <div>
                <Button style={{ height: '99%', width: "99%", backgroundColor: this.state.bgc, color: this.state.color }} disabled={this.props.disable} centerRipple="True"
                    onClick={(() => {
                        if (this.counter % 2 === 0) {
                            return this.selected;
                        } else {
                            return this.unselected;
                        }
                    })()}>{this.props.name}
                </Button>
            </div >

        );
    }
}