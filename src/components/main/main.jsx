import "./main.css";
// import { assets } from "../../assets/assets";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../contexts/COntext";
import MainBottom from "./MainBottom";
import Cards from "./Cards";
import Nav from "./Nav";
import Greet from "./Greet";
import InputResult from "./InputResult";

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
    setRecentChats,
    newChat,
    setNewChat,
    setPrevPrompt,
    setCardText,
    setCardClick,
    cardText,
    cardClick,
  } = useContext(Context);

  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (resultData && !loading) {
      setTypedText("");
      setCurrentIndex(0);
    }
    if (newChat) {
      setPrevPrompt([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultData, loading, setRecentChats, newChat]);

  useEffect(() => {
    if (resultData && !loading && currentIndex < resultData.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + resultData[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 10);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, loading, resultData]);

  useEffect(() => {
    if (cardClick) {
      onSent(cardText);
      setCardClick(false);
      setNewChat(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardText, cardClick]);

  const cardHandler = (e) => {
    const card = e.currentTarget.firstElementChild.innerText;
    setInput(card);
    setCardText(card);
    setCardClick(true);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main-top">
          <Nav />
          {!showResult || newChat ? (
            <div className="main-container">
              <Greet />
              <Cards cardHandler={cardHandler} />
            </div>
          ) : (
            <InputResult
              prevPrompt={prevPrompt}
              typedText={typedText}
              loading={loading}
              recentPrompt={recentPrompt}
            />
          )}
        </div>
        <MainBottom
          input={input}
          setInput={setInput}
          onSent={onSent}
          setNewChat={setNewChat}
        />
      </div>
    </div>
  );
}
