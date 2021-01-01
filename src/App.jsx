import React, { Component } from "react";
import "./App.css";
import TabContainer from "./containers/TabContainer";
import LeftPanel from "./containers/LeftPanel";
import RightPanel from "./containers/Login";
import { connect } from "react-redux";
import Actions from "./actions";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchProfileDetails();
    this.props.fetchRepos();
  }

  render() {
    return (
      <div id="app-container">
        <TabContainer repoLength={this.props.getRepos && this.props.getRepos.length
                  ? this.props.getRepos.length
                  : null}/>
        <div className="panel_container">
          <div className="panel">
            <LeftPanel
              userDetails={
                this.props.getProfileDetails &&
                Object.keys(this.props.getProfileDetails).length
                  ? this.props.getProfileDetails
                  : {}
              }
            />
          </div>
          <div className="panel">
            <RightPanel
              getRepos={
                this.props.getRepos && this.props.getRepos.length
                  ? this.props.getRepos
                  : []
              }
            />
          </div>
        </div>
        <RightPanel
              getRepos={
                this.props.getRepos && this.props.getRepos.length
                  ? this.props.getRepos
                  : []
              }
            />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    getProfileDetails: store.mainReducer.userProfile,
    getRepos: store.mainReducer.repos,
  };
};

const mapActionsToProps = {
  fetchProfileDetails: Actions.fetchProfileDetails,
  fetchRepos: Actions.fetchRepos,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
