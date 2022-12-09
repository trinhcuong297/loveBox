import { useState } from 'react';

import { HeartIcon } from '@heroicons/react/24/solid';

export default function Timer() {
  const [clock, setClock] = useState([0]);
  setInterval(() => {
    const current = Date();
    let seconds: any =
      (Date.parse(current) - Date.parse('06 Jun 2022 08:59:00 GMT+0700')) /
      1000;
    const days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;
    let hours: any = Math.floor(seconds / 3600);
    if (hours < 10) {
      hours = `0${hours}`;
    }
    seconds %= 3600;
    let minutes: any = Math.floor(seconds / 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    seconds %= 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    const result = [days, hours, minutes, seconds];

    setClock(result);
  }, 1000);

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="w-full flex justify-center">
        <h1 className="m-8 text-6xl text-gray-500 font-bold">
          We <span className="text-red-500">love</span>
        </h1>
      </div>
      <div className="w-full flex justify-center p-8 text-gray-200">
        <div className="flex gap-5">
          <div>
            <span className="font-mono text-4xl">
              <span>{clock[0]}</span>
            </span>
            days
          </div>
          <div>
            <span className="font-mono text-4xl">
              <span>{clock[1]}</span>
            </span>
            hours
          </div>
          <div>
            <span className="font-mono text-4xl">
              <span>{clock[2]}</span>
            </span>
            min
          </div>
          <div>
            <span className="font-mono text-4xl">
              <span>{clock[3]}</span>
            </span>
            sec
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <span className="flex">
          <HeartIcon
            className="text-red-400 h-20 w-20 animate-ping absolute"
            aria-hidden="true"
          />
          <HeartIcon className="text-red-400 h-20 w-20" aria-hidden="true" />
        </span>
      </div>
           <div className="w-full flex justify-center mt-4">
        <span className="flex text-gray-500 font-bold justify-center items-center">
          Thí nghiệm đo gia tốc vào lòng em <br/> 8h59.6.6.2022
        </span>
      </div>
    </div>
  );
}
