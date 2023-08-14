import React, { useState } from 'react';
import GetUserData from '../../components/utils/GetUserData'; 

function Index() {
  const [userData, setUserData] = useState(null);

  const handleUserDataFetched = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <GetUserData onDataFetched={handleUserDataFetched} />
      {userData ? (
        <div>
          <h1>Welcome, {userData.user.userName}!</h1>
          <p className="text-uppercase">{userData.house.name}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Index;