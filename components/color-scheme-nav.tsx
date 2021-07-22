import { useState } from "react";
import DarkIcon from "./icons/dark-icon";
import LightIcon from "./icons/light-icon";
import { colorSchemeEnum } from "../interfaces/shared";

export default function ColorSchemeNav() {
  const [colorScheme, setColorScheme] = useState(colorSchemeEnum.light);

  if (process.browser) {
    // if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${colorSchemeEnum.dark})`).matches) {
    //   colorScheme === colorSchemeEnum.light && setColorScheme(colorSchemeEnum.dark)
    // }
    if (process.browser) {
      if(colorScheme === colorSchemeEnum.dark) {
        document.body.style.backgroundColor = "#292830";
        document.body.classList.add("dark-theme");
      } else if(colorScheme === colorSchemeEnum.light) {
        document.body.classList.remove("dark-theme");
        document.body.style.backgroundColor = "white";   
      }
    }
  }

  const setDark = () => {
    setColorScheme(colorSchemeEnum.dark)
  }
  const setLight = () => {
    setColorScheme(colorSchemeEnum.light)
  }

  return(
    <div className="color-scheme-nav">
      {/* light button */}
      <button className={`color-scheme-nav__button ${colorScheme === colorSchemeEnum.light ? "color-scheme-nav__button--selected" : null}`} onClick={setLight}>
        <LightIcon className={`color-scheme-nav__icon ${colorScheme === colorSchemeEnum.light ? "color-scheme-nav__icon--selected" : null}`}/>
      </button>

      {/* dark button */}
      <button className={`color-scheme-nav__button ${colorScheme === colorSchemeEnum.dark ? "color-scheme-nav__button--selected" : null}`} onClick={setDark}>
        <DarkIcon className={`color-scheme-nav__icon color-scheme-nav__icon--small ${colorScheme === colorSchemeEnum.dark ? "color-scheme-nav__icon--selected" : null}`}/>
      </button>
    </div>
  )
}