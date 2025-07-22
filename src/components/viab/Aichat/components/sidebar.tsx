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
              <button className="btn btn-light txt-dark ms-1" style ={{fontSize:"14px"}}>New Chat</button>
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
          <p>Generate a floor plan with 3 bedrooms and a kitchen.</p>
<p>Create a BOQ for a 5 marla house.</p>
<p>Fix the overlapping issue in my room layout.</p>
<p>How can I center a room in the floor view?</p>
<p>What s the best way to calculate construction cost?</p>
<p>Explain BOQ in simple terms.</p>
<p>Make this floor plan design look more modern.</p>
<p>Translate this BOQ to French.</p>
<p>Summarize this construction estimate.</p>
<p>Generate a professional email to send this BOQ to my client.</p>
<p>Why is my room not aligning properly on the canvas?</p>
<p>How can I reset my floor layout?</p>
<p>Give me a quote related to architecture or design</p>
<p>What does scale 100% mean in plan view?</p>
<p>Debug this plan — rooms are not connecting right</p>
<p>Best way to learn how to read BOQ?</p>
<p>Explain how wall thickness affects area</p>
<p>How do I add stairs in my plan</p>
<p>Give me an example of estimating material for walls
</p>
<p>Write a formula to validate room dimensions</p>

              
            </div>
            </div>
            <div className=" upgrade-plan mb-0 pb-0">
              <button className="btn upgrade-clr mt-5 pt-3">
                <span>
                  <Image
                    alt="Upgrade Plan Icon"
                    src="/assets/icons/png/upgradeplan.png"
                    className="me-1"
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
