document.getElementById('toggle-switch').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = 'white'; // Light mode
    } else {
        document.body.style.backgroundColor = '#121212'; // Dark mode
    }
});
map.on('click', function() {
    map.scrollWheelZoom.enable();
  });
  document.addEventListener('click', function(event) {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer.contains(event.target)) {
      map.scrollWheelZoom.disable();
    }
  });