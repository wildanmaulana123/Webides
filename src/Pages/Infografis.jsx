import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React from "react";

const infografisData = [
  {
    id: 1,
    title: "Total Penduduk",
    description:
      "1.651 jiwa",
    image: "https://placehold.co/400x300/png",
  },
  {
    id: 2,
    title: "Kepala Keluarga",
    description:
      "450 Jiwa",
    image: "https://placehold.co/400x300/png",
  },
  {
    id: 3,
    title: "Laki-laki",
    description:
      "820 Jiwa",
    image: "https://placehold.co/400x300/png",
  },
  {
    id: 4,
    title: "Perempuan",
    description:
      "831 Jiwa",
    image: "https://placehold.co/400x300/png",
  },
];

const Infografis = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="mb-10">
          <div className="text-4xl text-accent">INFOGRAFIS DESA</div>
          <div className="text-lg text-gray-300">
            Informasi Desa dalam Bentuk Visual
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infografisData.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover p-4"
                  />
                </div>
                <div className="sm:w-1/2 p-6">
                  <CardHeader className="p-0 mb-4 my-10">
                    <CardTitle className="text-2xl text-accent">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-5xl font-bold text-accent">
                    {item.description}
                  </CardDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Infografis;
