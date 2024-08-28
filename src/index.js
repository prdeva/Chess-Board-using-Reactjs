import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/content";
import './components/style.css'








class App extends React.Component {
  render() {
    return (
      <div >
        <Content /> 
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));