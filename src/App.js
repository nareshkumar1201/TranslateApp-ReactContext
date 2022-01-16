import React, { Component } from "react";
import UserCreate from "./Components/UserCreate";

class App extends Component {
  state = { language: "English" };

  onLanguageChange = (lang) => {
    this.setState({ language: lang });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a Country :
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("English")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("Dutch")}
          />
        </div>
        <div>
          <UserCreate />
        </div>
      </div>
    );
  }
}

export default App;
