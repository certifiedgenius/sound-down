import React, { useEffect, useState } from 'react';
import { useAuth, LoginButton, LogoutButton } from 'react-oauth2-login';

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
        </div>
      ) : (
        <div>
          <p>Not Authenticated</p>
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default AuthContainer;
