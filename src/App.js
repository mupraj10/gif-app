import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import CalendarPage from "./containers/CalendarPage";

class App extends Component {

  render() {
    return (
      <div>
        <CalendarPage />
      </div>
    );
  }
}

export default connect()(App);
