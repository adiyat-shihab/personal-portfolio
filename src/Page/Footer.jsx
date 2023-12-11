export const Footer = () => {
  return (
    <>
      <div>
        <hr className=" border-red-600" />
        <div className="flex flex-wrap items-center md:justify-between bg-black justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-white">
              Copyright © <span id="get-current-year">2024</span> by Adiyat
              Shihab
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
