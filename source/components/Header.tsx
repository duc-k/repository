import '@styles/header.scss';

interface User {
  user: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    public_repos: string;
  }
}

function Header(props: User) {

  return (
    <header>
      <img src={props.user.avatar_url} alt={props.user.name} />
      
      <div className="details">
        <div className="login">
          <h4>{props.user.name}</h4>
          <small>{props.user.login}</small>
        </div>

        <p>{props.user.bio}</p>
      </div>

      <div className="info">
        <span>Públicos</span>
        <span>{props.user.public_repos}</span>
      </div>
      
    </header>
  )
}

export default Header;