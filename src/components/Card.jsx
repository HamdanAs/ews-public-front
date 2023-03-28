import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const WEBSOCKET_PORT = import.meta.env.VITE_WEBSOCKET_PORT;

const socket = io(`http://localhost:${WEBSOCKET_PORT}`);

export function Card({ data }) {
  const [tmaLevel, setTmaLevel] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    let activeTimout;

    socket.on("telemetry", (telemetry) => {
      if (telemetry?.serial_number === data?.serial_number) {
        clearTimeout(activeTimout);
        console.log(telemetry);
        setTmaLevel(telemetry.tma_level);
        setWaterLevel(telemetry.water_level);
        setActive(true);

        activeTimout = setTimeout(() => setActive(false), 30 * 60000);
      }
    });

    return () => clearTimeout(activeTimout);
  }, []);

  return (
    <div className="w-full rounded-xl bg-white relative drop-shadow-md">
      <div className="w-full p-3 bg-[#DD8500] rounded-t-xl flex gap-x-28 items-center justify-between">
        <div className="text-white font-bold text-center">
          <h1 className="text-4xl py-3">{data.serial_number}</h1>
          <div
            className={`${
              isActive ? "bg-[#7ECC7E]" : "bg-gray-600"
            } p-4 text-5xl`}
          >
            {isActive ? "Aktif" : "Nonaktif"}
          </div>
        </div>
        <p className="font-bold text-white w-1/2">{data.description}</p>
      </div>
      <div className="w-full p-3 bg-white rounded-b-xl flex gap-x-28 items-center justify-between">
        <div className="font-bold">
          <h1 className="text-4xl py-3 text-indigo-900">TMA</h1>
          <h1 className="text-5xl mt-3 text-purple-900">{waterLevel} cm</h1>
        </div>
        <div className="flex gap-x-5">
          <h1
            className={`text-4xl font-bold ${
              tmaLevel === 3
                ? "text-green-900"
                : tmaLevel === 2
                ? "text-yellow-900"
                : tmaLevel === 1
                ? "text-red-900"
                : "text-blue-900"
            }`}
          >
            {tmaLevel === 3
              ? "SIAGA 3"
              : tmaLevel === 2
              ? "SIAGA 2"
              : tmaLevel === 1
              ? "SIAGA 1"
              : "AMAN"}{" "}
            <br /> (
            {tmaLevel === 3
              ? "SIAGA"
              : tmaLevel === 2
              ? "WASPADA"
              : tmaLevel === 1
              ? "AWAS"
              : "NORMAL"}
            )
          </h1>
          <div
            className={`w-24 h-24 ${
              tmaLevel === 3
                ? "bg-green-600"
                : tmaLevel === 2
                ? "bg-yellow-300"
                : tmaLevel === 1
                ? "bg-red-600"
                : "bg-blue-600"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
