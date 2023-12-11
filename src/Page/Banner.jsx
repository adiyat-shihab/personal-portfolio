import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Banner.css";
export const Banner = () => {
  return (
    <>
      <div
        className={
          "flex justify-between bg-black items-center py-[11.7rem] px-[9.25rem]"
        }
        style={{
          background:
            "url('https://i.ibb.co/mzkRMtV/tumblr-oumrc9ua2l1qeyvpto2-r1-500-min.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1
            className={
              " heading font-bold font-tomorrow text-5xl uppercase leading-[80px] text-white"
            }
          >
            Hi there <br /> I'M{" "}
            <span className={" text-red-600"}>Adiyat Shihab</span>
          </h1>
          <h2
            className={
              " uppercase mt-4 font-bold font-tomorrow text-5xl text-white"
            }
          >
            frontend Web Developer
          </h2>
        </div>
        <div className={" bg-red-500 pr-4 pb-4 clip   "}>
          <LazyLoadImage
            className={"clip"}
            height={100}
            width={600}
            src={
              "https://i.ibb.co/FqfPqL4/Optimized-IMG-20230218-152950-min-min-1.jpg"
            }
          />
        </div>
      </div>
    </>
  );
};
