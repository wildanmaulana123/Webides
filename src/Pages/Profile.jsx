import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const visi = [
  {
    id: 1,
    title: "Visi",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
  },
  {
    id: 2,
    title: "Misi",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
  },
];

const potensiImages = [
  {
    id: 1,
    src: "https://placehold.co/600x400/png",
    alt: "Potensi Desa 1",
  },
  {
    id: 2,
    src: "https://placehold.co/600x400/png",
    alt: "Potensi Desa 2",
  },
  {
    id: 3,
    src: "https://placehold.co/600x400/png",
    alt: "Potensi Desa 3",
  },
];

const Profile = () => {
  return (
    <>
      <div className="bg-secondary py-10">
        <div className="container mx-auto px-4 ">
          {visi.map((item) => (
            <Card className="my-10" key={item.id}>
              <CardHeader>
                <CardTitle className="text-4xl text-center text-accent">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="h-full py-10">
        <div className="mx-32">
          <div className="text-4xl text-accent">BAGAN DESA</div>
          <div className="text-lg text-gray-300">Struktur Organisasi Desa</div>
        </div>
        <img
          src="https://placehold.co/600x400/png"
          alt="Bagan Desa"
          className="mx-auto my-10"
        />
      </div>
      <div className="h-full py-10 bg-secondary">
        <div className="mx-32">
          <div className="text-4xl text-accent">POTENSI DESA</div>
          <div className="text-lg text-gray-300">Menampilkan Potensi Desa</div>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto my-10">
          <CarouselContent>
            {potensiImages.map((image) => (
              <CarouselItem key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Profile;
