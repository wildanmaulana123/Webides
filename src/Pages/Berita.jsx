import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";


const Berita = () => {
    const berita = [
    {
      id: 1,
      title: "Berita Desa 1",
      description: "Desa Sindangjaya mengadakan acara gotong royong membersihkan lingkungan desa.",
      src: "https://placehold.co/600x400/png",
    },
    {
      id: 2,
      title: "Berita Desa 2",
      description: "Desa Sindangjaya mengadakan acara gotong royong membersihkan lingkungan desa.",
      src: "https://placehold.co/600x400/png",
    },
    {
      id: 3,
      title: "Berita Desa 3",
      description: "Desa Sindangjaya mengadakan acara gotong royong membersihkan lingkungan desa.",
      src: "https://placehold.co/600x400/png",
    },
     {
      id: 4,
      title: "Berita Desa 4",
      description: "Desa Sindangjaya mengadakan acara gotong royong membersihkan lingkungan desa.",
      src: "https://placehold.co/600x400/png",
    }
];
  return (
    <>
    <div  className="grid grid-cols-4 gap-3 mt-6 p-8">
        {berita.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <div >
                <div className="p-6">
                  <img
                    src={item.src}
                    alt={item.title}
                    className=""
                  />
                  <CardHeader className="p-0 mb-4 my-10">
                    <CardTitle className="text-3xl font-bold text-accent">
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
    
    </>
  )
}

export default Berita