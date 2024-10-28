document.getElementById('toggle-switch').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = 'white'; // Light mode
    } else {
        document.body.style.backgroundColor = '#121212'; // Dark mode
    }
});
const mapOverlay = document.getElementById('map-overlay');
const mapContainer = document.getElementById('map-container');

// Remove overlay when clicked, enabling map interaction
mapOverlay.addEventListener('click', function () {
    mapOverlay.style.display = 'none';
});

// Re-enable overlay when clicking outside the map
document.addEventListener('click', function (event) {
    if (!mapContainer.contains(event.target)) {
        mapOverlay.style.display = 'block';
    }
});