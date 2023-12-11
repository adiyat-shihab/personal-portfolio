import { LazyLoadImage } from "react-lazy-load-image-component";

export const Study = () => {
  return (
    <>
      <div className={"bg-black "}>
        <div className={"border-t-[5px] border-red-600 mx-20  "}></div>
        <div className={"p-8  bg-black  py-32 px-44 text-white"}>
          <ol className="relative border-s border-red-600 font-robotSlab dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-white text-sm font-normal leading-none  dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg text-white font-semibold  dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-white text-base font-normal  dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm text-white font-normal leading-none  dark:text-gray-500">
                March 2022
              </time>
              <h3 className="text-lg font-semibold text-white  dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p className="text-base font-normal text-white dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">
                April 2022
              </time>
              <h3 className="text-lg font-semibold text-white dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p className="text-base font-normal text-white dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
