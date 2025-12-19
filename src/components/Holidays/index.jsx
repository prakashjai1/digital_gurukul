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
        className="container"
        style={{
          width: "60%",
          margin: "0 auto",
          paddingBlock: "2rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Your Holiday`s</h1>

        <table style={{ width: "100%" }}>
          <thead>
            <tr
              style={{
                backgroundColor: "#ddd",
                textAlign: "center",
                fontSize: "1.2rem",
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
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  color: "#000",
                }}
              >
                <td style={{borderBottom: '1px solid #ddd',padding:'14px'}}>{index + 1}</td>
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
