import { assets } from "../../assets/assets";
export default function MainBottom({ input, setInput, onSent, setNewChat }) {
  return (
    <div className="main-bottom">
      <div className="search-box">
        <input
          placeholder="Enter a prompt"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="icons">
          <img src={assets.gallery_icon} alt="" />
          <img src={assets.mic_icon} alt="" />
          {input !== "" ? (
            <img
              src={assets.send_icon}
              alt=""
              onClick={() => {
                onSent(input);
                setNewChat(false);
              }}
            />
          ) : null}
        </div>
      </div>
      <p className="bottom-info">
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy and Gemini Apps
      </p>
    </div>
  );
}
