import React from 'react';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';
import isAuth from '../functions/IsAuth';
import GetUserDetails from '../functions/GetUserDetails';
import '../css/New.css';
const HomeHeader = () => {
  const { userDetails } = GetUserDetails();
  return (
    <>
      {userDetails ? (
        <>
          <div className="home-container">
            {' '}
            <div className="top">
              <header>
                <div className="nav-container">
                  <div className="left-nav">
                    <div className="search-container">
                      <MaterialIcon icon="search" />
                      <input
                        type="text"
                        placeholder="Search"
                        id="search-button"
                      />
                    </div>
                  </div>
                  <div className="middle-nav">
                    <div className="home">
                      <MaterialIcon icon="home" id="nav-icons" />
                      <p>Home</p>
                    </div>
                    <div className="network">
                      <MaterialIcon icon="favorite" id="nav-icons" />
                      <p>Favourites</p>
                    </div>
                    <div className="jobs">
                      <MaterialIcon icon="inventory_2" id="nav-icons" />
                      <p>My Orders</p>
                    </div>
                    <div className="messaging">
                      <MaterialIcon icon="shopping_cart" id="nav-icons" />
                      <p>My Cart</p>
                    </div>
                    <div className="notifications">
                      <MaterialIcon icon="notifications" id="nav-icons" />
                      <p>Notifications</p>
                    </div>
                    <div className="profile">
                      <MaterialIcon icon="person" id="nav-icons" />
                      <p>
                        {userDetails.username}
                        <MaterialIcon icon="arrow_drop_down" />
                      </p>
                      <div className="profile-dropdown">
                        <div className="profile-dropdown-content">
                          <Link to="/">Profile</Link>
                          <Link to="/">Settings</Link>
                          <Link to="/">Logout</Link>
                          <Link to="/">Logout</Link>
                          <Link to="/">Logout</Link>
                          <Link to="/">Logout</Link>
                          <Link to="/">Logout</Link>
                          <Link to="/">Logout</Link>
                          <Link to="/">Logout</Link>

                          <Link to="/">Logout</Link>
                          <Link to="/">Logout</Link>
                          <Link to="/">Logout</Link>

                          <Link to="/">Logout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="bottom"></div>
          </div>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
    </>
  );
};

export default HomeHeader;
