import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
const SectionBerita = () => {
    const berita = [
    {
      id: 1,
      title: "Berita Desa 1",
      description: "Deskripsi singkat tentang berita desa 1.",
      src: "https://placehold.co/600x400/png",
    },
    {
      id: 2,
      title: "Berita Desa 2",
      description: "Deskripsi singkat tentang berita desa 2.",
      src: "https://placehold.co/600x400/png",
    },
    {
      id: 3,
      title: "Berita Desa 3",
      description: "Deskripsi singkat tentang berita desa 3.",
      src: "https://placehold.co/600x400/png",
    },
    {
      id: 4,
      title: "Berita Desa 4",
      description: "Deskripsi singkat tentang berita desa 4.",
      src: "https://placehold.co/600x400/png",
    },
  ];

  return (
      <div className="h-screen bg-[#F4F1EC] p-20 mb-10">
        <div className="font-semibold text-4xl text-accent mb-4">
          Berita Desa
        </div>
        <div>Menampilkan Kegiatan Kegiatan Yang dilakukan Di Desa</div>

        <div className="grid grid-cols-4 gap-3 mt-6">
          {berita.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <div >
                <div className="p-6">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full"
                  />
                  <CardHeader className="p-0 mb-4 my-10">
                    <CardTitle className="text-4xl font-bold text-accent">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-lg font-medium text-accent">
                    {item.description}
                  </CardDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
  )
}

export default SectionBerita