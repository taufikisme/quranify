import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";
import { getSurahById } from "../core/api";
import MainCard from "../components/MainCard";
import CardNumber from "../components/CardNumber";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import LoadingCard from "../components/LoadingCard";

export default function Surah() {
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
        {!surah.name && (
          <div className="mt-8">
            {[...Array(5)].map((index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        )}
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
              <Link to={`/quranpedia/${surah.number}`}>
                <button className="mx-auto bg-white rounded-full px-4 py-2 text-xs text-gray-800 shadow-xl">
                  Read Tafsir
                </button>
              </Link>
            </MainCard>

            {surah.preBismillah && (
              <MainCard>
                <p className="text-2xl">{surah.preBismillah.text.arab}</p>
              </MainCard>
            )}

            <div className="mt-8 mb-28">
              {surah.verses.map((verse, i) => (
                <div key={i} className="mb-4">
                  <div className="w-full rounded-xl bg-gray-100 px-4 flex justify-between items-center mb-4">
                    <CardNumber number={verse.number.inSurah} />
                    <ReactAudioPlayer
                      src={verse.audio.primary}
                      controls={true}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-right text-gray-800 text-3xl font-medium">
                      {verse.text.arab}
                    </p>
                    <p className="text-gray-400 font-light text-sm">
                      {verse.translation.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </MainLayout>
  );
}
