"use client"

export default function HeroSection(){
    return (
      <section className="container-lg w-full h-screen flex justify-center ">
        <div className=" text-center  flex flex-col items-center justify-center">
          <h1 className="text-center  md-2 text-zinc-900">
            <span className="text-5xl md:text-8xl font-google-sans font-semibold">
              Welcome
            </span>
          </h1>
          <h2 className="text-center mt-2 mb-5 text-zinc-900">
            <span className="text-md md:text-3xl font-lato font-semibold text-shadow-zinc-500">
              Lorem ipsum dolor sit amet.
            </span>
          </h2>
          <div className="flex gap-3 justify-center my-1 md:my-2">
            <button className="hero-cta bg-black text-white border hover:bg-zinc-900 hover:text-slate-100">
              <span className="align-center">Learn more</span>
              <span>
                <svg
                  className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                  />
                </svg>
              </span>
            </button>
            <button className="hero-cta text-gray-800 bg-slate-100 hover:bg-gray-200 hover:text-gray-700">
              <span className="align-center">Contact</span>
              <span>
                <svg
                  className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] text-gray-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    );
}