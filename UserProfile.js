import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
    </div>
  );
}

export default UserProfile;
