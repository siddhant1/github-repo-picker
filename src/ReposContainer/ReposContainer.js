import React, { Component } from 'react';
import RepoTable from './RepoTable';

class ReposContainer extends Component {
  render() {
    return (
      <div>
        <table border='1' style={{ margin: 30 }}>
          <tr>
            <th>UserName</th>
            <th>Name</th>
            <th>Stars</th>
            <th>Forks</th>
            <th>Language</th>
            {!this.props.isPicked ? <th>Action</th> : null}
          </tr>
          <tbody>
            {this.props.repos.map(e => (
              <RepoTable
                isPicked={this.props.isPicked}
                pickRepo={this.props.pickRepo}
                key={e.name}
                repo={e}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReposContainer;
