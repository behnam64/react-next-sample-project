export const googleDataBase = [
  "funzi.com",
  "abidarcity.com",
  "google.com",
  "youtube.com"
]

export const googleSearch = (searchInput: string, db: string[]) => {
  const matches = db.filter(website => website.includes(searchInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
}
