// src/components/AuthContainer
import React, { useEffect, useState } from 'react';
import { useAuth, LoginButton, LogoutButton } from 'react-oauth2-login';
import Tracks from '../components/Tracks';
import { SpotifyAuth, SpotifyLoginButton } from 'react-spotify-auth';

const AuthContainer: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const auth = useAuth();

  useEffect(() => {
    if (auth) {
      setAccessToken(auth); // Set the accessToken as it is if user is authenticated
    }
  }, [auth]);


  return (
    <div>
      {auth ? (
        <div>
          <p>Authenticated</p>
          <LogoutButton />
          <Tracks accessToken={accessToken} />
        </div>
      ) : (
        <div>
          <p>Not Authenticated</p>
          <LoginButton />
        </div>
      )}
        <div>
          <SpotifyAuth
            redirectUri="http://localhost:3000/callback" 
            clientID="50444e9718a44abb901f4d60a7bc14c2" 
          />
          <SpotifyLoginButton />
      </div>
    </div>
  );
};


export default AuthContainer;
