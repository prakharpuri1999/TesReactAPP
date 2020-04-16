import React, { Component } from "react";
import axios from "axios";
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
  },

  {
    title: "html_url",
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
  componentDidMount() {
    axios
      .get("https://api.github.com/users/vikasprashar99/repos")
      .then((res) => {
        console.log(res.data[0].id);
        console.log(res.data[0].html_url);
        this.githubDataArray = res.data;

        const results = this.githubDataArray.map((row) => ({
          key: row.id,
          html_url: row.html_url,
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
        <h1>gitHub Repos</h1>
        <Table columns={columns} dataSource={this.state.gitHubData} />
      </div>
    );
  }
}
export default gitHub;
