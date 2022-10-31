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

// function destination(city2, landmark2, season2) {
//     this.city2Name = city2;
//     this.landmark2Name = landmark2;
//     this.season2Name = season2;
// }

const myFlorida = new destination("Miami", "Gulf Beach", "Summer");
const myAlaska = new destination("Juneau", "Ice Joe Glacier", "Winter");

console.log(myFlorida)
console.log(myAlaska)



// UI Logic

window.addEventListener("load", function () {
    const form = document.getElementById("destination");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
         

        let miami = document.querySelector("div#miami");
        let juneau = document.querySelector("div#juneau");


        let trip = document.getElementById("trip").value;
        console.log(trip)
        // document.getElementById("flow").value;
        // document.getElementById("flow1").value;
        // const input1 = document.querySelector("flow").value;
        // const input2 = document.querySelector("flow1").value;

        miami.setAttribute("class", "hidden");
        juneau.setAttribute("class", "hidden");


        if (trip === "flow") {
            miami.removeAttribute('class')
        } else if (trip === "flow1") {
            juneau.removeAttribute('class')
        } else {
            return false;
        }



   });

});