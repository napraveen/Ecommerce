import React from 'react';
import isAuth from './IsAuth';
import { useEffect, useState } from 'react';
const GetUserDetails = () => {
  const { authenticated, username } = isAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const GetUserDetails = async () => {
      console.log(username);
      const response = await fetch(
        `http://localhost:4000/api/user/${username}`
      );

      const user = await response.json();
      console.log(user);

      setUserDetails(user);
    };

    GetUserDetails();
  }, [username]);
  return { userDetails };
};

export default GetUserDetails;
