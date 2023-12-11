import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <div className={"bg-black "}>
        <div className={"border-t-[5px] border-red-600 mx-20  "}></div>
        <div className={"p-8 text-white bg-[#1A1E23]  py-32"}>
          <div className={"flex-col flex items-center  justify-center"}>
            <h1 className={"font-tomorrow font-bold text-[4rem]"}>
              My Projects
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
            <p className={"font-robotSlab mt-6 "}>
              I had the pleasure of working with these awesome projects
            </p>
          </div>
          <div className={"flex gap-14 mt-10 px-32 "}>
            <div className="flex flex-col items-center bg-black  border border-red-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <LazyLoadImage
                className="object-cover ml-4 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://i.ibb.co/R9tgnFD/Screenshot-2023-12-12-034147.png"
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl text-white font-tomorrow font-bold tracking-tight  dark:text-white">
                    Blaze Edu
                  </h5>
                  <p className="mb-3 font-normal text-white font-robotSlab  dark:text-gray-400">
                    A Educational Website using ReactJS, NodeJS, ExpressJS,
                    mongoDB, firebase
                  </p>
                </div>
                <div>
                  <Link to={"https://blaze-edu.web.app/"}>
                    <button className="bg-red-600 font-tomorrow mb-8 ml-4  text-white font-bold py-2 px-4 rounded">
                      Live Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center bg-black  border border-red-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <LazyLoadImage
                className="object-cover ml-4 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://i.ibb.co/37gfR4D/Screenshot-2023-12-12-045621.png"
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-tomorrow text-white font-bold tracking-tight  dark:text-white">
                    Flixify
                  </h5>
                  <p className="mb-3 font-normal font-robotSlab text-white  dark:text-gray-400">
                    A Entertainment Website using ReactJS, NodeJS, ExpressJS,
                    mongoDB, firebase
                  </p>
                </div>
                <div>
                  <Link to={"https://flixify-portfolio.netlify.app/"}>
                    <button className="bg-red-600 font-tomorrow mb-8 ml-4  text-white font-bold py-2 px-4 rounded">
                      Live Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center bg-black  border border-red-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <LazyLoadImage
                className="object-cover ml-4 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://i.ibb.co/84XvV7v/Screenshot-2023-12-12-045803.png"
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-tomorrow text-white font-bold tracking-tight  dark:text-white">
                    Donation
                  </h5>
                  <p className="mb-3 font-robotSlab font-normal text-white  dark:text-gray-400">
                    A Donation Website using ReactJS, NodeJS, ExpressJS,
                    mongoDB, firebase
                  </p>
                </div>
                <div>
                  <Link to={"https://empower-aid.netlify.app/"}>
                    <button className="bg-red-600 font-tomorrow mb-8 ml-4  text-white font-bold py-2 px-4 rounded">
                      Live Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
