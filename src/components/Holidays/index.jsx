import { useState } from "react";
const Holidays = () => {
  const holidays = [
    {
      title: "Summer Vacation 2025",
      duration: "2 Months",
      date: "10-04-2025",
    },
    {
      title: "Summer Vacation 2025",
      duration: "2 Months",
      date: "10-04-2025",
    },
    {
      title: "Summer Vacation 2025",
      duration: "2 Months",
      date: "10-04-2025",
    },
    {
      title: "Summer Vacation 2025",
      duration: "2 Months",
      date: "10-04-2025",
    },
  ];
  return (
    <>
      <div
      
        className="container md:w-[70%] sm:w-[90%] sm:mx-auto mx-auto w-full  py-[2rem]"
      >
        <h1 style={{ textAlign: "center" }}>Your Holiday`s</h1>

        <table style={{ width: "100%" }}>
          <thead>
            <tr
              className="sm:text-[1.2rem] text-[1rem]"
              style={{
                backgroundColor: "#ddd",
                textAlign: "center",
                color: "#000",
              }}
            >
              <td style={{ padding: "14px" }}>S/No</td>
              <td style={{ padding: "14px" }}>Titel</td>
              <td style={{ padding: "14px" }}>Duration</td>
              <td style={{ padding: "14px" }}>Date</td>
            </tr>
          </thead>
          <tbody>
            {holidays.map((item, index) => (
              <tr
                key={index}
                className="sm:text-[1.2rem] text-[1rem] text-black text-center"
              >
                <td className='' style={{borderBottom: '1px solid #ddd',padding:'14px'}}>{index + 1}</td>
                <td style={{borderBottom: '1px solid #ddd',padding:'14px'}}>{item.title}</td>
                <td style={{borderBottom: '1px solid #ddd',padding:'14px'}}>{item.duration}</td>
                <td style={{borderBottom: '1px solid #ddd',padding:'14px'}}>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Holidays;
