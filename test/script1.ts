export const getPeople = (fetch: any) => {
  console.log("log")
  return fetch("https://swapi.dev/api/people")
  .then((response: Response) => {
    console.log(response)
    response.json()
  })
  .then((data: any) => {
    console.log(data)
    return {
      count: data.count,
      results: data.results
    }
  })
  .catch((err: any) => console.log(err))
}
