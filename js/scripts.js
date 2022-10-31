// Buisness Logic

// let Florida = {city: "Miami", landmarks: "Gulf Beach", season: "Summer"};
// let Alaska = {city: "Juneau", landmarks: "Ice Joe Glacier", season: "Winter"};

// let places = [Florida, Alaska];
// places.forEach(function(place) {
// });

let city = { name: "Miami" }
let landmark = { name: "Gulf Beach" }
let season = { name: "Summer" }
let florida = { name: "Trip to Miami", properties: [city, landmark, season] };

let city2 = { name: "Juneau" }
let landmark2 = { name: "Ice Joe Glacier" }
let season2 = { name: "Winter" }
let alaska = { name: "Trip to Juneau", things: [city2, landmark2, season2] };


function destination(city, landmark, season) {
    this.cityName = city;
    this.landmarkName = landmark;
    this.seasonName = season;
}

function destination(city2, landmark2, season2) {
    this.city2Name = city2;
    this.landmark2Name = landmark2;
    this.season2Name = season2;
}
const myFlorida = new destination("Miami", "Gulf Beach", "Summer");
const myAlaska = new destination("Juneau", "Ice Joe Glacier", "Winter");

console.log(myFlorida)
console.log(myAlaska)



// UI Logic

// const btn = document.querySelector("input[name='btn']:checked").value;

let miamiTrip = document.getElementById("miami");
let juneauTrip = document.getElementById("juneau");

miamiTrip.setAttribute('class', 'hidden');
juneauTrip.setAttribute('class', 'hidden');


    if (florida === miami) {
        miamiTrip.removeAttribute('class', 'hidden')
    } else if (alaska === juneau) {
        juneauTrip.removeAttribute('class', 'hidden')
    }



window.addEventListener("load", function () {
    const form = document.getElementById("radio-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });

});


