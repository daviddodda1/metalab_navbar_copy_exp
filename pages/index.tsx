import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import motion from "framer-motion";
import { useState } from "react";
import { css } from "@emotion/css";
import bgimage from "../assets/andre-benz-JnB8Gio4GZo-unsplash.jpg"

// import moon and sun icons from react-icons
import { FaMoon, FaSun } from "react-icons/fa";
import { on } from "events";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const [theme, setTheme] = useState("light");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [hoverText, setHoverText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, tempora repellat natus totam quos illum obcaecati voluptates. Mollitia dicta ipsa debitis adipisci autem est amet, fugit aliquam eius quasi numquam!");

  const [navOpen, setNavOpen] = useState(false);

  const [textColor, setTextColor] = useState("#fff");

  // function to toggle nav menu
  const toggleNav = () => {


    // if nav is open then change the text color to black if light theme and white if dark theme
    if (navOpen) {
      setTextColor(theme === "light" ? "#fff" : "#000");
    } else {
      setTextColor(theme === "light" ? "#000" : "#fff");
    }

    setNavOpen(!navOpen);


  };

  // function to get current time
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  // update time every minute
  setInterval(updateTime, 1000);


  // function to toggle between light and dark mode
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setTextColor(navOpen ? "#fff" : "#000")
    } else {
      setTheme("light");
      setTextColor(navOpen ? "#000" : "#fff")
    }
  };


  return (
    <>

      {/* true background */}
      <div
        className={
          css`
            background: ${theme === "light" ? "#fff" : "#000"};
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            opacity: 1;
            border-radius: 0.5rem;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
      `
        }
      >
        {/* main background image */}

        <div
          className={css`
          background-image: url(${bgimage.src});
          filter: ${theme === "dark" ? "invert(1)" : "none"};
          background-size: ;
          background-position: center;
          height: 100vh;
          width: 100vw;
          position: relative;
          z-index: 1;
          border-radius: 0.2rem;
          

          ${navOpen &&
            `width: 30%;
            height: 70%;
            border-radius: 0.2rem;
          `}
        `}
        ></div>
      </div>



      {/* nav bat */}
      <div className={
        css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      font-size: 1.5rem;
      z-index: 3;
      color: ${textColor}
      ;
    `
      }>
        <div className={
          css`
      width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
      `
        }>
          <div
            className={
              css`
          cursor: pointer;
          font-size: 1.3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1999rem;
          padding: 0rem 0.3rem;
          text-align: center;
          text-decoration: underline;
        `}


            onClick={toggleNav}
          >
            {navOpen ? "close" : "menu"}
          </div>
          <div
            className={
              css`
            display: flex;
            gap: 1rem;
            font-weight: bold;
          `
            }
          >
            David Dodda
          </div>
          <div className={
            css`
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
        `
          }>
            <div
              className={
                css`
            cursor: pointer;
            font-size: 1.25rem;
            display: flex;
            justify-content: center;
            align-items: center;
          `
              }
            >{time}</div>
            <div
              className={
                css`
            cursor: pointer;
            font-size: 1rem;
            border-radius: 50%;
            border: 1px solid ${textColor};
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
              onClick={toggleTheme}

            >{
                theme === "light" ? (
                  <FaMoon onClick={toggleTheme} />
                ) : (
                  <FaSun onClick={toggleTheme} />
                )
              }</div>
          </div>
        </div>
      </div>

      {/* nav menu */}
      {navOpen && (
        <div
          className={
            css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            background: ${theme === "light" ? "#fff0" : "#0000"};
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            color: ${textColor};
            border-radius: 0.5rem;
            width: 100vw;
            height: 100vh;
            gap: 1rem;
            overflow-y: auto;
            overflow-x: hidden;
            transition: 0.5s;
            align-items: center;
          `
          }

        >
          <div
            className={css`
          background-image: url(${bgimage.src});
          filter: ${theme === "dark" ? "invert(1)" : "none"};
          background-size: cover;
          background-position: center;
          height: 100vh;
          position: relative;
          z-index: 1;
          border-radius: 0.2rem;
          transition: filter 0.5s ease, width 0.5s ease, height 0.5s ease, top 0.5s ease, left 0.5s ease, transform 0.5s ease;

          ${navOpen &&
              css`
            width: 30%;
            height: 70%;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 0.2rem;
          `}
        `}
          ></div>
          {/* left menu */}
          <div
            className={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 30%;
          padding: 1rem;
          border-radius: 0.5rem;
        `}
          >
            <div
              className={css`
            padding: 0.5rem;
            font-weight: bold;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background 0.3s;
            &:hover {
              background: rgba(0, 0, 0, 0.1);
            }
          `}
              onMouseEnter={() => setHoverText("👨‍💻 Code conjurer by day, idea alchemist by night. Turning wild ideas into cool projects since '95. Let's build something amazing!")}
            >
              About
            </div>
            <div
              className={css`
            padding: 0.5rem;
            font-weight: bold;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background 0.3s;
            &:hover {
              background: rgba(0, 0, 0, 0.1);
            }
          `}
              onMouseEnter={() => setHoverText("Why don’t scientists trust atoms? Because they make up everything!")}
            >
              Random
            </div>
            <div
              className={css`
            padding: 0.5rem;
            font-weight: bold;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background 0.3s;
            &:hover {
              background: rgba(0, 0, 0, 0.1);
            }
          `}
              onMouseEnter={() => setHoverText("Grace alone, faith alone, Christ alone. In the darkest valleys or the highest peaks, remember that our strength and salvation come from God alone. Soli Deo Gloria.")}
            >
              The Real Shit
            </div>
          </div>
          {/* right menu */}
          <div
            className={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 30%;
          padding: 1rem;
          text-align: right;
        `}
          >
            <div
              className={css`
            padding: 0.5rem;
            line-height: 1.5;
            font-size: 2rem;
            color: ${textColor};
          `}
            >
              {hoverText}
            </div>
          </div>
        </div>
      )}


      {/* photo credits */}
      <div className={
        css`
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          z-index: 1;
        `
      }>
        <h1 className={css`
          
          font-size: 1rem;
          text-align: center;
          margin-top: 1rem;
          color: ${textColor};
        `}>
          Photo by <a href="https://unsplash.com/@trapnation?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andre Benz</a> on <a href="https://unsplash.com/photos/photography-of-railroad-during-nighttime-JnB8Gio4GZo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

        </h1>
      </div>
    </>
  );
}
