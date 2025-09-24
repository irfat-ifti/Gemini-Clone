import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState, useContext } from "react";
import { Context } from "../../contexts/COntext";
function Sidebar() {
  const { prevPrompt } = useContext(Context);
  const [extended, setExtended] = useState(false);

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
          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended ? <span>New Chat</span> : null}
          </div>
          {extended ? (
            <>
              <h4 className="recents">Recents</h4>
              <div className="recent">
                {prevPrompt.map((chat) => (
                  <div className="recent-chat">
                    <img src={assets.message_icon} alt="" />
                    <span>{chat.input}</span>
                  </div>
                ))}
              </div>
            </>
          ) : null}
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
