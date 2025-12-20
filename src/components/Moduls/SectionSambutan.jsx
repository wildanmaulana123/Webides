import React from 'react'
import sambutan from "@/assets/poto-kepalaDesa.png";

const SectionSambutan = () => {
  return (
    <div className="flex p-6">
      <div className=" grid grid-cols-2 h-screen text-wrap">
        <div className="flex justify-center items-center">
          <img
            src={sambutan}
            alt=""
            height="350px"
            width="350px"
            className=" rounded-full"
          />
        </div>
        <div className="flex-col justify-center items-center text-center ">
          <h2 className="font-semibold text-4xl text-[#8D6E63] mt-30">
            SAMBUTAN KEPALA DESA
          </h2>
          <h4 className="mb-20">Ujang Bustomi</h4>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
            culpa voluptatum numquam impedit ea quos illum molestiae
            voluptatem. Eligendi nihil libero ipsam laudantium labore animi
            cupiditate excepturi debitis quod quos sapiente cumque explicabo
            suscipit, asperiores neque cum voluptatum dolorem. Commodi
            cupiditate dolorum voluptatem accusantium maxime illo quod facere
            saepe expedita repellendus ea incidunt, harum, ad sed dolor cum.
            Aut non ipsam, neque molestiae impedit ea repellat quidem nostrum,
            harum similique consectetur deleniti explicabo at maxime id culpa
            architecto. Modi culpa nobis distinctio eos eius commodi
            accusantium rerum nesciunt optio fuga doloremque quo, id vero?
            Pariatur perferendis impedit ipsam alias!
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSambutan