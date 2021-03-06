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
import Button from "../components/Button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Surah() {
  const params = useParams();
  const [surah, setSurah] = useState({});
  const [currentAyah, setCurrentAyah] = useState(0);
  useEffect(() => {
    getSurahById(params.id).then((res) => {
      setSurah(res.data.data);
      //   console.log(res.data.data);
    });
  }, [params]);

  const nextPlay = () => {
    if (currentAyah + 1 <= surah.numberOfVerses) {
      let x = document.getElementById(`verse${currentAyah + 1}`);
      let y = document.getElementById(`mainVerse${currentAyah + 1}`);
      x.currentTime = 0;
      x.play();
      y.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    } else {
      setCurrentAyah(0);
    }
  };

  return (
    <MainLayout>
      <Container className="mt-20">
        {!surah.name && (
          <div className="mt-8">
            {[...Array(5)].map((item, index) => (
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
                    <div className="overflow-hidden" style={{ width: "250px" }}>
                      <ReactAudioPlayer
                        id={`verse${verse.number.inSurah}`}
                        src={verse.audio.primary}
                        controls={true}
                        onPlay={() => setCurrentAyah(verse.number.inSurah)}
                        onEnded={() => nextPlay()}
                      />
                    </div>
                  </div>
                  <div
                    id={`mainVerse${verse.number.inSurah}`}
                    className="space-y-2"
                  >
                    <p
                      className={`text-right text-3xl leading-snug font-medium ${
                        currentAyah === verse.number.inSurah
                          ? "text-purple-500"
                          : "text-gray-800"
                      }`}
                    >
                      {verse.text.arab}
                    </p>
                    <p className="text-gray-400 font-light text-sm">
                      {verse.translation.id}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-10 w-full flex justify-between items-center">
                <div>
                  {surah.number > 1 && (
                    <Link to={`/surah/${surah.number - 1}`}>
                      <Button className="flex items-center">
                        <FaAngleLeft className="mr-2" /> Prev
                      </Button>
                    </Link>
                  )}
                </div>
                <div>
                  {surah.number < 114 && (
                    <Link to={`/surah/${surah.number + 1}`}>
                      <Button className="flex items-center">
                        Next <FaAngleRight className="ml-2" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </MainLayout>
  );
}
