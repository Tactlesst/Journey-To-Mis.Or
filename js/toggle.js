map.on('click', function() {
    map.scrollWheelZoom.enable();
  });
  document.addEventListener('click', function(event) {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer.contains(event.target)) {
      map.scrollWheelZoom.disable();
    }
  });
