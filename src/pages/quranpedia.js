import React, { useState, useEffect } from "react";
import { getAllSurah } from "../core/api";
import MainLayout from "../components/MainLayout";
import Container from "../components/Container";
import MainCard from "../components/MainCard";
import { Link } from "react-router-dom";
import LoadingCard from "../components/LoadingCard";

export default function QuranPedia() {
  const [allSurah, setAllSurah] = useState([]);

  useEffect(() => {
    getAllSurah().then((res) => {
      setAllSurah(res.data.data);
      //   console.log(res.data.data);
    });
  }, []);

  return (
    <MainLayout>
      <Container className="mt-20">
        <MainCard>Quranpedia</MainCard>
        <div className="mt-5 mb-28">
          {allSurah.length === 0 && (
            <div className="mt-8">
              {[...Array(5)].map((item, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          )}
          {allSurah?.map((surah, i) => (
            <Link key={i} to={`/quranpedia/${surah.number}`}>
              <div className="w-full mb-4 rounded-2xl border py-2 px-2 flex">
                <div className="py-5 w-1/3 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-2xl text-center">
                  <p className="text-2xl">{surah.name.short}</p>
                </div>
                <div className="w-2/3 text-left px-3 flex flex-col">
                  <h2 className="font-semibold text-md text-gray-800">
                    {surah.name.transliteration.id}
                  </h2>
                  <p className="text-gray-400 text-xs">
                    {surah.tafsir.id.substr(0, 70)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}
