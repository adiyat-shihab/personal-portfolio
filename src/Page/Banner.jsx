import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Banner.css";
export const Banner = () => {
  return (
    <>
      <div
        className={
          "flex justify-between bg-black items-center py-[11.5rem] px-[9.25rem]"
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
              " font-bold font-tomorrow text-5xl uppercase leading-[80px] text-white"
            }
          >
            Hi there <br /> I'M{" "}
            <span className={"effectName"}>Adiyat Shihab</span>
          </h1>
          <h2
            className={
              " uppercase mt-4 font-bold font-tomorrow text-5xl text-white"
            }
          >
            I'm frontend Web Developer
          </h2>
        </div>
        <div className={" border-b-8 border-r-8 border-red-500"}>
          <LazyLoadImage
            height={100}
            width={600}
            src={"https://i.ibb.co/YP9sVHB/IMG-20230218-152950-min.jpg"}
          />
        </div>
      </div>
    </>
  );
};
