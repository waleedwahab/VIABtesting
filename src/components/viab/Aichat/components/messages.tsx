import { useSelector } from "react-redux";
import CustomMarkdown from "./reactMarkdown";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Messages = () => {
  const messages = useSelector((state: any) => state.chat.messages);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="chat-messages">
        {messages.map((msg: any, i: number) => (

          <div className={`message-row ${msg.sender === "ai" ? "ai-message" : ""}`} key={i}>
  <div
    className={`message-bubble ${
      msg.sender === "user" ? "message-user" : "message-ai"
    }`}
  >
    <div ref={chatContainerRef}>
      {msg.sender === "user" ? (
        msg.text
      ) : (
        <CustomMarkdown content={msg.text} />
      )}
    </div>
   {msg.files && (
                <div className="uploaded-files d-flex align-items-center justify-content-center gap-2 flex-wrap  mt-2">
                  {msg.files.map((file: any, idx: number) => (
                    <div key={idx} className="mt-3">
                      {file.type.startsWith("image/") ? (
                      
                        <img
                          src={file.url}
                          alt={file.name}
                          width={70}
                          height={70}
                          style={{ maxWidth: "150px", borderRadius: "10px" }}
                        />
                      ) : (
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📄 {file.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
  </div>
</div>

          // <div className="message-row" key={i}>
          //   <div
          //     className={`message-bubble ${
          //       msg.sender === "user" ? "message-user" : "message-ai"
          //     }`}
          //   >
          //     <div ref={chatContainerRef}>
          //       {msg.sender == "user" ? (
          //         msg.text
          //       ) : (
          //         <CustomMarkdown content={msg.text} />
          //       )}
          //     </div>
          //     {msg.files && (
          //       <div className="uploaded-files mt-2">
          //         {msg.files.map((file: any, idx: number) => (
          //           <div key={idx}>
          //             {file.type.startsWith("image/") ? (
          //               <img
          //                 src={file.url}
          //                 alt={file.name}
          //                 width={100}
          //                 height={100}
          //                 style={{ maxWidth: "150px", borderRadius: "10px" }}
          //               />
          //             ) : (
          //               <a
          //                 href={file.url}
          //                 target="_blank"
          //                 rel="noopener noreferrer"
          //               >
          //                 📄 {file.name}
          //               </a>
          //             )}
          //           </div>
          //         ))}
          //       </div>
          //     )}
          //   </div>
          // </div>
        ))}

        {/* {messages.map((msg, i) => (
            <div className="message-row" key={i}>
              {msg.sender === "ai" && (
                <div className="ai-avatar">
                  <Image
                    alt="AI Icon"
                    src="/assets/icons/png/aiicon.png"
                    className="ai-avatar"
                    width={100}
                    height={100}
                  />
                </div>
              )}
              <div
                className={`message-bubble ${
                  msg.sender === "user" ? "message-user" : "message-ai"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "user" && (
                <div className="user-avatar">
                  <Image
                    alt="User Icon"
                    src="/assets/icons/png/usericon.png"
                    className="user-avatar"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
          ))} */}
      </div>
    </>
  );
};
export default Messages;
