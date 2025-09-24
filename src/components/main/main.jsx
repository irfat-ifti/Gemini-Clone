import "./main.css";
import { assets } from "../../assets/assets";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../contexts/COntext";
import { MoonLoader } from "react-spinners";

export default function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    prevPrompt,
  } = useContext(Context);

  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (resultData && !loading) {
      setTypedText("");
      setCurrentIndex(0);
    }
  }, [resultData, loading]);

  useEffect(() => {
    if (resultData && !loading && currentIndex < resultData.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + resultData[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, loading, resultData]);

  return (
    <div className="main">
      <div className="container">
        <div className="main-top">
          <nav className="nav">
            <span className="logo">Gemini</span>
            <img className="user-icon" src={assets.user_icon} alt="" />
          </nav>
          {!showResult ? (
            <div className="main-container">
              <div className="greet">
                <h1 className="greeting-message">
                  <span>Hello, Dev.</span>
                  <br />
                  How can I help you today?
                </h1>
              </div>
              <div className="cards">
                <div className="card">
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>Briefly summarize this concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>Tell me about React js and React native</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <div className="input-result">
              {prevPrompt.map((chat, index) => (
                <div key={index}>
                  <div className="user-input">
                    <img
                      className="user-icon"
                      src={assets.user_icon}
                      alt="user"
                    />
                    <span>{chat.input}</span>
                  </div>
                  <div className="gemini-response-container">
                    <img
                      className="user-icon"
                      src={assets.gemini_icon}
                      alt=""
                    />
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
                    <img className="user-icon" src={assets.user_icon} alt="" />
                    <span>{recentPrompt}</span>
                  </div>
                  <div className="gemini-response-container">
                    <img
                      className="user-icon"
                      src={assets.gemini_icon}
                      alt=""
                    />
                    {loading && (
                      <span className="gemini-thinking">
                        Thinking... <MoonLoader size={16} />
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
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
                  onClick={() => onSent(input)}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}
