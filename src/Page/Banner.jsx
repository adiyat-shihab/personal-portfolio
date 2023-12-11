import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Banner.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const Banner = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 5000);
  }, [loaded]);
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
          <Link
            to={
              "https://drive.usercontent.google.com/download?id=1b94fCB-V1h3qvJfRaeBsW_TgPwXf4Usf&export=download&authuser=0&confirm=t&uuid=99bf43c9-c43d-4863-95ed-e313ce149ac8&at=APZUnTVhZGWi_ms2Q0WssIc769Z-:1702320324596"
            }
          >
            <button
              className={
                "bg-red-600 clipButton font-medium font-tomorrow py-6 px-6 text-xl mt-6 text-white "
              }
              onClick={() => setLoaded(true)}
            >
              {loaded ? "Downloading..." : "Download Resume"}
            </button>
          </Link>
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
