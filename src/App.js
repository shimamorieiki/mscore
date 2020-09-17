// import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import Score from './containers/Score';
// import Nav from './containers/Nav';
// import Reboot from 'material-ui/Reboot';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import YakuList from './containers/YakuList';
// import FuList from './containers/FuList';
// import CulcTable from './containers/CulcTable';
// // import HomeIcon from '@material-ui/icons/Home';
// import HeaderAndNav from './containers/HeaderAndNav'
// // import HeaderAndNav from './components/HeaderAndNav'

// class App extends Component {

//   render() {
//     return (
//       // <div className="App" style={{ paddingLeft: 240 }}>
//       <div className="App">
//         <Reboot />
//         <HeaderAndNav />

//         {/* <AppBar style={{ left: 240 }}>
//           <Toolbar>
//             <IconButton style={{ color: "#ffffff" }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography type="title" color="inherit">
//               麻雀得点計算
//           </Typography>
//           </Toolbar>
//         </AppBar> */}

//         {/* <SwipeableDrawer
//         anchor="left"
//       >
//         <Nav />
//       </SwipeableDrawer> */}
//         {/* <Nav /> */}

//         <div style={{ marginTop: 50, padding: 32 }}>
//           <Switch>
//             <Route path="/" component={Score} />
//             <Route path="/yaku" component={YakuList} />
//             <Route path="/fu" component={FuList} />
//             {/* <Route path="/scoretable" component={CulcTable} /> */}
//           </Switch>
//         </div>
//       </div >
//     );
//   };
// }

// export default App;


import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Score from './containers/Score';
import Nav from './containers/Nav';
import Reboot from 'material-ui/Reboot';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
import YakuList from './containers/YakuList';
import FuList from './containers/FuList';
import CulcTable from './containers/CulcTable';
// import HomeIcon from '@material-ui/icons/Home';
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
import HeaderAndNav from './containers/HeaderAndNav'
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { open: true }
  //   console.log(this.state.open);
  // }

  // Open() {
  //   if (!this.state.open) {
  //     return this.setState({ open: true })
  //   }

  // };

  // Close() {
  //   if (this.state.open) {
  //     this.setState({ open: false })
  //   }

  // };

  render() {
    return (
      <div className="App" style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }}>
        <Reboot />
        <HeaderAndNav />
        {/* <Nav /> */}

        <div style={{ marginTop: 50, padding: 32 }}>
          <Switch>
            <Route exact path="/" component={Score} />
            <Route exact path="/yaku" component={YakuList} />
            <Route exact path="/fu" component={FuList} />
            <Route exact path="/scoretable" component={CulcTable} />
            <Route component={Score} />
          </Switch>
        </div>
      </div >
    );
  };
}

export default App;