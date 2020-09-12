import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Nav from '../containers/Nav';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export default class HeaderAndNav extends React.Component {

    constructor() {
        super();
        this.state = { open: false }
        console.log(this.state.open);
    }

    Open() {
        if (!this.state.open) {
            return this.setState({ open: true })
        }

    };

    Close() {
        if (this.state.open) {
            this.setState({ open: false })
        }

    };

    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton style={{ color: "#ffffff" }} OnClick={() => console.log(this.state.open)}>
                            <MenuIcon />
                        </IconButton>

                        <Typography type="title" color="inherit">
                            麻雀得点計算
                        </Typography>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    anchor="left"
                    open={this.state.open}
                // onClose={this.toggleDrawer(false)}
                // onOpen={this.toggleDrawer(true)}
                >
                    <Nav
                    // onClick={this.Close()}
                    // onKeyDown={this.toggleDrawer(false)}
                    />
                </SwipeableDrawer>
            </div >
        )
    }
}