import React from 'react';

function Cauro() {
  return (
    <>
      <div className="lg:px-6 xl:px-0 px-6 md:mx-24 pb-4 md:mb-8 h-[85vh]">
        <div className="mx-auto container relative z-0 px-4 xl:px-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 pb-4">
              <h1 className="text-4xl lg:text-6xl xl:text-8xl font-black text-indigo-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
                RF3I
              </h1>
              <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">
                {' '}
                Research for Radio Frequency, Embedded System,...{' '}
              </h2>
              <div className="w-full flex justify-center md:block">
                {/* <button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">Learn More</button> */}
              </div>
            </div>
            <div className="w-fit h-max md:h-auto m-auto items-center overflow-hidden flex ">
              {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"/> */}
              {/* <img className="md:absolute md:w-1/2 md:-ml-28" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Device - Macbook Pro.png" /> */}
              <div className="carousel carousel-center w-full h-[25rem] lg:h-[30rem] space-x-4 rounded-[4rem] bg-gray-100 rounded-box flex items-center">
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cauro;
