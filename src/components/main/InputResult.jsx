import { assets } from "../../assets/assets";
import { MoonLoader } from "react-spinners";
export default function InputResult({
  prevPrompt,
  typedText,
  loading,
  recentPrompt,
}) {
  return (
    <div className="input-result">
      {prevPrompt.map((chat, index) => (
        <div key={index}>
          <div className="user-input">
            <span>{chat.input}</span>
            <img className="user-icon" src={assets.user_icon} alt="user" />
          </div>
          <div className="gemini-response-container">
            <img className="user-icon" src={assets.gemini_icon} alt="" />
            {index === prevPrompt.length - 1 ? (
              <span className="gemini-response">{typedText}</span>
            ) : (
              <span className="gemini-response">{chat.response}</span>
            )}
          </div>
        </div>
      ))}
      {loading && (
        <>
          <div className="user-input">
            <span>{recentPrompt}</span>
            <img className="user-icon" src={assets.user_icon} alt="" />
          </div>
          <div className="gemini-response-container">
            <img className="user-icon" src={assets.gemini_icon} alt="" />
            {loading && (
              <span className="gemini-thinking">
                Thinking... <MoonLoader size={16} />
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
