import Image from "next/image";
import jobLogo from "./assets/jobLogo.png";
import profilePic from "./assets/profilePic.png";
function job() {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto lg:px-36 pt-8">
        <div className="text-xl font-roboto font-bold  flex items-center gap-2 mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12L3 12"
              stroke="#0F1420"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M9 6L3 12L9 18"
              stroke="#0F1420"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          Back to jobs
        </div>
        {/* head card  */}
        <section className="p-6 flex justify-between bg-white rounded-md mb-4 ">
          {/* left side part  */}
          <div>
            <div className=" flex gap-4">
              {/* image  */}
              <Image src={jobLogo} alt="logo" />
              {/* text part  */}
              <div className=" flex flex-col font-roboto">
                <h1 className="font-bold text-[36px]">
                  Architectural Designer
                </h1>
                <p className="text-xl py-2 ">Black Mountain Architecture</p>
                <p className="pt-2">Posted 07/27/2022</p>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <div className=" bg-black  text-white text-[14px] px-4 py-2 rounded-[40px] font-semibold ">
                Architecture
              </div>
              <div className=" bg-[#E7FFCD]  text-black text-[14px] px-4 py-2 rounded-[40px] font-semibold ">
                Freelance
              </div>
              <div className=" bg-[#CCE6FF]  text-black text-[14px] px-4 py-2 rounded-[40px] font-semibold ">
                Long-Term
              </div>
            </div>
          </div>
          {/* right side part  */}
          <div className="font-roboto flex flex-col items-end">
            {/* svgs  */}
            <div className=" flex gap-4 items-center justify-end">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6654 9.33301L9.33203 12.833"
                  stroke="black"
                  stroke-width="1.75"
                  stroke-linecap="round"
                />
                <path
                  d="M18.6654 18.667L9.33203 15.167"
                  stroke="black"
                  stroke-width="1.75"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.0013 16.3337C8.28997 16.3337 9.33464 15.289 9.33464 14.0003C9.33464 12.7117 8.28997 11.667 7.0013 11.667C5.71264 11.667 4.66797 12.7117 4.66797 14.0003C4.66797 15.289 5.71264 16.3337 7.0013 16.3337Z"
                  stroke="black"
                  stroke-width="1.75"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.0013 10.4997C22.29 10.4997 23.3346 9.45501 23.3346 8.16634C23.3346 6.87768 22.29 5.83301 21.0013 5.83301C19.7126 5.83301 18.668 6.87768 18.668 8.16634C18.668 9.45501 19.7126 10.4997 21.0013 10.4997Z"
                  stroke="black"
                  stroke-width="1.75"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.0013 22.1667C22.29 22.1667 23.3346 21.122 23.3346 19.8333C23.3346 18.5447 22.29 17.5 21.0013 17.5C19.7126 17.5 18.668 18.5447 18.668 19.8333C18.668 21.122 19.7126 22.1667 21.0013 22.1667Z"
                  stroke="black"
                  stroke-width="1.75"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H6C5.73478 2 5.48043 2.10536 5.29289 2.29289C5.10536 2.48043 5 2.73478 5 3V21C4.99999 21.1912 5.05477 21.3783 5.15785 21.5393C5.26094 21.7003 5.40801 21.8284 5.58164 21.9083C5.75527 21.9883 5.94819 22.0169 6.13754 21.9906C6.32688 21.9643 6.50473 21.8843 6.65 21.76L12 17.27L17.29 21.71C17.3834 21.8027 17.4943 21.876 17.6161 21.9258C17.7379 21.9755 17.8684 22.0008 18 22C18.1312 22.0034 18.2613 21.976 18.38 21.92C18.5626 21.845 18.7189 21.7176 18.8293 21.5539C18.9396 21.3901 18.999 21.1974 19 21V3C19 2.73478 18.8946 2.48043 18.7071 2.29289C18.5196 2.10536 18.2652 2 18 2ZM17 18.86L12.64 15.2C12.4603 15.0503 12.2339 14.9684 12 14.9684C11.7661 14.9684 11.5397 15.0503 11.36 15.2L7 18.86V4H17V18.86Z"
                  fill="black"
                />
              </svg>
            </div>
            {/* status btn  */}
            <div className=" text-black text-xl font-medium border-[3px] bg-[#BBFEB5] px-4 py-2 my-4 border-none ">
              Status: Accepting Applications
            </div>
            <button className=" px-6 py-2 rounded-full text-white text-xl font-roboto font-bold bg-gradient-to-r from-[#F26A5C] to-orange-400 ">
              Apply on Archslate
            </button>
          </div>
        </section>
        {/* ends here  */}
        {/* second cards row  */}
        <section className="grid grid-cols-4 gap-8 mb-4">
          <div className="CARD-ONE  bg-white rounded-md p-4 min-h-[200px] ">
            <p className="HEADING font-semibold text-black text-lg flex gap-2 justify-center items-center mb-2 relative ">
              <svg
                className=" absolute left-0 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.89 9.55001C19.8069 9.3851 19.6798 9.24642 19.5227 9.14934C19.3656 9.05226 19.1847 9.00057 19 9.00001H14V3.00001C14.0107 2.7807 13.949 2.56394 13.8243 2.38321C13.6996 2.20248 13.5189 2.06782 13.31 2.00001C13.1092 1.93396 12.8927 1.93321 12.6915 1.99789C12.4903 2.06257 12.3147 2.18934 12.19 2.36001L4.19001 13.36C4.08978 13.5049 4.02959 13.6737 4.01554 13.8493C4.0015 14.0249 4.03409 14.2011 4.11001 14.36C4.17994 14.5418 4.3014 14.6991 4.4595 14.8128C4.61761 14.9265 4.80546 14.9916 5.00001 15H10V21C10.0002 21.2109 10.067 21.4163 10.1909 21.5869C10.3148 21.7576 10.4895 21.8846 10.69 21.95C10.7905 21.9812 10.8948 21.998 11 22C11.1578 22.0004 11.3134 21.9635 11.4542 21.8922C11.595 21.821 11.7169 21.7174 11.81 21.59L19.81 10.59C19.9178 10.4408 19.9822 10.2648 19.9964 10.0813C20.0105 9.89777 19.9737 9.71394 19.89 9.55001ZM12 17.92V14C12 13.7348 11.8947 13.4804 11.7071 13.2929C11.5196 13.1054 11.2652 13 11 13H7.00001L12 6.08001V10C12 10.2652 12.1054 10.5196 12.2929 10.7071C12.4804 10.8947 12.7348 11 13 11H17L12 17.92Z"
                  fill="#232427"
                />
              </svg>
              Software Skills
            </p>
            <div className=" flex flex-wrap gap-2 justify-center">
              <div className="flex bg-black  text-white text-[14px] px-3 py-2 rounded-[40px] font-semibold text-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.575 7.95832C16.5058 7.82089 16.3998 7.70532 16.2689 7.62442C16.138 7.54352 15.9872 7.50045 15.8333 7.49998H11.6667V2.49999C11.6756 2.31722 11.6242 2.13659 11.5202 1.98599C11.4163 1.83538 11.2657 1.72316 11.0917 1.66665C10.9244 1.6116 10.7439 1.61099 10.5762 1.66488C10.4085 1.71878 10.2622 1.82443 10.1583 1.96665L3.49167 11.1333C3.40814 11.254 3.35799 11.3947 3.34628 11.541C3.33458 11.6874 3.36173 11.8342 3.42501 11.9667C3.48327 12.1181 3.5845 12.2493 3.71625 12.344C3.848 12.4387 4.00455 12.493 4.16667 12.5H8.33334V17.5C8.33347 17.6757 8.38915 17.8469 8.49242 17.9891C8.59569 18.1313 8.74127 18.2372 8.90834 18.2917C8.99207 18.3176 9.07903 18.3316 9.16667 18.3333C9.29816 18.3337 9.42786 18.3029 9.54518 18.2435C9.6625 18.1841 9.7641 18.0978 9.84167 17.9917L16.5083 8.82499C16.5981 8.70065 16.6519 8.55395 16.6636 8.40103C16.6754 8.24812 16.6447 8.09492 16.575 7.95832ZM10 14.9333V11.6667C10 11.4456 9.91221 11.2337 9.75593 11.0774C9.59965 10.9211 9.38769 10.8333 9.16667 10.8333H5.83334L10 5.06665V8.33332C10 8.55433 10.0878 8.76629 10.2441 8.92257C10.4004 9.07885 10.6123 9.16665 10.8333 9.16665H14.1667L10 14.9333Z"
                    fill="white"
                  />
                </svg>
                Rhino
              </div>
              <div className="flex bg-black  text-white text-[14px] px-3 py-2 rounded-[40px] font-semibold text-center">
                Sketchup
              </div>
              <div className="flex bg-black  text-white text-[14px] px-3 py-2 rounded-[40px] font-semibold text-center">
                Vectorworks
              </div>
            </div>
          </div>
          <div className="CARD-TWO bg-white rounded-md p-4 min-h-[200px]">
            <p className="HEADING font-semibold text-black text-lg flex gap-2 justify-center items-center mb-2 relative ">
              <svg
                className=" absolute left-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 9.66999C21.9368 9.48708 21.822 9.32642 21.6693 9.20749C21.5167 9.08857 21.3328 9.01649 21.14 8.99999L15.45 8.16999L12.9 2.99999C12.8181 2.83092 12.6903 2.68833 12.5311 2.58857C12.3719 2.4888 12.1878 2.43588 12 2.43588C11.8121 2.43588 11.6281 2.4888 11.4689 2.58857C11.3097 2.68833 11.1819 2.83092 11.1 2.99999L8.54999 8.15999L2.85999 8.99999C2.67492 9.0263 2.50092 9.10396 2.35774 9.22415C2.21457 9.34435 2.10795 9.50227 2.04999 9.67999C1.99694 9.85367 1.99218 10.0385 2.03622 10.2147C2.08026 10.3909 2.17145 10.5517 2.29999 10.68L6.42999 14.68L5.42999 20.36C5.38962 20.5484 5.40455 20.7445 5.47298 20.9246C5.54141 21.1048 5.66043 21.2613 5.81572 21.3754C5.97101 21.4895 6.15596 21.5563 6.34832 21.5677C6.54068 21.5792 6.73225 21.5348 6.89999 21.44L12 18.77L17.1 21.44C17.2403 21.5192 17.3989 21.5605 17.56 21.56C17.7718 21.5607 17.9784 21.4942 18.15 21.37C18.3051 21.2589 18.4252 21.1056 18.4961 20.9284C18.567 20.7512 18.5857 20.5575 18.55 20.37L17.55 14.69L21.68 10.69C21.8244 10.5677 21.9311 10.4069 21.9877 10.2263C22.0444 10.0458 22.0486 9.85287 22 9.66999ZM15.85 13.67C15.7342 13.7824 15.6474 13.9211 15.5969 14.0744C15.5464 14.2276 15.5338 14.3908 15.56 14.55L16.28 18.75L12.52 16.75C12.3739 16.6777 12.213 16.6401 12.05 16.6401C11.887 16.6401 11.7261 16.6777 11.58 16.75L7.81999 18.75L8.53999 14.55C8.56623 14.3908 8.55356 14.2276 8.50306 14.0744C8.45256 13.9211 8.36574 13.7824 8.24999 13.67L5.24999 10.67L9.45999 10.06C9.62199 10.0375 9.77599 9.97553 9.90849 9.87964C10.041 9.78376 10.148 9.65683 10.22 9.50999L12 5.69999L13.88 9.51999C13.952 9.66683 14.059 9.79376 14.1915 9.88964C14.324 9.98553 14.478 10.0475 14.64 10.07L18.85 10.68L15.85 13.67Z"
                  fill="black"
                />
              </svg>
              Experience
            </p>
            <div className=" text-center  text-2xl ">Associate 3+ years</div>
          </div>
          <div className="CARD-THREE bg-white rounded-md p-4 min-h-[200px]">
            <p className="HEADING font-semibold text-black text-lg flex gap-2 justify-center items-center mb-2 relative ">
              <svg
                className=" absolute left-0"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8333 10.0833H11.9167V6.41668H13.75C13.9931 6.41668 14.2263 6.51325 14.3982 6.68516C14.5701 6.85707 14.6667 7.09023 14.6667 7.33334C14.6667 7.57646 14.7632 7.80962 14.9352 7.98152C15.1071 8.15343 15.3402 8.25001 15.5833 8.25001C15.8264 8.25001 16.0596 8.15343 16.2315 7.98152C16.4034 7.80962 16.5 7.57646 16.5 7.33334C16.5 6.604 16.2103 5.90452 15.6945 5.3888C15.1788 4.87307 14.4793 4.58334 13.75 4.58334H11.9167V2.75001C11.9167 2.5069 11.8201 2.27374 11.6482 2.10183C11.4763 1.92992 11.2431 1.83334 11 1.83334C10.7569 1.83334 10.5237 1.92992 10.3518 2.10183C10.1799 2.27374 10.0833 2.5069 10.0833 2.75001V4.58334H9.16667C8.19421 4.58334 7.26157 4.96965 6.57394 5.65728C5.88631 6.34492 5.5 7.27755 5.5 8.25001C5.5 9.22247 5.88631 10.1551 6.57394 10.8427C7.26157 11.5304 8.19421 11.9167 9.16667 11.9167H10.0833V15.5833H8.25C8.00688 15.5833 7.77373 15.4868 7.60182 15.3149C7.42991 15.143 7.33333 14.9098 7.33333 14.6667C7.33333 14.4236 7.23676 14.1904 7.06485 14.0185C6.89294 13.8466 6.65978 13.75 6.41667 13.75C6.17355 13.75 5.94039 13.8466 5.76849 14.0185C5.59658 14.1904 5.5 14.4236 5.5 14.6667C5.5 15.396 5.78973 16.0955 6.30546 16.6112C6.82118 17.1269 7.52065 17.4167 8.25 17.4167H10.0833V19.25C10.0833 19.4931 10.1799 19.7263 10.3518 19.8982C10.5237 20.0701 10.7569 20.1667 11 20.1667C11.2431 20.1667 11.4763 20.0701 11.6482 19.8982C11.8201 19.7263 11.9167 19.4931 11.9167 19.25V17.4167H12.8333C13.8058 17.4167 14.7384 17.0304 15.4261 16.3427C16.1137 15.6551 16.5 14.7225 16.5 13.75C16.5 12.7775 16.1137 11.8449 15.4261 11.1573C14.7384 10.4697 13.8058 10.0833 12.8333 10.0833ZM10.0833 10.0833H9.16667C8.68044 10.0833 8.21412 9.89019 7.8703 9.54637C7.52649 9.20256 7.33333 8.73624 7.33333 8.25001C7.33333 7.76378 7.52649 7.29746 7.8703 6.95365C8.21412 6.60983 8.68044 6.41668 9.16667 6.41668H10.0833V10.0833ZM12.8333 15.5833H11.9167V11.9167H12.8333C13.3196 11.9167 13.7859 12.1098 14.1297 12.4536C14.4735 12.7975 14.6667 13.2638 14.6667 13.75C14.6667 14.2362 14.4735 14.7026 14.1297 15.0464C13.7859 15.3902 13.3196 15.5833 12.8333 15.5833Z"
                  fill="black"
                />
              </svg>
              Rate
            </p>
            <div className=" text-center  text-2xl font-light ">
              $55-$65/hour
            </div>
          </div>
          <div className="CARD-FOUR bg-white rounded-md p-4 min-h-[200px]">
            <p className="HEADING font-semibold text-black text-lg flex gap-2 justify-center items-center mb-2 relative ">
              <svg
                className="absolute left-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3173 21.7978L11.3175 21.798C11.5077 21.9607 11.7497 22.0501 12 22.0501C12.2497 22.0501 12.4912 21.9611 12.6812 21.7991C12.8682 21.6591 14.7038 20.0684 16.4952 17.8388C18.2898 15.6053 20.05 12.7185 20.05 10C20.05 7.86501 19.2019 5.81746 17.6922 4.30779C16.1825 2.79812 14.135 1.95 12 1.95C9.86501 1.95 7.81746 2.79812 6.30779 4.30779C4.79812 5.81746 3.95 7.86501 3.95 10C3.95 12.7186 5.72281 15.6054 7.52358 17.8389C9.32 20.067 11.1535 21.6559 11.3156 21.7964L11.3173 21.7978ZM12.0001 19.5814C10.939 18.5815 9.46021 17.0215 8.24208 15.2986C7.00937 13.5551 6.05 11.6535 6.05 10C6.05 8.42196 6.67687 6.90856 7.79271 5.79271C8.90856 4.67687 10.422 4.05 12 4.05C13.578 4.05 15.0914 4.67687 16.2073 5.79271C17.3231 6.90856 17.95 8.42196 17.95 10C17.95 11.6536 16.9906 13.5576 15.7579 15.3024C14.5398 17.0265 13.0611 18.5864 12.0001 19.5814ZM12 5.95C11.199 5.95 10.416 6.18753 9.74994 6.63255C9.08392 7.07757 8.56482 7.71009 8.25829 8.45013C7.95175 9.19017 7.87155 10.0045 8.02782 10.7901C8.18409 11.5757 8.56981 12.2974 9.13622 12.8638C9.70262 13.4302 10.4243 13.8159 11.2099 13.9722C11.9955 14.1285 12.8098 14.0482 13.5499 13.7417C14.2899 13.4352 14.9224 12.9161 15.3675 12.2501C15.8125 11.584 16.05 10.801 16.05 10C16.05 8.92587 15.6233 7.89574 14.8638 7.13622C14.1043 6.3767 13.0741 5.95 12 5.95ZM12 11.95C11.6143 11.95 11.2373 11.8356 10.9166 11.6214C10.596 11.4071 10.346 11.1025 10.1984 10.7462C10.0508 10.3899 10.0122 9.99784 10.0875 9.61957C10.1627 9.24131 10.3484 8.89385 10.6211 8.62114C10.8939 8.34843 11.2413 8.16271 11.6196 8.08747C11.9978 8.01223 12.3899 8.05084 12.7462 8.19843C13.1025 8.34603 13.4071 8.59596 13.6214 8.91664C13.8356 9.23731 13.95 9.61433 13.95 10C13.95 10.5172 13.7446 11.0132 13.3789 11.3789C13.0132 11.7446 12.5172 11.95 12 11.95Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.1"
                />
              </svg>
              Location
            </p>
            <div className=" text-center  text-2xl font-light">
              Bozeman, MT USA
            </div>
            <div className=" bg-[#FCCDED]  text-black text-[14px] w-[90px] py-2 rounded-[40px] font-semibold  text-center mx-auto mt-4">
              On-Site
            </div>
          </div>
        </section>
        {/* ends here  */}
        {/* third row  */}
        <section className="grid grid-cols-4 gap-8 mb-4 font-roboto">
          <div className="col-span-3 py-4 px-8 bg-white rounded-md mb-4 ">
            {/* desc part here  */}
            <div>
              <h1 className=" font-bold">About this role</h1>
              <p className="py-4">
                Short overview about job and the way that the candidate would
                fit into the company. Can also include extra instructions for
                the application process if any exist.
              </p>

              <h1 className=" font-bold">Responsibilities</h1>
              <ul className=" list-disc pl-4 py-4">
                <li>specific day to day taks</li>
                <li>deliverables</li>
                <li>work environment requirements</li>
                <li>role within the current team</li>
                <li>etc.</li>
              </ul>
              <h1 className="font-bold">Responsibilities</h1>
              <ul className=" list-disc pl-4 py-4">
                <li>software skills</li>
                <li>technical skills</li>
                <li>soft skills</li>
                <li>other</li>
              </ul>
              <h1 className="font-bold">Qualifications</h1>

              <ul className=" list-disc pl-4 py-4">
                <p>Required</p>
                <li>Education</li>
                <li>License and certifications</li>
                <li>experience needed</li>
              </ul>
              <ul className=" list-disc pl-4 py-4">
                <p>Bonus</p>
                <li>Education</li>
                <li>License and certifications</li>
                <li>experience needed</li>
              </ul>
              <h1 className="font-bold">Rate</h1>
              <ul className=" list-disc pl-4 py-4">
                <li>if available</li>
              </ul>
              <h1 className="font-bold">Time Estimate</h1>
              <ul className=" list-disc pl-4 py-4">
                <li>if available</li>
              </ul>
              <h1 className="font-bold">Work Authorization</h1>
              <ul className=" list-disc pl-4 py-4">
                <li>if available</li>
              </ul>
              <h1 className="font-bold">About Company</h1>
              <p className="py-4">
                Description of company with any uniform info or disclaimer -
                equal hiring opportunity, etc
              </p>
            </div>
            {/* button here  */}
            <div className="flex gap-4 items-center">
              <button className=" px-6 py-2 rounded-full text-white text-xl font-roboto font-bold bg-gradient-to-r from-[#F26A5C] to-orange-400 ">
                Apply on Archslate
              </button>
              <button className="flex gap-2  bg-black  text-white text-xl px-6 py-2 rounded-full font-semibold text-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0015 17.8441L6.18476 20.9021L7.29566 14.4251L2.58982 9.838L9.09314 8.89301L12.0015 3L14.9099 8.89301L21.4132 9.838L16.7074 14.4251L17.8183 20.9021L12.0015 17.8441Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Save
              </button>
              <button className="flex gap-2 bg-black  text-white text-xl px-6 py-2 rounded-full font-semibold text-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9989 7.9997L7.99888 10.9997"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.9989 16.0003L7.99888 13.0003"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.00112 14.0003C7.10569 14.0003 8.00112 13.1049 8.00112 12.0003C8.00112 10.8957 7.10569 10.0003 6.00112 10.0003C4.89655 10.0003 4.00112 10.8957 4.00112 12.0003C4.00112 13.1049 4.89655 14.0003 6.00112 14.0003Z"
                    stroke="white"
                    stroke-width="1.75"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.0011 8.99969C19.1057 8.99969 20.0011 8.10426 20.0011 6.99969C20.0011 5.89513 19.1057 4.99969 18.0011 4.99969C16.8965 4.99969 16.0011 5.89513 16.0011 6.99969C16.0011 8.10426 16.8965 8.99969 18.0011 8.99969Z"
                    stroke="white"
                    stroke-width="1.75"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.0011 19C19.1057 19 20.0011 18.1046 20.0011 17C20.0011 15.8954 19.1057 15 18.0011 15C16.8965 15 16.0011 15.8954 16.0011 17C16.0011 18.1046 16.8965 19 18.0011 19Z"
                    stroke="white"
                    stroke-width="1.75"
                  />
                </svg>
                Share & Refer
              </button>
            </div>
          </div>
          <div className="bg-white rounded-md mb-4 h-[200px] p-4 ">
            <h3 className="font-semibold text-lg pb-2">Job Poster</h3>
            <div className="flex gap-2">
              <div>
                <Image src={profilePic} alt="profile" height={50} width={50} />
              </div>
              <div>
                <p className="font-roboto font-light text-xl">John Carlos</p>
                <p className="font-semibold capitalize ">project manager</p>
              </div>
            </div>

            <button className="flex gap-2 bg-black mx-auto mt-4  text-white text-[14px] px-5 py-2 rounded-[40px] font-semibold items-center justify-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7083 16.5L13.6191 11M8.38096 11L2.29171 16.5M1.83334 6.41666L9.31785 11.6558C9.92393 12.0801 10.227 12.2922 10.5566 12.3744C10.8477 12.4469 11.1523 12.4469 11.4434 12.3744C11.7731 12.2922 12.0761 12.0801 12.6822 11.6558L20.1667 6.41666M6.23334 18.3333H15.7667C17.3068 18.3333 18.0769 18.3333 18.6651 18.0336C19.1826 17.7699 19.6033 17.3493 19.8669 16.8318C20.1667 16.2435 20.1667 15.4735 20.1667 13.9333V8.06666C20.1667 6.52652 20.1667 5.75645 19.8669 5.16819C19.6033 4.65074 19.1826 4.23005 18.6651 3.9664C18.0769 3.66666 17.3068 3.66666 15.7667 3.66666H6.23334C4.6932 3.66666 3.92313 3.66666 3.33487 3.9664C2.81742 4.23005 2.39673 4.65074 2.13308 5.16819C1.83334 5.75645 1.83334 6.52652 1.83334 8.06666V13.9333C1.83334 15.4735 1.83334 16.2435 2.13308 16.8318C2.39673 17.3493 2.81742 17.7699 3.33487 18.0336C3.92313 18.3333 4.6932 18.3333 6.23334 18.3333Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Message
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default job;
