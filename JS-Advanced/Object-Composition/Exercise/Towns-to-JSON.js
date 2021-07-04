function townsToJSON(input) {

  input.shift()
  let result = []

  for (let line of input) {
      let [Town, Latitude, Longitude] = line.split('|').filter(x => x !== '')
      Latitude = Number(Latitude).toFixed(2)
      Longitude = Number(Longitude).toFixed(2)

      result.push({
          Town: Town.trim(), 
          Latitude: Number(Latitude),
          Longitude: Number(Longitude)
      })
  }

  console.log(JSON.stringify(result))
}
