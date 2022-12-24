import React from "react";

const Tabs = ({
  contentOne: ContentOne,
  contentTwo: ContentTwo,
  contentThree: ContentThree,
}) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className=" bg-white flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row justify-center items-center gap-8 font-roboto"
            role="tablist"
          >
            <li className="-mb-px last:mr-0 text-center w-fit   ">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-3 block leading-normal w-full  " +
                  (openTab === 1 ? " border-b-2  border-black " : " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Search Jobs
              </a>
            </li>
            <li className="-mb-px last:mr-0 text-center w-fit   ">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-3 block leading-normal w-full  " +
                  (openTab === 2 ? " border-b-2  border-black " : " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Applied
              </a>
            </li>
            <li className="-mb-px last:mr-0 text-center w-fit   ">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-3 block leading-normal w-full  " +
                  (openTab === 3 ? " border-b-2  border-black " : " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Saved Jobs
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ContentOne />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ContentTwo />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <ContentThree />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
