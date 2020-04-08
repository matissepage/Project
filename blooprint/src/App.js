import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import MyCalendar from "./components/Calendar/Calendar"
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
  
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/Calendar">
              <MyCalendar />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;