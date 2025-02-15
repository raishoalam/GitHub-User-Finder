import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import RepositoryList from './components/RepositoryList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?sort=stars&per_page=5`);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);
    } catch (err) {
      setError('User not found or API error occurred.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {user && !loading && <UserProfile user={user} />}
      {repositories.length > 0 && !loading && <RepositoryList repositories={repositories} />}
    </div>
  );
}

export default App;
