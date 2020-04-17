// REQD IMPORTS
import React, { Component } from "react";
import axios from "axios";
import { Table } from "antd";

// DATASTRUCTURE FOR THE UI
const columns = [
  {
    title: "ID Of The Repo",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Name Of The Repo",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Full Name Of The Repo",
    dataIndex: "fname",
    key: "fname",
  },

  {
    title: "URL Of The Repo",
    dataIndex: "html_url",
    key: "html_url",
  },
];
class gitHub extends Component {
  constructor(props) {
    super(props);
    this.state = { gitHubData: [] };
  }

  githubDataArray = [];

  // API FUNCTION
  componentDidMount() {
    axios
      .get("https://api.github.com/users/Rajat012k/repos")
      .then((res) => {
        this.githubDataArray = res.data;

        const results = this.githubDataArray.map((row) => ({
          key: row.id,
          html_url: row.html_url,
          name: row.name,
          fname: row.full_name,
        }));
        this.setState({ gitHubData: results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Table columns={columns} dataSource={this.state.gitHubData} />
      </div>
    );
  }
}
export default gitHub;
