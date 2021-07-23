import { stateInterface } from './../store/index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { colorSchemeEnum } from './../interfaces/shared';
import { storageGet, storageSet } from './storage';

let count = 1;

export default function ColorScheme() {
  const dispatch = useDispatch();

  const init = (): void => {
    if(process.browser) {
      let color_scheme: colorSchemeEnum = colorSchemeEnum.light;
      let storage_color_scheme = storageGet("color-scheme");
      if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${colorSchemeEnum.dark})`).matches) {
        color_scheme = colorSchemeEnum.dark;
      }
      storage_color_scheme ? color_scheme = storage_color_scheme : null;
      dispatch({type: 'color-scheme', text: color_scheme});
      window.matchMedia(`(prefers-color-scheme: ${colorSchemeEnum.dark})`).addEventListener('change', e => {
        color_scheme = e.matches ? colorSchemeEnum.dark : colorSchemeEnum.light;
        storage_color_scheme ? color_scheme = storage_color_scheme : null;
        handleColorScheme(color_scheme);
        dispatch({type: 'color-scheme', text: color_scheme});
      });
      setTimeout(() => {
        storage_color_scheme ? color_scheme = storage_color_scheme : null;
        handleColorScheme(color_scheme);
        dispatch({type: 'color-scheme', text: color_scheme});
      }, 2000);
    }
  }
  
  const handleColorScheme = (color_scheme: string): void => {
    if(process.browser) {
      if(color_scheme === colorSchemeEnum.dark) {
        document.body.style.backgroundColor = "#292830";
        document.body.classList.add("dark-theme");
        storageSet("color-scheme", colorSchemeEnum.dark);
      } else if(color_scheme === colorSchemeEnum.light) {
        storageSet("color-scheme", colorSchemeEnum.light);
        document.body.classList.remove("dark-theme");
        document.body.style.backgroundColor = "white";  
      }
    }
  }

  const colorSchemeState = useSelector((state: stateInterface) => state.colorScheme);

  if(count === 1) {
    init();
    count = 2;
  }

  useEffect(() => {
    handleColorScheme(colorSchemeState);
  }, [colorSchemeState]);

  return null;
}


