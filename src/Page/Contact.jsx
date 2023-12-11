import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <>
      <div className={"bg-black "}>
        <div className={"border-t-[5px] border-red-600 mx-20  "}></div>
        <div className={"p-8 text-white bg-black  py-32"}>
          <div className={"flex-col flex items-center  justify-center"}>
            <h1 className={"font-tomorrow font-bold text-[4rem]"}>
              Contact With Me
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
              I’m currently Looking For a Job
            </p>
            <div className={"flex justify-center gap-14"}>
              <div className={" space-y-4 py-20 "}>
                <div className={"flex items-center gap-3"}>
                  <img src="https://i.ibb.co/QmxcSpD/phone-1.png" alt="" />
                  <p>+8801643987655</p>
                </div>{" "}
                <div className={"flex items-center gap-3"}>
                  <img src="https://i.ibb.co/nRDJxsL/mail.png" alt="" />
                  <p>adiyatshihab@gmail.com</p>
                </div>{" "}
                <div className={"flex items-center gap-3"}>
                  <img src="https://i.ibb.co/ygSG8Tv/linkedin.png" alt="" />
                  <Link to={"https://www.linkedin.com/in/adiyat-shihab/"}>
                    <p className={"hover:text-red-600"}>adiyat-shihab</p>
                  </Link>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
