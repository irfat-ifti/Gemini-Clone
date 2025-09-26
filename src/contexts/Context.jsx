import { createContext, useEffect, useState } from "react";
import { askGemini } from "../gemini";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [cardText, setCardText] = useState("");
  const [cardClick, setCardClick] = useState(false);
  const [newChat, setNewChat] = useState(false);
  const [extended, setExtended] = useState(false);
  const [recentChats, setRecentChats] = useState([]);
  const [recentChatLists, setRecentChatLists] = useState([]);

  useEffect(() => {
    setRecentChats(prevPrompt);
  }, [prevPrompt, setRecentChats]);

  const onSent = async (prompt) => {
    setRecentPrompt(input);
    setInput("");
    setLoading(true);
    setShowResult(true);
    const response = await askGemini(prompt);

    setResultData(response);
    setLoading(false);

    setPrevPrompt((prev) => [
      ...prev,
      {
        input: cardClick ? cardText : input,
        response: response,
      },
    ]);
  };
  if (newChat && !recentChatLists.includes(recentChats)) {
    setRecentChatLists((prev) => [...prev, recentChats]);
  }
  const filteredList = recentChatLists.filter((inner) => inner.length > 0);

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    newChat,
    setNewChat,
    setCardText,
    cardText,
    cardClick,
    setCardClick,
    extended,
    setExtended,
    recentChats,
    setRecentChatLists,
    recentChatLists,
    filteredList,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
