import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/wrapper";

class App extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div>
        <Info />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
