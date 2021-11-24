import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";
import { getSurahById } from "../core/api";
import MainCard from "../components/MainCard";
import { Link } from "react-router-dom";

export default function Tafisr() {
  const params = useParams();
  const [surah, setSurah] = useState({});
  useEffect(() => {
    getSurahById(params.id).then((res) => {
      setSurah(res.data.data);
      //   console.log(res.data.data);
    });
  }, [params]);

  return (
    <MainLayout>
      <Container className="mt-20">
        {surah.name && (
          <>
            <MainCard>
              <h1 className="font-semibold text-xl">
                {surah.name.transliteration.id}
              </h1>
              <p className="text-sm">{surah.name.translation.id}</p>
              <hr className="border-white w-6/12 mx-auto" />
              <p className="text-xs font-light uppercase">
                {surah.revelation.id} • {surah.numberOfVerses} AYAT
              </p>
            </MainCard>

            <div className="mt-8 mb-28">
              <p className="text-gray-400 text-sm leading-normal">
                {surah.tafsir.id}
              </p>
              <div className="w-full flex justify-end">
                <Link to={`/surah/${surah.number}`}>
                  <button className="mt-4 px-6 py-2 text-white text-sm bg-purple-500 rounded-full shadow-xl transform transition-all hover:scale-105 active:scale-95">
                    Read Surah
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </Container>
    </MainLayout>
  );
}
