import React, {Component} from 'react';


class HelloWorld extends Component{
  render(){
    var helloStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      margin: "0"
    }
    return(
      <div style={helloStyle}>
        <h1> Hello World! </h1>
      </div>
    )
  }
}

export default HelloWorld;
