import { useEffect, useState } from "react";

import Header from '@components/Header';
import Repository from "./Repository";

interface User {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: string;
}

function User() {
  const [user, setUser] = useState<User>({
    avatar_url: '',
    name: '',
    login: '',
    bio: '',
    public_repos: ''
  });

  useEffect(() => {
    fetch('https://api.github.com/users/duc-k')
      .then(response => response.json())
      .then(data => setUser(data))
  }, []);

  return (
    <div className="container">
      <Header user={user} />
      <Repository />
    </div>
  );
}

export default User;