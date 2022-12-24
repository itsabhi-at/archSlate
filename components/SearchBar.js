function SearchBar() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 pt-2">
        {/* search bar */}
        <div className="flex-1">
          <form className="flex items-center">
            <label for="simple-search" className="sr-only text-lg">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                <svg
                  width="20"
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0916 16.9084L14.9999 13.8417C16.2 12.3454 16.7812 10.4461 16.6239 8.53446C16.4667 6.62279 15.583 4.84403 14.1545 3.56391C12.7261 2.2838 10.8614 1.59963 8.94402 1.6521C7.02662 1.70457 5.20219 2.48968 3.84587 3.84599C2.48956 5.20231 1.70445 7.02674 1.65198 8.94415C1.59951 10.8615 2.28368 12.7262 3.56379 14.1546C4.84391 15.5831 6.62267 16.4668 8.53434 16.6241C10.446 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C16.9857 18.1448 17.0779 18.2068 17.1794 18.2491C17.281 18.2914 17.3899 18.3132 17.4999 18.3132C17.6099 18.3132 17.7189 18.2914 17.8204 18.2491C17.9219 18.2068 18.0141 18.1448 18.0916 18.0667C18.2418 17.9113 18.3257 17.7037 18.3257 17.4875C18.3257 17.2714 18.2418 17.0638 18.0916 16.9084ZM9.16659 15C8.01286 15 6.88505 14.6579 5.92576 14.0169C4.96647 13.376 4.2188 12.4649 3.77729 11.399C3.33578 10.3331 3.22026 9.16024 3.44534 8.02868C3.67042 6.89713 4.22599 5.85773 5.0418 5.04192C5.8576 4.22611 6.897 3.67054 8.02856 3.44546C9.16012 3.22038 10.333 3.3359 11.3989 3.77741C12.4648 4.21892 13.3759 4.9666 14.0168 5.92588C14.6578 6.88517 14.9999 8.01299 14.9999 9.16671C14.9999 10.7138 14.3853 12.1975 13.2914 13.2915C12.1974 14.3855 10.7137 15 9.16659 15Z"
                    fill="#6F767D"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-[#F0F2F8]  border-none text-gray-900 text-lg font-light rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full pl-16 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        {/* side drop down  */}
        <div className="flex items-center font-bold">
          <label
            for="countries"
            className="text-gray-900 dark:text-white w-[140px] text-right "
          >
            Sort By:
          </label>
          <select
            id="type"
            className=" bg-gray-50 border-none text-gray-900  rounded-full focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:orange-gray-100 dark:focus:border-gray-100"
          >
            <option selected value="newest">
              Newest
            </option>
            <option value="High">High Paying</option>
            <option value="Remote">Remote</option>
            <option value="Hours">Hours</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
