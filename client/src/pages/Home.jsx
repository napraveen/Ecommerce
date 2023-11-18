import { ToastContainer } from 'react-toastify';
import isAuth from '../functions/IsAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import HomeHeader from '../subpages/HomeHeader';
import HomeBody from '../subpages/HomeBody';
import HomeBody2 from '../subpages/HomeBody2';
import GetUserDetails from '../functions/GetUserDetails';
const Home = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const tokenValue = cookies.token;

  useEffect(() => {
    setCookie('myCookie', tokenValue, { path: '/' });
  }, [setCookie, tokenValue]);
  const cookieValue = cookies.myCookie;

  const { authenticated, username } = isAuth();
  console.log(username);
  // const [userDetails, setUserDetails] = useState(null);

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     console.log(username);
  //     const response = await fetch(
  //       `http://localhost:4000/api/user/${username}`
  //     );

  //     const user = await response.json();
  //     console.log(user);

  //     setUserDetails(user);
  //   };

  //   getUserDetails();
  // }, [username]);

  const { userDetails } = GetUserDetails();

  if (!authenticated) {
    navigate('/login');
    return null;
  }

  const logout = () => {
    removeCookie('token');
    navigate('/login');
  };

  return (
    <>
      <div className="home_page">
        {userDetails ? (
          <>
            <HomeHeader />
            <HomeBody2 />
          </>
        ) : (
          <p>Loading user details...</p>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
