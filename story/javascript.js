let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.684128, lng: -102.028191},
    zoom: 5,
  });
}
