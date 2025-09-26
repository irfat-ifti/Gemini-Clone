import { useContext } from "react";
import { Context } from "../../contexts/COntext";
export default function RecentChats() {
  const { extended, filteredList } = useContext(Context);

  return (
    <>
      {extended ? (
        <div className="recent">
          <h3>Recent</h3>
          <div className="recent-chats-wrapper">
            {filteredList.length > 0
              ? filteredList
                  .reverse()
                  .map((chat, index) => (
                    <span key={index}>
                      {chat[0].input.slice(0, 15) + "..."}
                    </span>
                  ))
              : "No chats found"}
          </div>
        </div>
      ) : null}
    </>
  );
}
