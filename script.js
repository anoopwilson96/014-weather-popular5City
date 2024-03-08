
//Delhi
const tempDelhi = document.getElementById('tempDelhi')
fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2088&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempDelhi.innerHTML=data.current.temperature_2m + "&deg;C"
})
.catch(error=>{
  tempDelhi.innerHTML= "error"
});

//Bangkok

const tempBangkok = document.getElementById('tempBangkok')
fetch("https://api.open-meteo.com/v1/forecast?latitude=13.7576&longitude=100.4904&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempBangkok.innerHTML=data.current.temperature_2m + "&deg;C"
})
.catch(error=>{
  tempBangkok.innerHTML= "error"
});

//Dubai

const tempDubai = document.getElementById('tempDubai')
fetch("https://api.open-meteo.com/v1/forecast?latitude=25.0700&longitude=55.1738&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempDubai.innerHTML=data.current.temperature_2m + "&deg;C"
})
.catch(error=>{
  tempDubai.innerHTML= "error"});

//paris

const tempParis = document.getElementById('tempParis')
fetch("https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempParis.innerHTML=data.current.temperature_2m + "&deg;C"
})
.catch(error=>{
  tempParis.innerHTML= "error"});

  //Istanbul

  const tempIstanbul = document.getElementById('tempIstanbul')
fetch("https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempIstanbul.innerHTML=data.current.temperature_2m + "&deg;C"
})
.catch(error=>{
  tempIstanbul.innerHTML= "error"});

  //London

  const tempLondon = document.getElementById('tempLondon')
fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempLondon.innerHTML=data.current.temperature_2m + "&deg;C"
})
.catch(error=>{
  tempLondon.innerHTML= "error"});

  //Sao Paulo

  const tempBrazil = document.getElementById('tempBrazil')
  fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.5505&longitude=-46.6333&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
  .then((response) => response.json())
  .then((data)=>{
  tempBrazil.innerHTML=data.current.temperature_2m + "&deg;C"
  })
  .catch(error=>{
    tempBrazil.innerHTML= "error"});

//Singapore

const tempSingapore = document.getElementById('tempSingapore')
fetch("https://api.open-meteo.com/v1/forecast?latitude=1.3520&longitude=103.8198&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempSingapore.innerHTML=data.current.temperature_2m + "&deg;C"
})
.catch(error=>{
  tempSingapore.innerHTML= "error"});

//Tokyo

const tempTokyo = document.getElementById('tempTokyo')
fetch("https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempTokyo.innerHTML=data.current.temperature_2m + "&deg;C"
})
.catch(error=>{
  tempTokyo.innerHTML= "error"});