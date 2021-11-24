import React from "react";
import Container from "../components/Container";
import MainLayout from "../components/MainLayout";
import MainCard from "../components/MainCard";

export default function Settings() {
  return (
    <MainLayout>
      <Container className="mt-20">
        <MainCard>Settings</MainCard>
        <p className="mt-10 text-gray-400">Coming soon ...</p>
      </Container>
    </MainLayout>
  );
}
