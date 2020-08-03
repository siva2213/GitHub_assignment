import React, { Component } from "react";
import Tab from "../../components/Tabs";
import { cloneDeep } from "lodash";

class TabContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [
        {
          name: "Overview",
          active: false,
          count: "",
        },
        {
          name: "Repositories",
          active: true,
          count: "",
        },
        {
          name: "Projects",
          active: false,
          count: "",
        },
      ],
    };
  }

  static getDerivedStateFromProps(props, state) {
    state.tabs.forEach((tab) => {
      if (tab.name === "Repositories") {
        tab.count = props.repoLength;
      }
    });
    return state;
  }

  onHandle = (selectedTab) => {
    const modifiedTabs = cloneDeep(this.state.tabs);
    modifiedTabs.forEach((tab) => {
      if (tab.name === selectedTab) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    });
    this.setState({
      tabs: modifiedTabs,
    });
  };
  render() {
    return (
      <div>
        <Tab tabs={this.state.tabs} onHandle={this.onHandle} />
      </div>
    );
  }
}

export default TabContainer;
