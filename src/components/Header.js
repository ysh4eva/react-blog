import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div data-testid="tops" className="top">
      <div className="topLeft">
        <h1>BlogSpot</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/addblog">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
