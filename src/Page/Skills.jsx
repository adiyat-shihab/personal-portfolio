import { LazyLoadImage } from "react-lazy-load-image-component";

export const Skills = () => {
  return (
    <div className={"bg-black "}>
      <div className={"border-t-[5px] border-red-600 mx-20  "}></div>
      <div className={"p-8 text-white bg-black  py-32"}>
        <div className={"flex-col flex items-center  justify-center"}>
          <h1 className={"font-tomorrow font-bold text-[4rem]"}>Skills</h1>
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
            I am striving to never stop learning and improving
          </p>
        </div>
        <div
          className={
            "bg-red-600 w-[18rem]  py-4 px-2 flex flex-col items-center mx-auto mt-[5rem] rounded border-l-4 border-red-400 "
          }
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon-monitor">
              <path
                id="Shape"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3333 24.0001H26.6666C28.8758 24.0001 30.6666 22.2092 30.6666 20.0001V6.66675C30.6666 4.45761 28.8758 2.66675 26.6666 2.66675H5.33331C3.12417 2.66675 1.33331 4.45761 1.33331 6.66675V20.0001C1.33331 22.2092 3.12417 24.0001 5.33331 24.0001H14.6666V26.6667H10.6666C9.93027 26.6667 9.33331 27.2637 9.33331 28.0001C9.33331 28.7365 9.93027 29.3334 10.6666 29.3334H21.3333C22.0697 29.3334 22.6666 28.7365 22.6666 28.0001C22.6666 27.2637 22.0697 26.6667 21.3333 26.6667H17.3333V24.0001ZM5.33331 5.33341C4.59693 5.33341 3.99998 5.93037 3.99998 6.66675V20.0001C3.99998 20.7365 4.59693 21.3334 5.33331 21.3334H26.6666C27.403 21.3334 28 20.7365 28 20.0001V6.66675C28 5.93037 27.403 5.33341 26.6666 5.33341H5.33331Z"
                fill="white"
              />
            </g>
          </svg>
          <p className={"font-medium font-robotSlab"}>Web Development</p>
          <p className={"font-medium font-robotSlab"}>Mern Stack</p>
        </div>
        <div
          className={"flex items-center justify-center gap-[8rem] py-[5.63rem]"}
        >
          <LazyLoadImage
            height={100}
            className={"w-[9rem]"}
            src={
              "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"
            }
          />
          <LazyLoadImage
            height={100}
            className={"w-[9rem]"}
            src={
              "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
            }
          />
          <LazyLoadImage
            height={100}
            className={"w-[9rem]"}
            src={
              "https://assets-global.website-files.com/62038ffc9cd2db4558e3c7b7/623b38335c7b880db9eff54d_react.svg"
            }
          />
          <LazyLoadImage
            height={100}
            className={"w-[9rem]"}
            src={
              "https://i.ibb.co/r4g6Bqg/png-transparent-circle-js-node-node-js-programming-round-icon-popular-services-brands-vol-icon-remov.png"
            }
          />
        </div>
      </div>
    </div>
  );
};
