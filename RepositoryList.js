import React from 'react';

function RepositoryList({ repositories }) {
  return (
    <div className="repo-list">
      {repositories.map((repo) => (
        <div key={repo.id} className="repo-item">
          <h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h3>
          <p>{repo.description}</p>
          <p>Stars: {repo.stargazers_count}</p>
        </div>
      ))}
    </div>
  );
}

export default RepositoryList;
