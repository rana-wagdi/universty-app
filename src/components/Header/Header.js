import logo from "../../assets/Logo.jpg";
import { BsSearch } from "react-icons/bs";
import HeaderItems from "./HeaderItems";

const Header = () => {
  return (
    <header className="header">
      <HeaderItems />
      <div className="container nav__items">
        <div>
          <img className="logo" width="100" height="60" src={logo} />
        </div>
        <div className="nav__links">
          <ul>
            <li>
              <a href="#" className="active">
                HOME
              </a>
            </li>
            <li>
              <div className="custom-select">
                <select name="RESEARCH">
                  <option value="RESEARC">
                    <a href="#">RESEARCH & TECHNOLOGIES</a>
                  </option>
                </select>
              </div>
            </li>
            <li>
              <div className="custom-select">
                <select name="translation">
                  <option value="translation">
                    <a href="#">TRANSLATION</a>
                  </option>
                </select>
              </div>
            </li>
            <li>
              <div className="custom-select">
                <select name="people">
                  <option value="people">
                    <a href="#">PEOPLE</a>
                  </option>
                </select>
              </div>
            </li>
            <li>
              <div className="custom-select">
                <select name="news">
                  <option value="news">
                    <a href="#">NEWS & EVENTS</a>
                  </option>
                </select>
              </div>
            </li>
          </ul>
          <div className="search">
            <BsSearch className="search_icon" />
            <p className="search_text">SEARCH</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
