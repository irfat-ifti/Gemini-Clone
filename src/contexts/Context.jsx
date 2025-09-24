import { createContext, useState } from "react";
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
        input: input,
        response: response,
      },
    ]);
  };
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
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
