import React from "react";
import logo from "../../assets/logo-desa.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 text-center text-white bg-[#2E7D32] p-3 ">
        <div className="flex p-2">
          <img src={logo} alt="" width="20%" height="20%" />
          <div>
            <h3 className="font-semibold mb-3">Pemerintah Desa Sindangjaya</h3>
            <p>Jl. Raya Sindangjaya No.17, Kec. Cicalengka, Kab. Bandung, Jawa Barat 40395</p>
          </div>
        </div>
        <div className="p-2">
          <h3 className="font-semibold mb-3">Hubungi Kami</h3>
          <div className="flex gap-3 p">
            <Icon icon="solar:phone-linear" width="24" height="24" />
            <div>085222564218</div>
          </div>
          <div className="flex gap-3">
            <Icon icon="iconamoon:email-thin" width="24" height="24" />
            <div>desasindangjaya009@gmail.com</div>
          </div>
          <div className="flex gap-3">
            <Icon icon="proicons:instagram" width="24" height="24" />
            <div>desasindangjaya009</div>
          </div>
        </div>
        <div className="p-2">
          <h3 className="font-semibold mb-3">Hubungi Cepat</h3>
          <div>
            <a href="https://wa.me/6281572391110">WildanMaulana</a>
          </div>
        </div>
        <div className="p-2">
          <h3 className="font-semibold mb-3">Lokasi</h3>
          <div style={{ width: "100%", height: "90px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9171656750586!2d108.23456417378578!3d-7.798594577406636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65dcb34e2930a1%3A0x6116c2907541eb5!2sKantor%20Desa%20Sindangjaya!5e0!3m2!1sid!2sid!4v1765709409730!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className=" text-center bg-primary text-white p-5">2025 Power By Wildan Maulana</div>
    </>
  );
};

export default Footer;
