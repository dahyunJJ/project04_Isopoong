import { Link } from "react-router-dom";

function Header({ urlname }) {
  return (
    <header className="hd mw">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo_color.png`} alt="logo" />
      </Link>
      <nav className="gnb">
        <Link to="/facility" className="facility">
          시설검색
        </Link>
        <Link to="/visit" className="visit">
          방문후기
        </Link>
      </nav>
    </header>
  );
}

export default Header;
