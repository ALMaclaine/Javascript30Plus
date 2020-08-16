const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

const cityData = {
    "Boston": {
        "lat": "30.79186",
        "lng": "-83.78989"
    },
    "Kansas City": {
        "lat": "39.11417",
        "lng": "-94.62746"
    },
    "Tulsa": {
        "lat": "36.15398",
        "lng": "-95.99277"
    },
    "Santa Fe": {
        "lat": "29.37801",
        "lng": "-95.10576"
    },
    "Chicago": {
        "lat": "41.85003",
        "lng": "-87.65005"
    },
    "Dallas": {
        "lat": "41.33619",
        "lng": "-75.96325"
    },
    "Denver": {
        "lat": "40.23315",
        "lng": "-76.13717"
    },
    "Pittsburgh": {
        "lat": "40.44062",
        "lng": "-79.99589"
    },
    "Los Angeles": {
        "lat": "34.05223",
        "lng": "-118.24368"
    },
    "Miami": {
        "lat": "35.69143",
        "lng": "-100.63819"
    }
};


const selectioniContainer = document.getElementById('cities');
selectioniContainer.addEventListener('change', (e) => {
    const value = e.target.value;
    selectedCity = {name: value, ...cityData[value]};
});

let selectedCity = null;

const cityKeys = Object.keys(cityData)
for (let i = 0; i < cityKeys.length; i++) {
    const key = cityKeys[i];
    const city = cityData[key];
    if (i === 0) {
        selectedCity = {name: key, ...city};
    }
    const select = document.createElement('option');
    select.value = key;
    select.innerText = key;
    selectioniContainer.appendChild(select);
}

function bearing(lat1, long1, lat2, long2) {
    const y = Math.sin(long2 - long1) * Math.cos(lat1);
    const x = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(long2 - long1);
    return (Math.atan2(y, x) + 360) % 360;
}

navigator.geolocation.watchPosition((data) => {
    speed.textContent = data.coords.speed;
    const {latitude, longitude} = data.coords;

    const direction = bearing(latitude, longitude, parseFloat(selectedCity['latitude']), parseFloat(selectedCity['longitude']));
    arrow.style.transform = `rotate(${direction}deg)`;
}, (err) => {
    console.error(err);
});
