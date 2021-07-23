import { googleDataBase, googleSearch } from "./script";

test("google search", () => {
  expect(googleSearch("fun", googleDataBase)).toEqual(["funzi.com"])
  expect(googleSearch("com", googleDataBase).length).toBeLessThanOrEqual(3);
 });

export {};