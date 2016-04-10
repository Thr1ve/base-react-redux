import React from 'react';

const Users = ({ envMode, loading, users }) => (
  <div>
    <p>
      {`The app is running in ${envMode} mode.`}
    </p>
    <div>
      The users are:
      <ul>
        {
          loading ?
            'loading...' :
            users.map((user, i) => <li key={i}> {user} </li>)
        }
      </ul>
    </div>
  </div>
);

export default Users;
