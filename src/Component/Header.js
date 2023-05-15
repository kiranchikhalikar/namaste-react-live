

const Title = () => (
    <a href="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlMUmWyWHSnjWdHS484hbCWdp7xoisZiZjg&usqp=CAU"
        alt="logo"
        className="logo"
      />
    </a>
  );

  const Header = () => {
    return (
      <div className="header">
        {<Title />}
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
 

  