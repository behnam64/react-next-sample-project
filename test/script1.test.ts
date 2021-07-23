import { getPeople } from './script1';
import { googleDataBase, googleSearch } from "./script";
const fetch = require("node-fetch")

console.log(getPeople(fetch));

test("google search", () => {
  expect(googleSearch("fun", googleDataBase)).toEqual(["funzi.com"])
  expect(googleSearch("com", googleDataBase).length).toBeLessThanOrEqual(3);
 });

export {};