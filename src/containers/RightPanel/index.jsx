import React, { Component } from "react";
import Filters from "../../components/Filters";
import RepoDetails from "../../components/RepoDetails";

export class RigthPanel extends Component {
  render() {
    return (
      <div>
        <Filters />
        <RepoDetails repoDetails={this.props.getRepos}/>
      </div>
    );
  }
}

export default RigthPanel;
