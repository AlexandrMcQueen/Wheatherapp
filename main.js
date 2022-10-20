
let infoCity = document.querySelector('#searchValue');
let button = document.querySelector('.btn');
let valueOfinput = infoCity.value;
let wheather = {
    "Api": 'ab0a9d2f11bdf9e3aa824df29904fae5',
    fetchWheather: function (city = 'Vinnytsia') {
        let apiKey = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=ab0a9d2f11bdf9e3aa824df29904fae5&units=metric&lang=ua';
        fetch(apiKey)
        .then((res) => res.json())
        .then((data) => this.displayWheather(data));
    },
   displayWheather: function (data) {
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        //displaying Data   
        console.log(name,icon,description, temp, humidity, speed);
        document.querySelector('.city').innerHTML ="Погода у " + name;
        document.querySelector('.temp').innerHTML = Math.round(temp) + '°C';
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/`+ icon + `.png`;
        document.querySelector('.description').innerHTML = description+'.';
        document.querySelector('.humidity').innerHTML = `Вологість: ` + humidity + "%.";
        document.querySelector('.wind').innerHTML = 'Швидкість вітру: ' + speed + ' км/год.';    

 },
 
}
wheather.fetchWheather();

button.addEventListener('click',function(){
    let valueOfinput = infoCity.value;
    wheather.fetchWheather(valueOfinput);
    console.log(valueOfinput);
   
    clearButton()
});

infoCity.addEventListener('keyup',function(event){
    
   if(event.key == 'Enter') {
    let valueOfinput = infoCity.value;
    wheather.fetchWheather(valueOfinput);
    console.log(valueOfinput);
   }
  
});

function clearButton(){
    infoCity.value = '';
    infoCity.focus();
  
}

// async function getDate(city = 'Vinnytsia'){
//     try{
//         let apiKey = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=ab0a9d2f11bdf9e3aa824df29904fae5';
//         let apiKeyAnswer = await fetch(apiKey);
//         let answer = await apiKeyAnswer.json();
//         let polute = answer;
//         console.log(polute);    
//      } catch {
//         console.log('Fuck it we ball');
//      }
//      finally {
// 
//      }
// }
// getDate();


window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1500);
  }