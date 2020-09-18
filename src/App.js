import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Score from './containers/Score';
import Nav from './containers/Nav';
import Reboot from 'material-ui/Reboot';
import YakuList from './containers/YakuList';
import FuList from './containers/FuList';
import CulcTable from './containers/CulcTable';
import HeaderAndNav from './containers/HeaderAndNav'

class App extends Component {

  render() {
    return (
      <div className="App" style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }}>
        <Reboot />
        <HeaderAndNav />

        <div style={{ marginTop: 50, padding: 32 }}>
          <Switch>
            <Route exact path="/mscore/" component={Score} />
            <Route exact path="/mscore/yaku" component={YakuList} />
            <Route exact path="/mscore/fu" component={FuList} />
            <Route exact path="/mscore/scoretable" component={CulcTable} />
            <Route component={Score} />
          </Switch>
        </div>
      </div >
    );
  };
}

export default App;