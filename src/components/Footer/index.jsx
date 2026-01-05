import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer 
            className="flex flex-col gap-10 items-center justify-center  text-center p-[2rem] md:text-left md:flex  md:flex-row md:gap-[70px] bg-[#03011c] md:items-start"
        >
            <div 
                
                className="w-full flex flex-col gap-3 border-b-[1px] pb-8 md:border-b-[0px]"
            >
                <h2 
                    className="text-[#f5f5f5] font-[600] text-2xl"
                >
                    DigitalGurukul
                </h2>
                <p style={{
                    color: "#ccc"
                }}>
                    DigitalGurukul is a digital learning platform focused on practical web development and modern tech skills.
                </p>
            </div>
            <div 
                className="w-full flex flex-col gap-3 border-b-[1px] pb-8 md:border-b-[0px] md:items-start"
            >
                <h2 className="text-[#f5f5f5] font-[600] text-2xl">Popular Link</h2>
                <ul style={{
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 15
                }}>
                    <li>
                        <Link to="/" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Teacher" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>Teacher</Link>
                    </li>
                    <li>
                        <Link to="/Holidays" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>Holidays</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>ContactUs</Link>
                    </li>
                </ul>
            </div>
            <div className="w-full flex flex-col gap-3 border-b-[1px] pb-8 md:border-b-[0px]">
                <h2 className="text-[#f5f5f5] font-[600] text-2xl">Social profile</h2>
                <ul style={{
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 15
                }}>
                    <li>
                        <Link to="/" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>
                            <i className="ri-youtube-line" style={{ margin: 4 }}></i>
                            youtube
                        </Link>
                    </li>
                    <li>
                        <Link to="/" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>
                            <i className="ri-linkedin-box-fill" style={{ margin: 4 }}></i>
                            Linkedin
                        </Link>
                    </li>
                    <li>
                        <Link to="/" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>
                            <i className="ri-instagram-line" style={{ margin: 4 }}></i>
                            Instagram</Link>
                    </li>
                    <li>
                        <Link to="/" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>
                            <i class="ri-facebook-box-fill" style={{ margin: 4 }}></i>
                            Facebook</Link>
                    </li>
                </ul>
            </div>
            <div className="w-full flex flex-col gap-3">
                <h2 className="text-[#f5f5f5] font-[600] text-2xl text-center md:text-left">Contact Us</h2>
                <form 
                    className="flex flex-col gap-[16px] mt-[18px] justify-center items-center md:items-start"
                >
                    <input
                        className="rounded"
                        required
                        name="fullname"
                        placeholder="Fullname"
                        type="text"
                        style={{
                            boarder: "none",
                            padding: 12,
                            boarderRadius: 4,
                            width: "100%"
                        }}

                    />
                    <input
                        className="rounded"
                        required
                        name="email"
                        placeholder="ffbha@gmail.com"
                        type="email"
                        style={{
                            boarder: "none",
                            padding: 12,
                            boarderRadius: 4,
                            width: "100%"
                        }}
                    >
                    </input>
                    <textarea
                        className="rounded"
                        required
                        name="message"
                        placeholder="write you message"
                        type="text"
                        style={{
                            boarder: "none",
                            padding: 12,
                            boarderRadius: 4,
                            width: "100%"
                        }}
                        rows="3"
                    >
                    </textarea>
                    <button style={{
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: 4,
                        width: "fit-content",
                        background: "#4F46E5",
                        color: "white"
                    }}>
                        summit
                    </button>
                </form>
            </div>


        </footer>


    )
}

export default Footer;
