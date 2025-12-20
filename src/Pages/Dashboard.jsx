import React from "react";
import HeroCarousel from "@/components/Moduls/HeroCarousel";
import SectionSambutan from "@/components/Moduls/SectionSambutan";
import SectionStruktur from "@/components/Moduls/SectionStruktur";
import JumlahPenduduk from "@/components/Moduls/JumlahPenduduk";
import BeritaDesa from "@/components/Moduls/SectionBerita";

const Dashboard = () => {
  return (
    <>
      {/* gambar desa start */}
      <HeroCarousel />
      {/* gambar desa end */}

      {/* sambutan kepala desa start */}
      <SectionSambutan />
      {/* sambutan kepala desa end */}

      {/* Struktur desa */}
      <SectionStruktur />
      {/* Struktur desa end */}

      {/* Jumlah Penduduk Start */}
      <JumlahPenduduk />
      {/* Jumlah Penduduk End */}

      {/* Berita Desa Start */}
      <BeritaDesa />
      {/* Berita Desa End*/}
    </>
  );
};

export default Dashboard;
