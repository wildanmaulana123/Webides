import React from "react";
import logo from "../../assets/logo-desa.png";

const data = [
  { id: 1, label: "Home", href: "/home" },
  { id: 2, label: "Profile Desa", href: "/profile" },
  { id: 3, label: "Infografis", href: "/infografis" },
  { id: 4, label: "Berita", href: "/berita" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-2 bg-[#2E7D32] shadow-md">
      <div className="flex flex-row items-center">
        <img 
          src={logo} 
          alt="Logo Desa" 
          className="w-[70px] h-[70px] object-contain"
        />
        <div>
          <div>
            <h1 className="text-white text-2xl font-bold ml-1">Desa Sindangjaya</h1>
          </div>
          <div>
            <p className="text-white text-sm ml-1">Kabupaten Tasikmalaya</p>
          </div>
        </div>
      </div>
      
      <ul className="flex gap-7 font-semibold mr-20">
        {data.map((link) => (
          <li key={link.id}>
            <a 
              href={link.href} 
              className="text-2xl text-white hover:underline decoration-2 underline-offset-4 transition-all duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
