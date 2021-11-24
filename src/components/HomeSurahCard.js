import React from "react";
import { Link } from "react-router-dom";
import CardNumber from "./CardNumber";

export default function HomeSurahCard({ className, data }) {
  const addClassName = className ? `${className}` : "";
  return (
    <Link to={`/surah/` + data.number}>
      <div className={`w-full py-2 border-b ${addClassName}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <CardNumber number={data.number} />
            <div className="flex flex-col text-left">
              <h2 className="text-sm">{data.name.transliteration.id}</h2>
              <p className="text-xs font-light text-gray-400 uppercase">
                {data.revelation.id} • {data.numberOfVerses} AYAT
              </p>
            </div>
          </div>
          <div className="text-purple-600 text-xl font-semibold">
            {data.name.short}
          </div>
        </div>
      </div>
    </Link>
  );
}
