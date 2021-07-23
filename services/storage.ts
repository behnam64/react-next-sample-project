const jalali_moment = require("jalali-moment");

export const storageSet = (name: string, val: any, exp?: number): any => {
  if(process.browser) {
    let ob: any = {};
    ob.data = val;
    exp ? ob.date = exp : null;
    localStorage.setItem(name, JSON.stringify(ob))
  } else {
    return null;
  }
}

export const storageGet = (name: string): any => {
  if(process.browser) {
    let a = localStorage.getItem(name);
    if(a) {
      let ob = JSON.parse(a);
      if(ob) {
        if(!ob.date || ob.date > jalali_moment().unix()) {
          return ob.data;
        } else {
          storageRemove(name);
          return null;
        }
      } else {
        storageRemove(name);
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export const storageRemove = (name: string) => {
  if(process.browser) {
    localStorage.removeItem(name);
  }
}