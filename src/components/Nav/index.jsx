import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const menu = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/teachers",
    name: "Teachers",
  },
  {
    path: "/holidays",
    name: "Holidays",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const handleResize = ()=>{
      if(window.innerWidth >= 768){
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener("resize", handleResize);
  } ,[])
  
  return (
    <>
      <nav
        className="p-[1rem] sticky top-0 z-[50] bg-white"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "2.3rem",
          boxShadow: "0 4px 4px 0 rgba(0,0,0, 0.4)",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#6C63FF",
            fontWeight: "400",
            fontSize: "1.2rem",
          }}
        >
          <h1 className="sm:text-4xl text-2xl font-bold flex gap-1 flex-row items-center">
            <i className="fa-solid fa-chalkboard-user"></i>
            DigitalGurukul
          </h1>
        </Link>

        <ul
          className="hidden md:flex md:items-center md:justify-between md:gap-[25px] list-none" 
        >
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="text-2xl font-[500] text-[#6C63FF] hover:text-cyan-400 transition-colors duration-300"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
        {open && (
        <ul
                className="flex flex-col items-center justify-between gap-[25px] list-none md:hidden mb-4 py-5 absolute w-full bg-white z-[15] top-[70px] left-[0] border-t-[1px]"
        >
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="text-2xl font-[500] text-[#6C63FF] hover:text-cyan-400 transition-colors duration-300"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      </nav>

      
    </>
  );
};

export default Nav;
