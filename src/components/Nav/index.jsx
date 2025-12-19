import { Link } from "react-router-dom";
import "./nav.css";

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
  return (
    <>
      <nav
        className="p-[1rem] sticky top-0 z-[2] bg-white"
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
          <h1 className="text-4xl font-bold flex gap-1">
            <i className="fa-solid fa-chalkboard-user"></i>
            DigitalGurukul
          </h1>
        </Link>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            listStyle: "none",
            gap: 25,
          }}
        >
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="text-2xl font-[500] text-[#6C63FF] "
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <Link to="/teachers" style={{textDecoration:'none',color:'#8765a6',fontWeight: '400', fontSize: '1.2rem'}}>Teachers</Link>
          </li>
          <li>
            <Link to="/holidays" style={{textDecoration:'none',color:'#8765a6',fontWeight: '400', fontSize: '1.2rem'}}>Holidays</Link>
          </li>
          <li>
            <Link to="/contact" className="btnContact" style={{textDecoration:'none',color:'#8765a6',fontWeight: '400', fontSize: '1.2rem'}}>Contact</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
