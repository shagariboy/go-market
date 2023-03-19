import React from "react";

export default function Example() {
  return (
    <>
      <div className="bg-white dark:bg-black">
        <div className="flex flex-col items-center lg:h-5/6 lg:my-24 ">
          <div className="w-11/12 h-auto mx-auto mt-6 mb-6 shadow-lg rounded-lg  transform transition hover:shadow-xl active:-translate-y-0.5 lg:w-6/12 dark:bg-gray-800">
            <div className="mx-6 my-4 font-sans text-center dark:text-gray-400">
              <h3 className="tracking-[0.5rem] text-[#dab303] first:animate-pulse first:transition-all duration-[0.3s] ease-[ease] z-[3] m-0 pb-2">
                <span className="m">G</span>
                <span className="m">O</span>
                <span className="m">I</span>
                <span className="m">N</span>
                <span className="m">G</span>
                <span className="m">&nbsp;</span>
                <span className="m">T</span>
                <span className="m">O</span>
                <span className="m">&nbsp;</span>
                <span className="m">M</span>
                <span className="m">A</span>
                <span className="m">R</span>
                <span className="m">K</span>
                <span className="m">E</span>
                <span className="m">T</span>
                <span className="m">&nbsp;</span>
                <span className="m">M</span>
                <span className="m">A</span>
                <span className="m">D</span>
                <span className="m">E</span>
                <span className="m">&nbsp;</span>
                <span className="m">E</span>
                <span className="m">A</span>
                <span className="m">S</span>
                <span className="m">Y</span>
              </h3>
            </div>
          </div>
          <button className="cursor-pointer float-left min-w-[150px] max-w-[250px] block text-inherit align-middle relative z-[1] m-[1em] border-[none] dark:bg-gray-800 h-12 text-white transition-[background-color] duration-[0.3s,color] delay-[0.3s] px-[43px] py-3 rounded-sm hover:text-white hover:bg-[#1551C3] hover:animate-[anim-moema-1_0.3s_forwards]">
              Enter Market!
            </button>
        </div>
      </div>
      <div className="flex">
        <div className="mx-auto my-4 lg:-my-4">
          <p className="text-center text-gray-400">
            Copyright © 2023{" "}
            <a
              className="font-bold hover:underline hover:text-gray-600"
              href="https://nd-porfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Shagariboy
            </a>
          </p>
          <p className="text-center text-gray-400">
            <a
              className="hover:underline hover:text-gray-600 transform transition"
              href="https://www.linkedin.com/in/nnamdi-ezeh-2658031ba/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
