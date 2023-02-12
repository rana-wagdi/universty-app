import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const HeaderItems = () => {
    return (
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
            <AiOutlineInstagram className="socila_icon" />
          </a>
        </span>
      </div>
      <div className="lang">عربي</div>
    </div>
  </div>
    )
};
export default HeaderItems;
