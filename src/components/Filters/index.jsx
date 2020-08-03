import React, { Component } from "react";
import Select from "../Select";
import './index.css'

class Filters extends Component {
  render() {
    return (
      <div className="filter_container">
        <input type="text" className="input" placeholder="Find a repository..."/>
        <Select hidden="Type: All"/>
        <Select hidden="Language: All"/>
      </div>
    );
  }
}

export default Filters;
