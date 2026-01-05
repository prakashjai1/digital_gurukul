
const teacher = [
  {
    image: "./images/teachers/img1.jpg",
    name: "Rahul Singh",
    qua: "MCA(Lucknow University)",
  },
  {
    image: "./images/teachers/img2.jpg",
    name: "Anjali Verma",
    qua: "M.Tech(IIT Kanpur)",
  },
  {
    image: "./images/teachers/img3.jpg",
    name: "Ravi Kumar",
    qua: "MBA(BBD University)",
  },
  {
    image: "./images/teachers/img4.jpg",
    name: "Sonal Gupta",
    qua: "PhD(Delhi University)",
  },
  {
    image: "./images/teachers/img5.jpg",
    name: "Pooja Sharma",
    qua: "MA(JNU)",
  },
  {
    image: "./images/teachers/img6.jpg",
    name: "Vikram Joshi",
    qua: "M.Sc.(IISc Bangalore)",
  },
  {
    image: "./images/teachers/img7.jpg",
    name: "Neha Tiwari",
    qua: "B.tech(IT-BHU)",
  }
];
const Teachers = () => {
  return (
    <>
      <header
        style={{
          width: "100%",
          background:"linear-gradient(45deg, #a492b4 25.000%, #a492b4 25.000%, #8765a6 50.000%, #675091 75.000%, #4b5b74 100.000%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "28px 0",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontFamily: "serif", color: '#fff'}}>
          <i class="ri-presentation-fill"></i>Teachers
        </h1>
      </header>

      <section
        className="md:w-[80%] mx-auto py-[80px] md:flex md:flex-wrap md:gap-5 grid sm:grid-cols-2 grid-cols-1 gap-10 text-center w-[90%]"
      >
        {teacher.map((item, index) => {
          return (
            <div className="md:w-[22%] shadow-lg p-2" key={index}>
              <img src={item.image} alt="" width="100%" />
              <h2 style={{ padding: "0", margin: "0", fontSize: "1.6rem" }}>
                {item.name}
              </h2>
              <p
                style={{
                  padding: "0",
                  margin: ".3rem 0 0 0",
                  fontSize: ".8rem",
                  color: "gray",
                }}
              >
                {item.qua}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Teachers;
