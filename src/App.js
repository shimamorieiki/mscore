import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Score from './containers/Score';
import Nav from './containers/Nav';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import YakuList from './containers/YakuList';
import FuList from './containers/FuList';
import CulcTable from './containers/CulcTable';

class App extends Component {

  render() {
    return (
      <div className="App" style={{ paddingLeft: 240 }}>
        <Reboot />

        <AppBar style={{ left: 240 }}>
          <Toolbar>
            <Typography type="title" color="inherit">
              麻雀得点計算
            </Typography>
          </Toolbar>
        </AppBar>

        <Nav />
        <div style={{ marginTop: 50, padding: 32 }}>
          <Switch>
            <Route path="/score" component={Score} />
            <Route path="/yaku" component={YakuList} />
            <Route path="/hu" component={FuList} />
            <Route path="/scoretable" component={CulcTable} />
          </Switch>
        </div>
      </div>
    );
  };
}

export default App;
