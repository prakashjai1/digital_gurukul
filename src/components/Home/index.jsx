import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const benefits = [
  {
    title: "Digital Learning",
    desc: "Interactive tools and smart classrooms for better understanding.",
    icon: "fa-laptop",
  },
  {
    title: "Expert Faculty",
    desc: "Learn from experienced and qualified teachers.",
    icon: "fa-chalkboard-user",
  },
  {
    title: "Flexible Learning",
    desc: "Learn anytime, anywhere with digital access.",
    icon: "fa-clock",
  },
  {
    title: "Concept Clarity",
    desc: "Focus on concept-based learning.",
    icon: "fa-brain",
  },
  {
    title: "Progress Tracking",
    desc: "Track performance with regular assessments.",
    icon: "fa-chart-line",
  },
  {
    title: "Student Support",
    desc: "Dedicated support for every student.",
    icon: "fa-headset",
  },
];

const Home = () => {
  return (
    <>
      <div>
        <header className="grid gap-10 p-10 justify-items-center md:grid-cols-2 md:p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate_animated animate_fadeIn ">
          <div className="flex justify-center items-center">
            <img
              src="./images/Faculty.png"
              alt=""
              className="w-3/5 rounded-full animate__animated animate__backInDown animate_delay-10s border border-solid object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center items-center animate__animated animate__backInDown animate_delay-10s">
            <h1 className="text-6xl font-[700] text-white">Say Hello !</h1>
            <p className="text-2xl text-gray text-center">
              Enjoy a complete digital learning experience that makes education
              smarter, simpler, and more engaging.
            </p>
            <div className="flex gap-5">
              <button className="py-[.7rem] px-[2rem] text-md text-white font-[500]  rounded-[5px] bg-[#596DF0] hover:bg-[crimson]">
                Learn More
              </button>
              <button className="py-[.7rem] px-[2rem] text-md text-black font-[500] rounded-[5px] bg-[transtparent] border border-black ">
                Watch Video
              </button>
            </div>
          </div>
        </header>

        <div className="px-10 py-12 flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Benefits & Advantages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl shadow-sm text-center hover:shadow-lg transition"
              >
                <i
                  className={`fa-solid ${item.icon} text-3xl text-indigo-600 mb-4`}
                ></i>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-24 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <div className="">
            <Swiper className="mySwiper rounded-lg">
              <SwiperSlide>
                <img
                  src="./images/slider/img1.jpg"
                  alt=""
                  className="w-full transition"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/slider/img1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/slider/img1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/slider/img1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/slider/img1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/slider/img1.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="space-y-5 text-white">
            <h2 className="text-3xl text-black font-bold">Campus Portfolio</h2>
            <p className="text-indigo-200 text-lg">
              Inside Our Learning Environment
            </p>

            <p className="text-white/90">
              DigitalGurukul provides a vibrant and technology-enabled campus
              where students learn, collaborate, and grow with confidence.
            </p>

            <div>
              <h4 className="font-semibold">Modern & Interactive Campus</h4>
              <p className="text-sm text-white/80">
                Smart classrooms and digital tools that make learning engaging.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Experienced Faculty</h4>
              <p className="text-sm text-white/80">
                Skilled educators guiding students with personal attention.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Beyond Academics</h4>
              <p className="text-sm text-white/80">
                Focus on skills, confidence, and holistic growth.
              </p>
            </div>

            <p className="text-sm text-indigo-200">
              <b>500+</b> Students &nbsp;•&nbsp; <b>30+</b> Faculty
              &nbsp;•&nbsp; <b>100%</b> Digital
            </p>

            <button className="mt-4 px-6 py-2 bg-indigo-500 rounded hover:bg-indigo-600">
              Explore Campus
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
