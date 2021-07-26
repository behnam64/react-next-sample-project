
if(window) {
  function fontsize() {
    let size = window.getComputedStyle(Array.from(document.getElementsByTagName("html"))[0]).fontSize;
    size = parseInt(size.split("px")[0]);
    size = 16 / size;
    let style = `
      html {
        font-size: ${Math.floor(16 * size)}px !important;
      }
      @media only screen and (max-width: 700px) {
        html {font-size: ${Math.floor(15 * size)}px !important;}
      }
      @media only screen and (max-width: 344px) {
        html {font-size: ${Math.floor(14 * size)}px !important;}
      }
      @media only screen and (max-width: 322px) {
        html {font-size: ${Math.floor(13 * size)}px !important;}
      }
      @media only screen and (max-width: 299px) {
        html {font-size: ${Math.floor(12 * size)}px !important;}
      }
      @media only screen and (max-width: 276px) {
        html {font-size: ${Math.floor(11 * size)}px !important;}
      }
      @media only screen and (max-width: 253px) {
        html {font-size: ${Math.floor(10 * size)}px !important;}
      }
      @media only screen and (max-width: 230px) {
        html {font-size: ${Math.floor(9 * size)}px !important;}
      }
      @media only screen and (max-width: 207px) {
        html {font-size: ${Math.floor(8 * size)}px !important;}
      }
    `;
    document.head.insertAdjacentHTML("afterbegin", `<style id="fontsize-styles">${style}</style>`);
  }
  fontsize();
  function get() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
    return os;
  }
  var os = get();
  if(os === 'Mac OS' || os === 'Windows' || os === 'Linux') {
    var element = Array.from(document.getElementsByTagName("html"));
    element[0].classList.add("scroll-bar");
  }
}
