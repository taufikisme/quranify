import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import HomeSurahCard from "../components/HomeSurahCard";
import LoadingCard from "../components/LoadingCard";
import MainCard from "../components/MainCard";
import MainLayout from "../components/MainLayout";
import { getAllSurah } from "../core/api";

export default function Home() {
  const [allSurah, setAllSurah] = useState([]);

  useEffect(() => {
    getAllSurah().then((res) => {
      setAllSurah(res.data.data);
    });
  }, []);

  return (
    <MainLayout>
      <Container className="mt-20">
        <div className="text-sm text-gray-400">Assalamualaikum..</div>
        <MainCard>Quranify</MainCard>
        <div className="mt-5 mb-28">
          {allSurah.length === 0 && (
            <div className="mt-8">
              {[...Array(5)].map((item, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          )}
          {allSurah?.map((surah, i) => (
            <HomeSurahCard
              className={i === 0 && "border-t"}
              key={i}
              data={surah}
            />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}
