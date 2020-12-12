import React, { useState } from "react";
import "./styles.css";
import imageW from "./websiteW.png";
import imageG from "./GitHub-MarkW.png";
import imageL from "./LinkedINW.png";
import imageI from "./instagramW.png";

const zodiacSigns = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Sagittarius",
  "♒": "Aquarius",
  "♑": "Capricorn",
  "♓": "Pisces",
  "⛎": "Ophiuchus"
};

var zodiacS = Object.keys(zodiacSigns);

function App() {
  const [zodiacText, setUserInput] = useState("");

  function eventHandler(event) {
    var userInput = event.target.value;

    if (zodiacSigns[userInput] === undefined) {
      setUserInput("Kindly enter a Zodiac Sign");
    } else setUserInput(zodiacSigns[userInput]);
  }

  function clickHandler(sign) {
    setUserInput(zodiacSigns[sign]);
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Know your Zodiac Symbol</h1>
      <div className="break-line"></div>
      <input
        placeholder="Enter a Zodiac sign / Click on a symbol below"
        onChange={eventHandler}
      ></input>
      <h2 style={{ color: "white" }}>| {zodiacText} |</h2>
      {zodiacS.map((sign) => {
        return (
          <span onClick={() => clickHandler(sign)} key={sign}>
            {sign}{" "}
          </span>
        );
      })}
      <footer>
        <div className="footer-header">Connect with me on</div>
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <a href="https://vikasvk.netlify.app/">
              <img
                width="20"
                height="20"
                viewBox="0 0 20 20"
                src={imageW}
                alt="Website"
              />
            </a>
          </li>
          <li className="list-item-inline">
            <a href="https://github.com/vikasvk11">
              <img
                width="20"
                height="20"
                viewBox="0 0 20 20"
                src={imageG}
                alt="GitHub"
              />
            </a>
          </li>
          <li className="list-item-inline">
            <a href="https://www.linkedin.com/in/vikas-v-k-a613bb138/">
              <img
                width="20"
                height="20"
                viewBox="0 0 30 30"
                src={imageL}
                alt="LinkedIn"
              />
            </a>
          </li>
          <li className="list-item-inline">
            <a href="https://www.instagram.com/vikasvk_">
              <img
                width="20"
                height="20"
                viewBox="0 0 30 30"
                src={imageI}
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
