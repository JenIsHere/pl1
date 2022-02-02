let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0201598, lng: -118.6926009 },
    zoom: 10,
  });
}
