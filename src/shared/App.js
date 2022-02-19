import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
// import Signup from "../pages/Signup";
import './App.css';
// import PostList from '../pages/PostList';
// import Login from '../pages/Login';
import {Grid} from "../elements";
import Header from "../components/Header";
// import PostWrite from '../pages/PostWrite';
// import PostDetail from '../pages/PostDetail';

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header/>
        <ConnectedRouter history={history}>
          {/* <Route path="/" exact component={PostList}/> */}
          {/* <Route path="/login" exact component={Login}/> */}
          {/* <Route path="/signup" exact component={Signup}/> */}
          {/* <Route path="/write" exact component={PostWrite}/> */}
          {/* <Route path="/post/:id" exact component={Detail}/> */}
          {/* <Route path="/noti" exact component={Notification}/> */}
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;