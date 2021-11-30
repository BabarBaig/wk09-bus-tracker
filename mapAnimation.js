// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958  , 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
];

// get access token: https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiYm9iLWJhaWciLCJhIjoiY2t3anZ1ZjB0MW1kaDJwcDh0bWtkNmtydyJ9.IZfkBpVPcPj9RkWwdEJRFw';

// create new map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14
})

// Show a merker/pin on the map
var marker = new mapboxgl.Marker()
    .setLngLat([-71.091542, 42.358862])
    .addTo(map)

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
    // TODO: move the marker on the map every 1000ms.
    // Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(() => {
        if (counter >= busStops.length) return;  // bus marker has arrived at destination
        marker.setLngLat(busStops[counter])
        counter++
        move()
    }, 1000)
}
      