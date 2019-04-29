import React from 'react';
import ReposContainer from './ReposContainer/ReposContainer';

class AppContainer extends React.Component {
  state = { allrepos: [], pickedRepos: [], name: '', isPicked: false };

  getUserData = async () => {
    const url = `https://api.github.com/users/${this.state.name}/repos`;
    const blob = await fetch(url);
    const data = await blob.json();
    this.setState({
      allrepos: data
    });
  };

  handleNameChange = e => {
    let name = e.target.value;
    this.setState({
      name
    });
  };

  togglePicked = () => {
    this.setState({
      isPicked: !this.state.isPicked
    });
  };

  setPicked = repo => {
    let pickedRepos = [...this.state.pickedRepos, repo];
    let allrepos = this.state.allrepos.filter(e => e.id !== repo.id);
    this.setState({
      pickedRepos,
      allrepos
    });
  };

  render() {
    return (
      <div id='namer'>
        <div id='namer-input'>
          <input
            type='text'
            name='namername'
            placeholder='Type your username'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className='namer-controls'>
          <div onClick={this.getUserData}>
            <span>Search!</span>
          </div>
        </div>
        <div className='namer-controls'>
          <div onClick={this.togglePicked}>
            {!this.state.isPicked ? (
              <span>Show Picked</span>
            ) : (
              <span>show All</span>
            )}
          </div>
        </div>

        <ReposContainer
          repos={
            !this.state.isPicked ? this.state.allrepos : this.state.pickedRepos
          }
          isPicked={this.state.isPicked}
          pickRepo={this.setPicked}
        />
      </div>
    );
  }
}

export default AppContainer;
