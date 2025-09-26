import { assets } from "../../assets/assets";
import NewChat from "../sidebar/NewChat";

export default function Nav() {
  return (
    <nav className="nav">
      <span className="logo">Gemini</span>
      <div style={{ display: "flex" }}>
        <img className="user-icon" src={assets.user_icon} alt="" />
      </div>
    </nav>
  );
}
