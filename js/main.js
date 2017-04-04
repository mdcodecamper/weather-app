// $(document).ready(function(){
//     var api_key = "ef0e314e120c47c48e3152659170204&q";
//     var loc;
//
//     $.getJSON('http://ipinfo.io', function(d){
//         //noinspection JSUnresolvedVariable
//         loc= d.location.split(",");
//
//         var apiLink = "http://api.apixu.com/v1/forecast.json?key=";
//         var days7 ="&days=7";
//         var api = apiLink + api_key + loc[0] + ',' + loc[1]+ days7;
//
//         console.log(api);
//
//
//     });
//
// });


// var localTime = new Date();
// var hours = localTime.getHours();
//
// function backgroundChange(){
//     if(hours>=0 && hours<=12){
//         $('#bg-image, #weather-box').css('background-image','url(images/sunny-morning.jpg)')
//     }
//     else if(hours>12 && hours<=15){
//         $('#bg-image, #weather-box').css('background-image','url(images/sunny-noon.jpg)')
//     }
//     else if(hours>15 && hours<=18){
//         $('#bg-image, #weather-box').css('background-image','url(images/sunny-afternoon.jpg)')
//     }
//     else if(hours>18 && hours<=21){
//         $('#bg-image, #weather-box').css('background-image','url(images/sunny-evening.jpg)')
//     }
//     else if(hours>21 && hours<=23){
//         $('#bg-image, #weather-box').css('background-image','url(images/sunny-night.jpg)')
//     }
//
//     console.log(hours);
// }

