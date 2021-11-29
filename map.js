// get access token: https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiYm9iLWJhaWciLCJhIjoiY2t3anZ1ZjB0MW1kaDJwcDh0bWtkNmtydyJ9.IZfkBpVPcPj9RkWwdEJRFw';

// create new map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.101, 42.358],
    zoom: 13
})

// Show a merker/pin on the map
var marker = new mapboxgl.Marker()
    .setLngLat([-71.091542, 42.358862])
    .addTo(map)
