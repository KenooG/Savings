const Header = () => {
  return (
    <div className="MainBox">
      <div className="logo">
        <div className="logoIcon"></div>
        <div className="logoNameMain">
          <div className="logoName1">Smart</div>
          <div className="logoName2">Saver</div>
        </div>
      </div>
      <div className="nav">
        <div className="nav_btn">
          <a href="/best" className="nav_click">
            Best Savers
          </a>
        </div>
        <div className="nav_btn">
          <a href="" className="nav_click">
            Aktualne promocje
          </a>
        </div>
        <div className="nav_btn">
          <a href="/login" className="nav_click">
            Zaloguj się
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
