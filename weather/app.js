const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const apikey='2fb427e8fc4a78bfe925d662f6d4a70e';

async function weather(city) {
    const response =fetch(apiurl+ city +`&appid=${apikey}`)

    var data=await (await response).json()
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp+'°C';
    document.querySelector('.humadity').innerHTML=data.main.humidity+'%';
    document.querySelector('.wind').innerHTML=data.wind.speed+'Km/h';
                  

              if (data.weather[0].main === 'Clear') {
                document.querySelector('.weather-icon').src="clear.png";
              }else if (data.weather[0].main ==='Clouds') {
                document.querySelector('.weather-icon').src="clouds.png";
              }else {
                document.querySelector('.weather-icon').src="rain.png";
              } 
            input.value='';
}


const input =document.querySelector('.input');
const search=document.querySelector('.btn');
search.addEventListener('click',(e)=>{
    e.preventDefault()
    weather(input.value);
    input.value='';
});
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        weather(input.value);
        input.value='';
    }
});