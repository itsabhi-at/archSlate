import Head from "next/head";

import JobResult from "../components/JobResult";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import Tag from "../components/Tag";
import jobLogo from "../pages/assets/jobLogo.png";
import richard from "../pages/assets/richard.png";
import dereus from "../pages/assets/dereus.png";
import north from "../pages/assets/north.png";
import { useState } from "react";
import CustomDropDown from "../components/CustomDropdown";

const tagData = [
  "Architecture",
  "Commercial Architecture",
  "Computational Deisgn",
  "Green Architecture",
  "Interior Architecture",
  "Interior Design",
  "Landscape Architecture",
  "Sustainable Architecture",
  "Urban Design",
  "Urban Planning",
  "Vernacular Architecture",
  "Parametic Architecture",
  "Residential Architecture",
];

export default function Home() {
  return (
    <div className=" bg-gray-50">
      <main className="overflow-x-hidden pt-16 md:pt-0 ">
        <Tabs
          contentOne={ContentOne}
          contentTwo={ContentTwo}
          contentThree={ContentThree}
        />
      </main>
    </div>
  );
}

export const ContentOne = () => {
  // state here
  const [toggle, setToggle] = useState(false);
  //functions
  const btnClicked = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="font-roboto container mx-auto lg:px-36 ">
      <h1 className="text-lg font-bold w-full mx-auto text-center ">
        What types of jobs interest you?
      </h1>
      {/* slider button part  */}
      <div className=" flex justify-center gap-8 py-6 items-center ">
        <label
          for="toggle-example"
          className="flex items-center cursor-pointer relative"
        >
          <input type="checkbox" id="toggle-example" className="sr-only peer" />
          <span className="mr-8 text-2xl font-bold text-black peer-checked:text-slate-400">
            Full-Time
          </span>
          <div
            onClick={() => btnClicked()}
            className=" relative toggle-bg bg-white h-[24px] w-14 shadow-xl  rounded-full peer peer-focus:ring-white  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[-0.5px] after:left-[-2px]  after:border-white after:border-none after:rounded-[12px] after:h-[24px] after:w-[31px] after:transition-all dark:border-white peer-checked:bg-white peer-checked:border-none after:bg-gradient-to-r from-[#F26A5C] to-orange-400 "
          ></div>
          <span className="ml-8 text-2xl font-bold text-slate-400 peer-checked:text-black">
            Freelancer
          </span>
        </label>
      </div>
      {/* tags here  */}
      <ul className="flex flex-wrap justify-center gap-x-3 gap-y-3 mb-4">
        {tagData.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </ul>
      {/* search bar section  */}
      <SearchBar />
      {/* ends here  */}
      {/* bottom row drop down  */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center pt-4 pb-16 ">
        <div className="flex gap-4 items-center relative">
          <CustomDropDown />

          <div className="relative flex items-center">
            <svg
              className=" absolute left-2 "
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5749 7.95829C16.5056 7.82086 16.3997 7.70529 16.2688 7.62439C16.1379 7.54349 15.9871 7.50042 15.8332 7.49995H11.6666V2.49995C11.6755 2.31719 11.624 2.13656 11.5201 1.98595C11.4162 1.83535 11.2656 1.72313 11.0916 1.66662C10.9242 1.61157 10.7438 1.61096 10.5761 1.66485C10.4084 1.71875 10.2621 1.8244 10.1582 1.96662L3.49155 11.1333C3.40802 11.254 3.35787 11.3947 3.34616 11.541C3.33445 11.6873 3.36161 11.8342 3.42488 11.9666C3.48315 12.1181 3.58437 12.2492 3.71613 12.344C3.84788 12.4387 4.00442 12.4929 4.16655 12.5H8.33322V17.5C8.33335 17.6757 8.38903 17.8469 8.4923 17.9891C8.59557 18.1312 8.74114 18.2371 8.90822 18.2916C8.99194 18.3176 9.07891 18.3316 9.16655 18.3333C9.29804 18.3336 9.42774 18.3029 9.54506 18.2435C9.66237 18.1841 9.76397 18.0978 9.84155 17.9916L16.5082 8.82495C16.598 8.70062 16.6517 8.55392 16.6635 8.401C16.6753 8.24809 16.6446 8.09489 16.5749 7.95829ZM9.99988 14.9333V11.6666C9.99988 11.4456 9.91209 11.2336 9.75581 11.0774C9.59953 10.9211 9.38757 10.8333 9.16655 10.8333H5.83322L9.99988 5.06662V8.33329C9.99988 8.5543 10.0877 8.76626 10.244 8.92254C10.4002 9.07882 10.6122 9.16662 10.8332 9.16662H14.1666L9.99988 14.9333Z"
                fill="#232427"
              />
            </svg>
            <select
              id="type"
              className=" bg-gray-50 border-black text-gray-900 font-bold  rounded-full focus:ring-black focus:border-black block w-[150px] px-4 pr-2 pl-8  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:orange-black dark:focus:border-black"
            >
              <option selected value="on-site">
                Long-Term
              </option>
              <option selected value="remote">
                Short-Term
              </option>
            </select>
          </div>
        </div>
        <div>
          <button className="border-[1.5px] border-[#808285] rounded-full font-bold text-[#808285] px-4 py-2 ">
            Clear All
          </button>
        </div>
      </div>
      {/* ends here  */}
      {toggle ? (
        <>
          <p className="font-medium py-2">261 Results</p>
          <JobResult
            image={dereus}
            position={"Designer"}
            company={"De Reus Acrhitects"}
            location={"Sun Valley, CA"}
            selected={false}
          />
          <JobResult
            image={north}
            position={"Project Architect"}
            company={"Richard Kennedy Architects"}
            location={"Pheonix, AZ"}
          />
        </>
      ) : (
        <>
          <p className="font-medium py-2">171 Results</p>
          <JobResult
            image={jobLogo}
            position={"Project Architect"}
            company={"Northworks Achitects"}
            location={"Bozeman, MT"}
            selected={false}
            status={"Decision 🎉"}
          />
          <JobResult
            image={richard}
            position={"Project Architect"}
            company={"Richard Kennedy Architects"}
            location={"Pheonix, AZ"}
            selected={false}
          />
        </>
      )}
    </div>
  );
};
export const ContentTwo = () => {
  return (
    <div className="font-roboto container mx-auto lg:px-36 ">
      <div className="py-4">
        <SearchBar />
      </div>

      <div className="pt-4">
        <JobResult
          image={jobLogo}
          position={"Architectural Designer"}
          company={"Black Mountain Architecture"}
          location={"Bozeman, MT"}
          selected={true}
          status={"Decision  🎉"}
        />
        <JobResult
          image={dereus}
          position={"Project Manager"}
          company={"Arc Three Studio, LLC"}
          location={"Houston, TX"}
          selected={true}
          status={"Scheduled  🗓️"}
        />
      </div>
    </div>
  );
};
export const ContentThree = () => {
  return (
    <div className="font-roboto container mx-auto lg:px-36 ">
      <div className="py-4">
        <SearchBar />
      </div>

      <div className="pt-4">
        <JobResult
          image={jobLogo}
          position={"Architectural Designer"}
          company={"Black Mountain Architecture"}
          location={"Bozeman, MT"}
          selected={false}
          saved={true}
        />
        <JobResult
          image={richard}
          position={"Project Architect"}
          company={"Richard Kennedy Architects"}
          location={"Pheonix, AZ"}
          selected={false}
          saved={true}
        />
      </div>
    </div>
  );
};
