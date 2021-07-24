import { useEffect, useState } from "react";
import DarkIcon from "./icons/dark-icon";
import LightIcon from "./icons/light-icon";
import { colorSchemeEnum } from "../interfaces/shared";
import { useDispatch, useSelector } from "react-redux";
import { stateInterface } from "../store";

export default function ColorSchemeNav() {
  const dispatch = useDispatch();

  const [colorScheme, setColorScheme] = useState(colorSchemeEnum.light);
  const colorSchemeState = useSelector((state: stateInterface) => state.colorScheme);
  // init
  useEffect(() => {
  }, []);
  
  // onstatechange
  useEffect(() => {
    setColorScheme(colorSchemeState);
  }, [colorSchemeState]);

  // destroy
  useEffect(() => {
    return () => {
    }
  }, []);

  const setDark = () => {
    dispatch({type: 'color-scheme', text: colorSchemeEnum.dark});
    setColorScheme(colorSchemeEnum.dark);
  }

  const setLight = () => {
    dispatch({type: 'color-scheme', text: colorSchemeEnum.light});
    setColorScheme(colorSchemeEnum.light);
  }

  return (
    <div className="color-scheme-nav">
      {/* light button */}
      <button className={`color-scheme-nav__button ${colorScheme === colorSchemeEnum.light ? "color-scheme-nav__button--selected" : ""}`} onClick={setLight}>
        <LightIcon className={`color-scheme-nav__icon ${colorScheme === colorSchemeEnum.light ? "color-scheme-nav__icon--selected" : ""}`}/>
      </button>

      {/* dark button */}
      <button className={`color-scheme-nav__button ${colorScheme === colorSchemeEnum.dark ? "color-scheme-nav__button--selected" : ""}`} onClick={setDark}>
        <DarkIcon className={`color-scheme-nav__icon color-scheme-nav__icon--small ${colorScheme === colorSchemeEnum.dark ? "color-scheme-nav__icon--selected" : ""}`}/>
      </button>
    </div>
  );
}