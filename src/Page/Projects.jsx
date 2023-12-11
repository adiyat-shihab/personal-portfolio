import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
export const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCarouselChange = (index) => {
    // Update the selected index when the first carousel changes
    setSelectedIndex(index);
  };

  console.log(selectedIndex);
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
          <div className={"flex items-center"}>
            <div
              style={{
                background: "url('https://i.ibb.co/nD9zTJH/Dual-screen.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "580px",
                height: "750px",
                margin: "auto",
              }}
            >
              {" "}
              <Carousel
                showThumbs={false}
                selectedItem={selectedIndex}
                onChange={handleCarouselChange}
              >
                <div>
                  <LazyLoadImage src="https://i.ibb.co/3RwbR1C/5319bec7c7a07dcd80b43f8ee4b76779.jpg" />
                </div>
                <div>
                  <LazyLoadImage src="https://i.ibb.co/c1LvPLZ/Screenshot-263.png" />
                </div>
                <div>
                  <LazyLoadImage src="https://i.ibb.co/QnR3yLQ/pexels-photo-614810.webp" />
                </div>
              </Carousel>
            </div>
            <div
              style={{
                background: "url('https://i.ibb.co/S3yRJWj/Dual-screen.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "650px",
                height: "650px",
                margin: "auto",
              }}
            >
              <Carousel
                showThumbs={false}
                selectedItem={selectedIndex}
                onChange={handleCarouselChange}
              >
                <div>
                  <LazyLoadImage src="https://i.ibb.co/3RwbR1C/5319bec7c7a07dcd80b43f8ee4b76779.jpg" />
                </div>
                <div>
                  <LazyLoadImage src="https://i.ibb.co/c1LvPLZ/Screenshot-263.png" />
                </div>
                <div>
                  <LazyLoadImage src="https://i.ibb.co/QnR3yLQ/pexels-photo-614810.webp" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
