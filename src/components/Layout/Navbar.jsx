import React from "react";
import logo from "../../assets/logo-desa.png";

const data = [
  { id: 1, label: "Home", href: "/home" },
  { id: 2, label: "Profile Desa", href: "/profile" },
  { id: 3, label: "Infografis", href: "/infografis" },
  { id: 4, label: "Berita", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-[#2E7D32] shadow-md">
      <div className="flex-shrink-0">
        <img 
          src={logo} 
          alt="Logo Desa" 
          className="w-[50px] h-[50px] object-contain"
        />
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
