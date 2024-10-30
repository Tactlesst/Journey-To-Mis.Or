// Initialize the map centered on Balingasag, Misamis Oriental
const map = L.map('map').setView([8.743003054482337, 124.77559089660646], 10);

// Add OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let currentMarker;

function setMapView(locationElement) {
    // Retrieve data from data-* attributes
    const coords = locationElement.dataset.coords.split(',').map(Number);
    const description = locationElement.dataset.description;
    const image = locationElement.dataset.image;
    const locationName = locationElement.value;

    // Remove previous marker if it exists
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    // Set the map view and add a new marker with popup content
    map.setView(coords, 15); // Set initial view with zoom
    currentMarker = L.marker(coords).addTo(map).bindPopup(`
        <div>
            <h3>${locationName}</h3>
            <p>${description}</p>
            <img src="${image}" alt="${locationName}" width="150">
            <button onclick="window.open('https://en.wikipedia.org/wiki/${locationName.replace(/\s/g, '_')}', '_blank')">More</button>
        </div>
    `).openPopup();

    // Pan to the marker after adding it to ensure the popup stays centered
    map.panTo(coords);
}

// Event listener for dropdown selection change
const subjectSelect = document.getElementById('subjects');
subjectSelect.addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value) {
        setMapView(selectedOption);
    }
});
