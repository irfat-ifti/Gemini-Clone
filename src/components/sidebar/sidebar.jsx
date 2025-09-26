import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../contexts/COntext";
import NewChat from "./NewChat";
import RecentChats from "./RecentChats";
function Sidebar() {
  const { setNewChat, extended, setExtended } = useContext(Context);

  return (
    <>
      <div className={`sidebar ${extended ? "extended" : ""}`}>
        <div className="top">
          <img
            onClick={() => {
              setExtended((prevExtended) => (prevExtended ? false : true));
            }}
            src={assets.menu_icon}
            alt=""
            className="menu"
          />
          <NewChat setNewChat={setNewChat} extended={extended} />
          <RecentChats />
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <img src={assets.question_icon} alt="" />
            {extended ? <span>Help</span> : null}
          </div>
          <div className="bottom-item">
            <img src={assets.history_icon} alt="" />
            {extended ? <span>Activity</span> : null}
          </div>
          <div className="bottom-item">
            <img src={assets.setting_icon} alt="" />
            {extended ? <span>Settings</span> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
