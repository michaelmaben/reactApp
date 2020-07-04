import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function(){
    return(
      <p> Hello, {this.props.target} </p>
    )
  }
});

var destination = document.querySelector("#container")
ReactDOM.render(
  <div>
    <HelloWorld target='Jeevan'>
  </div>,
  destination
)
