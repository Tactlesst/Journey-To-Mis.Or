// Initialize the map centered on Balingasag, Misamis Oriental
const map = L.map('map').setView([8.743003054482337, 124.77559089660646], 10); // Coordinates for Balingasag

// Add OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample location data with images, descriptions, and coordinates
const locations = {
    Balingasag: {
        coords: [8.7523, 124.7662],
        description: "Balingasag is a municipality in Misamis Oriental, Philippines.",
        image: "path/to/balingasag-image.jpg"
    },
    Gingoog: {
        coords: [8.8279, 125.0953],
        description: "Gingoog is another location in Misamis Oriental.",
        image: "path/to/gingoog-image.jpg"
    },
    Balingoan: {
        coords: [8.6580, 124.8590],
        description: "Balingoan is another location in Misamis Oriental.",
        image: "path/to/balingoan-image.jpg"
    },
    // Add remaining locations here with image paths and descriptions
};

const subjectSelect = document.getElementById('subjects');

for (const location in locations) {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    subjectSelect.appendChild(option);
}
let currentMarker;
function setMapView(location) {
    const locData = locations[location];
    if (locData) {
        const { coords, description, image } = locData;

        // Remove previous marker if it exists
        if (currentMarker) {
            map.removeLayer(currentMarker);
        }

        // Set the map view and add a new marker with popup content
        map.setView(coords, 12);
        currentMarker = L.marker(coords).addTo(map).bindPopup(`
            <div>
                <h3>${location}</h3>
                <p>${description}</p>
                <img src="${image}" alt="${location}" width="150">
                <button onclick="window.open('https://en.wikipedia.org/wiki/${location.replace(/\s/g, '_')}', '_blank')">More</button>
            </div>
        `).openPopup();
    }
}

// Event listener for dropdown selection change
subjectSelect.addEventListener('change', function () {
    const selectedLocation = this.value;
    if (selectedLocation) {
        setMapView(selectedLocation);
    }
});
