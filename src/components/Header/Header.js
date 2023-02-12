import logo from "../../assets/Logo.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header">
      <div className="header__items">
        <div className="container header_content">
          <div className="follow_icon">
            <span>
              Folow us:
              <a href="#">
                <FaFacebookF className="socila_icon" />
              </a>
              <a href="#">
                <AiOutlineTwitter className="socila_icon" />
              </a>
              <a href="#">
                <FaLinkedinIn className="socila_icon" />
              </a>
              <a href="#">
                <FaYoutube className="socila_icon" />
              </a>
              <a href="#">
                <i className="socila_icon fa-brands fa-instagram"></i>
              </a>
            </span>
          </div>
          <div className="lang">عربي</div>
        </div>
      </div>
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
                  <option value="#">
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
                  <option value="#">
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
                  <option value="#">
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
                  <option value="#">
                    <a href="#">NEWS & EVENTS</a>
                  </option>
                </select>
              </div>
            </li>
          </ul>
          <div className="search">
            <i className="search_icon fa-solid fa-magnifying-glass"></i>
            <p className="search_text">SEARCH</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
