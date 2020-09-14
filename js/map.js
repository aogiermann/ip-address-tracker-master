
let lat = 0, lng =0;

var map = L.map('map').setView([lat, lng], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [46, 56],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

let Icon = new LeafIcon({ iconUrl: './images/icon-location.svg' });

let marker = L.marker([lat, lng], { icon: Icon }).addTo(map);

function setCoordinates(x, y){
    lat = x;
    lng = y;

    map.setView([lat, lng], 13);

    let newLatLng = new L.LatLng(lat, lng);
    marker.setLatLng(newLatLng);
}