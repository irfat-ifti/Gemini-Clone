import { assets } from "../../assets/assets";
export default function NewChat({ setNewChat, extended }) {
  return (
    <div className="new-chat" onClick={() => setNewChat(true)}>
      <img src={assets.plus_icon} alt="" />
      {extended ? <span>New Chat</span> : null}
    </div>
  );
}
