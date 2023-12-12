export const Study = () => {
  return (
    <>
      <div className={"bg-black "}>
        <div className={"border-t-[5px] border-red-600 mx-20  "}></div>
        <div className={"flex-col flex items-center  justify-center"}>
          <h1
            className={
              "font-tomorrow font-bold mt-6 px-4 text-white text-[4rem]"
            }
          >
            Study Details
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="12"
            viewBox="0 0 160 12"
            fill="none"
          >
            <path
              d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM148.667 6C148.667 8.94552 151.054 11.3333 154 11.3333C156.946 11.3333 159.333 8.94552 159.333 6C159.333 3.05448 156.946 0.666667 154 0.666667C151.054 0.666667 148.667 3.05448 148.667 6ZM6 7H154V5H6V7Z"
              fill="red"
            />
          </svg>
        </div>
        <div
          className={"p-8  bg-black  py-32 px-4 lg:px-20 xl:px-44 text-white"}
        >
          <ol className="relative border-s border-red-600 font-robotSlab dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-white text-sm font-normal leading-none  dark:text-gray-500">
                2022
              </time>
              <h3 className="text-lg text-white font-semibold  dark:text-white">
                Complete HSC
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm text-white font-normal leading-none  dark:text-gray-500">
                2023
              </time>
              <h3 className="text-lg font-semibold text-white  dark:text-white">
                Studying bachelor of business studies
              </h3>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
