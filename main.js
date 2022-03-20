// https://openweathermap.org/
// 69ca924e62eb47db2806cb2251da781a


let weather = document.querySelector('#weather')
let body = document.querySelector('body')
let button = document.querySelector('button')

button.addEventListener('click', function() {
    let input = document.querySelector('input')
    let token = '69ca924e62eb47db2806cb2251da781a'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${token}&units=metric`;
    weather.innerHTML = ''
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data['weather'].forEach(element => {
            weather.innerHTML += `
            <h1 class="name text-center text-white mt-3"></h1>
            <hr>
            <h3 class="text-center text-white mt-5">${element['main']}</h3>
            <div class='text-center'> <i class=" text-white fa-3x mt-3"></i></div>
            <br>
            <p class="lead temp text-center text-white mt-3"></p>
            <hr>
            <p class='text-white text-left lat'</p>
            <p class='text-white text-left lon'</p>
            `
            let test = document.querySelector('i')

            if(element['main'] == 'Clouds') {
                console.log(test);
                test.classList.add('fas', 'fa-cloud')
                body.classList.add('cloudimg')
            }else if(element['main'] == 'Clear') {
                test.classList.add('fas', 'fa-sun')
                body.classList.add('clearimg')
            }else if(element['main'] == 'Storm') {
                test.classList.add('fas', 'fa-poo-storm')
                body.classList.add('stormimg')
            }else if(element['main'] == 'Rain') {
                test.classList.add('fas', 'fa-cloud-showers-heavy')
                body.classList.add('rainimg')
            }else if(element['main'] == 'Sun-cloud') {
                test.classList.add('fas', 'fa-cloud-sun')
                body.classList.add('sun-cloud')
            }
        });
        document.querySelector('.temp').innerText = 'Temperature  ' + (data.main.temp).toFixed() + '°C'
        document.querySelector('.name').innerText = data.name
        document.querySelector('.lat').innerText = 'lat ' + data.coord.lat
        document.querySelector('.lon').innerText = 'lon ' + data.coord.lon
    })
})




