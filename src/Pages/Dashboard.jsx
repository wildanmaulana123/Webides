import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import assetsData from "@/lib/data";
import sambutan from "@/assets/poto-kepalaDesa.png";
import CardPengurus from "@/components/Elements/Card";
import CardPenduduk from "@/components/Elements/CardPenduduk";

const AUTOPLAY_MS = 5000;

const Dashboard = () => {
  const [api, setApi] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!api) return;

    // clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      try {
        api.scrollNext();
      } catch (e) {
        // ignore if API becomes unavailable
      }
    }, AUTOPLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api]);

  return (
    <>
      {/* gambar desa start */}

      <div className="p-6">
        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent className="flex items-stretch">
            {assetsData.map((item) => (
              <CarouselItem key={item.id} className="px-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <img src={item.src} alt={item.title} className="w-full h-64 sm:h-80 object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* gambar desa end */}

      {/* sambutan kepala desa start */}

      <div className="flex p-6">
        <div className=" grid grid-cols-2 h-screen text-wrap">
          <div className="flex justify-center items-center">
            <img src={sambutan} alt="" height="350px" width="350px" className=" rounded-full" />
          </div>
          <div className="flex-col justify-center items-center text-center ">
            <h2 className="font-semibold text-4xl text-[#8D6E63] mt-30">SAMBUTAN KEPALA DESA</h2>
            <h4 className="mb-20">Ujang Bustomi</h4>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint culpa voluptatum numquam impedit ea quos illum molestiae voluptatem. Eligendi nihil libero ipsam laudantium labore animi cupiditate excepturi debitis quod quos
              sapiente cumque explicabo suscipit, asperiores neque cum voluptatum dolorem. Commodi cupiditate dolorum voluptatem accusantium maxime illo quod facere saepe expedita repellendus ea incidunt, harum, ad sed dolor cum. Aut non
              ipsam, neque molestiae impedit ea repellat quidem nostrum, harum similique consectetur deleniti explicabo at maxime id culpa architecto. Modi culpa nobis distinctio eos eius commodi accusantium rerum nesciunt optio fuga
              doloremque quo, id vero? Pariatur perferendis impedit ipsam alias!
            </div>
          </div>
        </div>
      </div>

      {/* sambutan kepala desa end */}

      {/* Struktur desa */}

      <div className="h-screen bg-[#F4F1EC]">
        <div className="font-semibold text-4xl text-accent p-6">Struktur Dan Tata Kelola Desa</div>
        <div className="grid grid-cols-4 gap-3">
          <CardPengurus />
          <CardPengurus />
          <CardPengurus />
          <CardPengurus />
        </div>
        <div className="flex justify-end">
          <button className="flex  mt-6 bg-secondary rounded-3xl ">Lihat Lebih Banyak</button>
        </div>
      </div>
      {/* Struktur desa end */}

      {/* Jumlah Penduduk Start */}

      <div className="h-screen p-20">
        <div className="font-semibold text-4xl text-accent mt-4 mb-4">Jumlah Penduduk</div>
        <div className="">
          <CardPenduduk />
        </div>
      </div>
      {/* Jumlah Penduduk End */}

      {/* Berita Desa Start */}
      <div className="h-screen bg-[#F4F1EC] p-20">
        <div className="font-semibold text-4xl text-accent mt-4 mb-4">Berita Desa</div>
        <div>Menampilkan Kegiatan Kegiatan Yang dilakukan Di Desa</div>
      </div>
      {/* Berita Desa End*/}
    </>
  );
};

export default Dashboard;
