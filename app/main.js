import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return <div onClick={() => window.alert(123)}>hello world</div>;
  }
}
