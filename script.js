
//Delhi
const tempDelhi = document.getElementsByClassName('tempDelhi')
fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2088&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempDelhi.innerHTML = data.current.temperature_2m
})
.catch(error=>{
  console.log(error)
});

//Bangkok

const tempBangkok = document.getElementsByClassName('tempBangkok')
fetch("https://api.open-meteo.com/v1/forecast?latitude=13.7576&longitude=100.4904&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then((response) => response.json())
.then((data)=>{
tempBangkok.innerHTML = data.current.temperature_2m
})
.catch(error=>{
  console.log(error)
});