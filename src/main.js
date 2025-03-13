import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Vite로 환경 구성하고 Netlify로 배포하기</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));
