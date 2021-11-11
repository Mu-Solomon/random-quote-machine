import React from "react";
import ReactDOM from "react-dom";
import "d:/DOCUMENTS/PROJECTS/CERT PROJECTS/Random Quote machine/randomQuoteMachine/src/style.css";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Someday is not a day of the week.",
      author: "- Denise Brennan-Nelson - ",
      color: "#631212",
    };
  }
  render() {
    const back = this.state.color;
    return (
      <div id="top-container">
        <div id="container" style={{ backgroundColor: back }}>
          <div id="quote-box">
            <p id="text" style={{ color: back }}>
              <i
                className="fas fa-quote-left"
                id="icon"
                style={{ color: back }}
              ></i>
              {this.state.quote}
            </p>
            <p id="author"> {this.state.author} </p>
            <div id="buttons" style={{ color: back }}>
              <span>
                <i className="fab fa-twitter-square" id="icon-2"></i>
                <i class="fab fa-facebook-square" id="icon-3"></i>
              </span>
              <span>
                <button
                  id="new-quote"
                  onClick="configComp"
                  style={{ backgroundColor: back }}
                >
                  New quote
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
