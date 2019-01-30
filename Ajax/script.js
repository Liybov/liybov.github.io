$(document).ready(function() {
    var box = $('#posts');
    // get post
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=351606ed15e88cf282f124bfac44ef6d',
        success: function(data) {
            console.log(data);
            var date = new Date(),
                locale = "en-us",
                month = date.toLocaleString(locale, { month: "long" }),
                day = date.toLocaleString('en', {weekday: 'short'});
                box.append('<div class="left">'+
                           '<h3>' + month + ' ' + date.getDate() + ', ' + date.getFullYear() + ' - ' + day + '</h3>'+
                           '<h2>' + data.name + '</h2>'+
                           '<h2 class="hours">' + date.getHours() + ':' + date.getMinutes() + '</h2>'+
                           '<p>Humidity: ' + data.main.humidity + '%</p>'+
                           '<p>Pressure: ' + data.main.pressure + ' hPa</p>'+
                           '<p>Wind: ' + data.wind.speed + ' km/h SSE</p>'+
                           '</div>'+
                           '<div class="right">'+ 
                           '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" class="icon">'+
                           '<p class="temp">' + data.main.temp + ' °C</p>'+
                           '<p class="description"> ' + data.weather[0].description + ' </p>'+
                           '</div>'
                )
           }
    });
});