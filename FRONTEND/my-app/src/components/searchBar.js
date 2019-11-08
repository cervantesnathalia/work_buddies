import React, { Component } from "react";
import { Input, Layout } from "antd";
import { Dropdown } from "semantic-ui-react";
const { Content } = Layout;
const { Search } = Input;

const searchOptions = [
  { key: "Office_Location", text: "Office Location", value: "Office Location" },
  { key: "Name", text: "Name", value: "Name" },
  { key: "TeamName", text: "Team Name", value: "Team Name" },
  { key: "AllUsers", text: "All Users", value: "All Users" },
  { key: "AllTeams", text: "All Teams", value: "Teams" },
  { key: "ID", text: "ID", value: "ID" },
  { key: "BusinessTitle", text: "Business Title", value: "Business Title" }
];

class searchBar extends Component {
  state = {};
  render() {
    return (
      <Content style={{ padding: "0 50px", marginTop: 50 }}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />

        <br />
        <br />
        <Dropdown
          button
          className="icon"
          floating
          labeled
          icon="world"
          options={searchOptions}
          search
          text="Search Type"
        />
      </Content>
    );
  }
}

export default searchBar;
