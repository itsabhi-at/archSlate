import Image from "next/image";
import Link from "next/link";

function JobResult({
  image,
  position,
  company,
  location,
  selected,
  status,
  saved,
}) {
  return (
    <div>
      <section className="p-6  bg-white rounded-md mb-4 shadow-md ">
        {selected && (
          <div className="w-full font-bold text-xl text-[#384D98] pb-2 ">
            Status: {status}
          </div>
        )}
        <div className="flex gap-4">
          <div className="border border-black rounded-[3px] h-[162px] w-[144px] relative flex items-center justify-center">
            <Image src={image} alt="logo" className="object-contain p-0 " />
          </div>
          <div className="flex-1">
            {/* first line  */}
            <div className="flex">
              <div className="flex gap-4 items-center">
                <div className=" bg-white  text-black text-[14px] px-4 py-2 rounded-[40px] font-semibold border-black border-[1.5px] ">
                  Architecture
                </div>
                <div className=" bg-[#E7FFCD]  border-[1.5px] border-[#E7FFCD]  text-black text-[14px] px-4 py-2 rounded-[40px] font-semibold ">
                  Freelance
                </div>
                <div className=" bg-[#FFD2ED]  border-[1.5px] border-[#FFD2ED]  text-black text-[14px] px-4 py-2 rounded-[40px] font-semibold ">
                  On-Site
                </div>
                <div className=" bg-[#CCE6FF] border-[1.5px] border-[#CCE6FF]  text-black text-[14px] px-4 py-2 rounded-[40px] font-semibold ">
                  Long-Term
                </div>
              </div>

              {/* svgs  */}
              <div className=" flex flex-1 gap-4 items-center justify-end">
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
                {saved ? (
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
                    <rect x="6" y="4" width="11" height="11" fill="black" />
                    <path
                      d="M5.89561 14.105L12.945 14.0366L6.19756 21.1482L5.89561 14.105Z"
                      fill="black"
                    />
                    <path
                      d="M17.7958 14.105L10.7464 14.0366L17.4938 21.1482L17.7958 14.105Z"
                      fill="black"
                    />
                  </svg>
                ) : (
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
                )}
              </div>
            </div>
            <h1 className="font-bold text-[20px] pt-2">{position}</h1>
            {/* third line */}
            <div className="flex items-center justify-between">
              <p className=" font-semibold">
                {company}
                <span className="px-4">|</span>
                <span className=" font-normal">
                  <svg
                    className="inline-block"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.8168 13.4796L7.81659 13.4793L7.80875 13.486C7.72271 13.5596 7.61322 13.6 7.5 13.6C7.38678 13.6 7.27729 13.5596 7.19125 13.486L7.19095 13.4857C7.09235 13.4003 5.95597 12.4155 4.84333 11.0355C3.72063 9.64307 2.65 7.88174 2.65 6.25C2.65 4.9637 3.16098 3.73008 4.07053 2.82053C4.98008 1.91098 6.2137 1.4 7.5 1.4C8.7863 1.4 10.0199 1.91098 10.9295 2.82053C11.839 3.73008 12.35 4.9637 12.35 6.25C12.35 7.88205 11.2868 9.64353 10.1682 11.0357C9.05383 12.4227 7.91438 13.4071 7.8168 13.4796ZM7.39732 12.3906L7.49974 12.4868L7.6024 12.3909C8.27316 11.7642 9.21814 10.7706 9.99673 9.66858C10.771 8.57273 11.4 7.34306 11.4 6.25C11.4 5.21566 10.9891 4.22368 10.2577 3.49228C9.52633 2.76089 8.53434 2.35 7.5 2.35C6.46566 2.35 5.47368 2.76089 4.74228 3.49228C4.01089 4.22368 3.6 5.21566 3.6 6.25C3.6 7.3431 4.22907 8.57123 5.0033 9.66628C5.78189 10.7675 6.72681 11.761 7.39732 12.3906ZM6.19441 4.29605C6.58087 4.03783 7.03521 3.9 7.5 3.9C8.12326 3.9 8.72099 4.14759 9.1617 4.5883C9.60241 5.02901 9.85 5.62674 9.85 6.25C9.85 6.71479 9.71217 7.16913 9.45395 7.55559C9.19573 7.94205 8.82871 8.24325 8.39931 8.42112C7.9699 8.59898 7.49739 8.64552 7.04154 8.55485C6.58568 8.46417 6.16695 8.24035 5.8383 7.9117C5.50965 7.58305 5.28583 7.16432 5.19515 6.70846C5.10448 6.25261 5.15102 5.7801 5.32888 5.35069C5.50675 4.92129 5.80795 4.55427 6.19441 4.29605ZM6.7222 7.41406C6.95243 7.56789 7.22311 7.65 7.5 7.65C7.8713 7.65 8.2274 7.5025 8.48995 7.23995C8.7525 6.9774 8.9 6.6213 8.9 6.25C8.9 5.97311 8.81789 5.70243 8.66406 5.4722C8.51022 5.24197 8.29157 5.06253 8.03576 4.95657C7.77994 4.85061 7.49845 4.82288 7.22687 4.8769C6.9553 4.93092 6.70584 5.06426 6.51005 5.26005C6.31426 5.45584 6.18092 5.7053 6.1269 5.97687C6.07288 6.24845 6.10061 6.52994 6.20657 6.78576C6.31253 7.04157 6.49197 7.26022 6.7222 7.41406Z"
                      fill="black"
                      stroke="white"
                      stroke-width="0.3"
                    />
                  </svg>{" "}
                  {location}
                </span>
                <span className="px-4">|</span>
                <span className=" font-normal">$50-$65/hour</span>
              </p>

              <p className="font-roboto">Posted: 08/24/2022</p>
            </div>
            {/* fourth block  */}
            <div className="relative">
              <p className="font-semibold pt-2 ">Skill Requirements</p>
              <div className="flex gap-4 pt-[1px]">
                <div className="flex bg-black  text-white text-[14px] px-6 py-[2px] rounded-[40px] font-semibold items-center justify-center">
                  Blender
                </div>
                <div className="flex bg-black  text-white text-[14px] px-6 py-[2px] rounded-[40px] font-semibold items-center justify-center">
                  Rhino
                </div>
                <div className="flex bg-black  text-white text-[14px] px-6 py-[2px] rounded-[40px] font-semibold items-center justify-center">
                  Reavit
                </div>
              </div>
              <Link href={"/job"}>
                <button className="absolute bottom-0 right-0 px-8 py-2 rounded-full text-white text-xl leading-6 font-roboto font-bold bg-gradient-to-r from-[#F26A5C] to-orange-400 ">
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobResult;
