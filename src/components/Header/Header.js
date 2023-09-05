import icon from "../../images/world-icon.svg";
import "./Header.css";
function Header() {
  return (
    <header className="Header--wrapper">
      <img
        src={icon}
        alt="Icon"
        className="Header--icon"
      />
      <a href="my.travel.journal." className="Header--text">my.travel.journal.</a>
    </header>
  );
}

export default Header;
