import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const SectionStruktur = () => {
    const cardPengurus = [
    {
      id: 1,
      name: "Ujang Bustomi",
      position: "Kepala Desa",
      src: "https://placehold.co/600x400/png",
    }, {
      id: 2,
      name: "Siti Aminah",
      position: "Sekretaris Desa",
      src: "https://placehold.co/600x400/png",
    }, {
      id: 3,
      name: "Dedi Supriadi",
      position: "Bendahara Desa",
      src: "https://placehold.co/600x400/png",
    }, { 
      id: 4,
      name: "Rina Marlina",
      position: "Kasi Pemerintahan",
      src: "https://placehold.co/600x400/png",
    }];
  return (
    <div className="h-screen bg-[#F4F1EC]">
        <div className="font-semibold text-4xl text-accent p-6">
          Struktur Dan Tata Kelola Desa
        </div>

        <div className="grid grid-cols-4 gap-3 mt-6">
           {cardPengurus.map((items) => (
           <Card key={items.id} className="flex flex-col">
              <div >
                <div className="p-6">
                  <img
                    src={items.src}
                    alt={items.title}
                    className=""
                  />
                  <CardHeader className="p-0 mb-4 my-10">
                    <CardTitle className="text-3xl font-bold text-accent">
                      {items.name}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-lg font-medium text-accent">
                    {items.position}
                  </CardDescription>
                </div>
              </div>
            </Card>
        ))}
        </div>
       
        <div className="flex justify-end">
          <button className="flex  mt-6 bg-secondary rounded-3xl ">
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
  )
}

export default SectionStruktur