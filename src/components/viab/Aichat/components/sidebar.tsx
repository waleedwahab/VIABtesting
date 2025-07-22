import Image from "next/image";

const Sidebar = ({
  closeActive,
  setCloseActive,
}: {
  closeActive: boolean;
  setCloseActive: (closeActive: boolean) => void;
}) => {
  const CloseSideBar = () => {
    setCloseActive(!closeActive);
  };

  return (
    <>
      <div className={`sidebar ${closeActive ? "closed" : ""}`}>
        {closeActive ? (
          <Image
            alt="History Opening Icon"
            src="/assets/icons/png/historyopeningicon.png"
            className="mt-5"
            width={20}
            height={20}
            onClick={CloseSideBar}
          />
        ) : (
          
          <div className="d-flex flex-column justify-content-between h-100 w-100 ">
            <div className="scroller-sidebar">
            <div className="d-flex align-items-start gap-5 mt-3 ">
              <button className="btn btn-light txt-dark ms-1">New Chat</button>
              <Image
                alt="History Closing Icon"
                src="/assets/icons/png/historyclosingicon.png"
                className="mt-2"
                width={20}
                height={20}
                onClick={CloseSideBar}
              />
            </div>
            <div className="serach-chats">
              <input
                className="form-control mb-3 mt-5 pt-2 pb-2 search-static"
                placeholder="Search Chats..."
              />
            </div>
            <div className="chats">
             <p>How can I center a div?</p>
<p>Explain async/await in simple terms.</p>
<p>Whats the difference between var, let, and const?</p>
<p>Give me a CSS animation example.</p>
<p>Fix this JavaScript error for me.</p>
<p>What is useEffect used for?</p>
<p>Translate this to French.</p>
<p>Summarize this article.</p>
<p>Generate a professional email reply.</p>
<p>Make this text sound more formal.</p>
<p>Whats new in React 18?</p>
<p>How do I clear npm cache?</p>
<p>Give me a motivational quote.</p>
<p>What does h100 mean in Bootstrap</p>
<p>Debug this Node.js code.</p>
<p>Best way to learn data structures?</p>
<p>Explain the box model in CSS.</p>
<p>Why is my Flexbox not aligning?</p>
<p>Give me a SQL join example.</p>
<p>Write a regex to validate email.</p>
              
            </div>
            </div>
            <div className=" upgrade-plan mb-0 pb-0">
              <button className="btn upgrade-clr mt-5 pt-3">
                <span>
                  <Image
                    alt="Upgrade Plan Icon"
                    src="/assets/icons/png/upgradeplan.png"
                    className="me-3"
                    width={20}
                    height={20}
                  />
                </span>
                Upgrade Plan
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
