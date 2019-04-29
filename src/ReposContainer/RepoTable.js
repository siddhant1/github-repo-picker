import React from 'react';

function RepoTable({ repo, pickRepo, isPicked }) {
  return (
    <tr>
      <td>{repo.owner.login}</td>
      <td>{repo.name}</td>
      <td>{repo.stargazers_count}</td>
      <td>{repo.forks}</td>
      <td>{repo.language}</td>
      {!isPicked ? (
        <div>
          <button onClick={() => pickRepo(repo)}>Pick</button>
        </div>
      ) : null}
    </tr>
  );
}

export default RepoTable;
