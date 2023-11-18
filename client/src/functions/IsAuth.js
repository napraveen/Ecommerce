import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const useAuth = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/login');
      }

      try {
        const { data } = await axios.post(
          'http://localhost:4000',
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (status) {
          setAuthenticated(true);
          setUsername(user);
        } else {
          removeCookie('token');
          navigate('/login');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        removeCookie('token');
        navigate('/login');
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie('token');
    navigate('/signup');
  };

  return { authenticated, username, logout };
};

export default useAuth;
