"use client";
import {
  interviewHandler,
} from "@/app/viab/handler/chatbotHandler";
import { addMessage } from "@/redux/ChatSlicer";
import { setIsLoading } from "@/redux/ChatSlicer";
import { BiUserVoice} from "react-icons/bi";
import { BiCalculator, BiSend } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { GiPaperClip } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  useState,
  useRef,
  type KeyboardEvent,
  type ChangeEvent,
  useEffect,
} from "react";
type InputMessageProps = {
  closeActive: boolean;
};
const InputMessage = ({ closeActive }: InputMessageProps) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.chat.isLoading);
  const [userInput, setUserInput] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  
  const [userId, setUserId] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [contextTag, setContextTag] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserId(parsedUser?._id || null);
      } catch (err) {
        console.error("Failed to parse userInfo:", err);
      }
    }
  }, []);
  const sendMessage = async () => {
  if (!userInput.trim() && attachedFiles.length === 0) return;

dispatch(setIsLoading(true));

  // Show user's message immediately (text + file previews)
  const newUserMessage = {
    sender: "user",
    text: userInput.trim(),
    files: attachedFiles.map((file) => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    })),
  };
  dispatch(addMessage(newUserMessage));

  // Prepare form data for the API
  const formData = new FormData();
  formData.append("user_input", contextTag ? `${contextTag}: ${userInput}` : userInput);
  // formData.append("user_input", userInput || "");
  formData.append("user_id", userId || "unknown");
  formData.append("session_id", "123456");
  attachedFiles.forEach((file) => {
    formData.append("files", file);
  });

  // Reset input
  setUserInput("");
  setAttachedFiles([]);
  setContextTag(null);
  try {
    const response = await interviewHandler(formData);
    const aiMessage = {
      sender: "ai",
      text: response?.message || "No response from AI.",
    };
    dispatch(addMessage(aiMessage));
  } catch (error: any) {
    console.error("Error sending message:", error?.response?.data || error);
    dispatch(
      addMessage({
        sender: "ai",
        text: "Sorry, something went wrong with the server.",
      })
    );
  } finally {
   dispatch(setIsLoading(false));
  }
};
const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  // const sendMessage = async () => {

  //   if (attachedFiles.length === 0) {
  //     if (!userInput.trim()) return;
  //     const newUserMessage = {
  //       sender: "user",
  //       text: userInput,
  //     };

  //     dispatch(addMessage(newUserMessage));
  //     setUserInput("");

  //     try {
  //       setIsLoading(true)
  //       const formData = new URLSearchParams();
  //       formData.append("user_input", userInput);
  //       formData.append("user_id", userId || "unknown");
  //       formData.append("session_id", "123456");

  //       const response = await interviewHandler(formData);

  //       const aiMessage = {
  //         sender: "ai",
  //         text: response?.message || "No response from AI.",
  //       };
  //       dispatch(addMessage(aiMessage));
  //       setIsLoading(false);
  //     } catch (error: any) {
  //       console.error("Error sending message:", error?.response?.data || error);
  //       dispatch(
  //         addMessage({
  //           sender: "ai",
  //           text: "Sorry, something went wrong with the server.",
  //         })
  //       );
  //     }
  //   } else {
  //     setIsLoading(true);
  //     const formData = new FormData();
  //     attachedFiles.forEach((file) => {
  //       formData.append("files", file);
  //     });
  //     formData.append("user_id", userId || "unknown");
  //     formData.append("session_id", "123456");
  //     const previewMessage = {
  //       sender: "user",
  //       text:'',
  //       files: attachedFiles.map((file) => ({
  //         name: file.name,
  //         type: file.type,
  //         url: URL.createObjectURL(file),
  //       })),
  //     };
  //     dispatch(addMessage(previewMessage));
  //     setAttachedFiles([]);

  //     try {
  //       const response = await interviewHandler(formData);
  //       const aiMessage = {
  //         sender: "ai",
  //         text: response?.message || "No response from AI.",
  //       };

  //       dispatch(addMessage(aiMessage));
  //       setIsLoading(false);
  //     } catch (error: any) {
  //       console.error("File analysis error:", error);
  //       dispatch(
  //         addMessage({
  //           sender: "ai",
  //           text: "Failed to analyze the uploaded file.",
  //         })
  //       );
  //     }
  //   }
  // };
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    setAttachedFiles((prev) => [...prev, ...fileArray]);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  const removeAttachedFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    // Add voice recording logic here
  };
  return (
    <>
      <div className={`${closeActive ? "chat" :"chat-footer "} ${isLoading ? "loading" : ""}`}>
      <div className="chat-footer">
      <div  className = "d-flex flex-wrap gap-1  pt-0 prev">
            {attachedFiles.map((file, index) => (
              <div
                key={index}
                className="file-preview"
                style={{ position: "relative", marginBottom: "1rem" }}
              >
                <button
                className="d-flex align-items-center justify-content-center"
                  onClick={() => removeAttachedFile(index)}
                  type="button"
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "0px",
                    background: "#ff4d4f",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: "20px",
                    textAlign: "center",
                    
                  }}
                >
                  ×
                </button>

                {file.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                      objectFit: "cover",

                    }}
                  />
                ) : (
                  <div
                    style={{
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      width: "100px",
                      textAlign: "center",
                    }}
                  >
                    <FiFileText className="file-preview-icon" size={24} />
                    <span style={{ fontSize: "12px", wordBreak: "break-word" }}>
                      {file.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>


          {/* Input Bar */}
          <div className="input-bar">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="icon-btn"
              disabled={isLoading}
              type="button"
            >
              <GiPaperClip />
            </button>
 <div className="tools-dropdown-wrapper" ref={dropdownRef}>
  <button
    className="icon-btn tools-toggle"
    onClick={() => setIsDropdownOpen((prev) => !prev)}
    type="button"
  >
    ⋮
  </button>
  {isDropdownOpen && (
  <div className={`tools-dropdown ${isDropdownOpen ? "show" : "hide"}`}>
    <button
      className="tool-item"
      onClick={() => {
        setContextTag("Interview");
        setIsDropdownOpen(false);
      }}
    >
      <BiUserVoice className="me-2" /> Interview
    </button>
    <button
      className="tool-item"
      onClick={() => {
        setContextTag("BOQ");
        setIsDropdownOpen(false);
      }}
    >
      <BiCalculator className="me-2" /> BOQ
    </button>
  </div>
)}


  
</div>

       

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf,.doc,.docx,.txt"
              multiple
              className="file-input-hidden"
              onChange={handleFileInputChange}
            />

            <textarea
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              disabled={isLoading}
              className="message-input"
              rows={2}
            />

            <button
              onClick={handleVoiceRecord}
              className={`icon-btn ${isRecording ? "recording" : ""}`}
              disabled={isLoading}
              type="button"
            >
              <BsMic />
            </button>

            <button
              onClick={sendMessage}
              disabled={isLoading || (!userInput.trim() && attachedFiles.length === 0)}
              className="send-btn"
              type="button"
            >
              <BiSend />
            </button>
          </div>

          {/* <div className="footer-buttons">
            <button
              className="boq-btns"
              type="button"
            // onClick={handleBOQ}
            >
              <BiCalculator />
              Generate BOQ
            </button>
            <button
              className="archite-drawing"
              type="button"
            // onClick={handleDrawings}
            >
              <FiFileText />
              Generate Architectural Drawings
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
};

export default InputMessage;
