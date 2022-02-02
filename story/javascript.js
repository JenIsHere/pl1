let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.7860603, lng: -132.0853276 },
    zoom: 10,
  });
}
