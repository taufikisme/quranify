import React from "react";
import Container from "../components/Container";
import MainLayout from "../components/MainLayout";
import MainCard from "../components/MainCard";
import { FaGithub, FaInstagram, FaGlobe, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <MainLayout>
      <Container className="mt-20">
        <MainCard>About</MainCard>
        <div className="mt-8 mb-40 space-y-5 text-gray-800">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Quranify v1.0</h1>
            <p className="text-sm text-gray-400">
              Quran and Translation in Bahasa. Learn Quran and recite once
              everyday!
            </p>
            <p className="text-sm text-gray-400">
              This project is crafted for Tugas Akhir Praktikum MDP 2021
              (Computer Engineering, Diponegoro University).
            </p>
            <div className="w-full flex justify-end">
              <a
                href="https://github.com/taufikisme/quranify"
                rel="noreferrer"
                target="_blank"
                className="flex border rounded-md px-2 py-1 shadow-lg transform transition-all active:scale-95"
              >
                <FaGithub />{" "}
                <span className="text-xs text-gray-800 ml-2">
                  View repository
                </span>
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl text-gray-800 font-semibold">
              Quran API Reference
            </h2>
            <p className="text-xs text-gray-400">
              <a
                href="https://api.quran.sutanlab.id"
                className="text-white px-3 py-1 bg-purple-500 shadow-lg rounded-md"
                rel="noreferrer"
                target="_blank"
              >
                https://api.quran.sutanlab.id
              </a>
            </p>
            <p className="text-sm text-gray-400">
              Also, let's give a star for his repository on{" "}
              <a
                href="https://github.com/sutanlab/quran-api"
                className="text-purple-500"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl text-gray-800 font-semibold">
              UI Design Inspiration
            </h2>
            <p className="text-sm text-gray-400">
              All this UI Design are inspired by{" "}
              <a
                href="https://dribbble.com/shots/12671843-Quran-App-Concept-with-Surah-view"
                className="text-purple-500"
                rel="noreferrer"
                target="_blank"
              >
                Tanvir Ahassan Anik
              </a>{" "}
              on Dribble
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl text-gray-800 font-semibold">About Me</h2>
            <div className="flex space-x-3">
              <div className="w-3/12">
                <img src="/images/myself-big.png" alt="Profile" />
              </div>
              <div className="w-9/12">
                <p className="text-gray-400 text-xs">
                  Hello, my name is Moh. Taufik Afandi. A Passionate Full Stack
                  Web Developer based in Kediri, Indonesia. Currently, I'm a
                  Computer Engineering Student at Diponegoro University.
                </p>
                <div className="mt-4 w-full flex justify-end">
                  <div className="flex space-x-3 text-md">
                    <a
                      href="https://github.com/taufikisme"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-purple-500"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.instagram.com/whois.taufik/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-purple-500"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://taufikisme.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-purple-500"
                    >
                      <FaGlobe />
                    </a>
                    <a
                      href="mailto:mohtaufikafandi@gmail.com"
                      className="hover:text-purple-500"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}
