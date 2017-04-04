$(document).ready(function(){
    var api_key = "ef0e314e120c47c48e3152659170204&q";
    var loc;

    $.getJSON('http://ipinfo.io', function(d){
        //noinspection JSUnresolvedVariable
        loc= d.location.split(",");

        var apiLink = "http://api.apixu.com/v1/forecast.json?key=";
        var days7 ="&days=7";
        var api = apiLink + api_key + loc[0] + ',' + loc[1]+ days7;

        console.log(api);


    });

});


