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
          <div className="d-flex flex-column justify-content-between ">
            <div className="d-flex align-items-start gap-5 mt-5">
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
              <p>Lorem ipsum dolor sit amet elit</p>
              <p>Lorem ipsum dolor sit amet elit</p>
            </div>
            <div className="">
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
