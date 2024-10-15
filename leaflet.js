// Initialize the map centered on Balingasag, Misamis Oriental
var map = L.map('map').setView([8.743003054482337, 124.77559089660646], 13); // Coordinates for Balingasag

// Add OpenStreetMap layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// Marker data for the location
var locationName = "Balingasag, Misamis Oriental";
var locationDetails = "Balingasag is a municipality in the province of Misamis Oriental, Philippines, known for its beautiful beaches and agricultural lands.";

// Get the image from the HTML (from the hidden container)
var imageElement = document.getElementById('popup-image');

// Create content for the popup
function getPopupContent() {
    return `
        <div>
            <h3>${locationName}</h3>
            <p>${locationDetails}</p>
            ${imageElement.outerHTML} <!-- Add the image element from HTML here -->
            <button onclick="window.open('https://en.wikipedia.org/wiki/Balingasag,_Misamis_Oriental', '_blank')">More</button>
        </div>
    `;
}

// Add marker with a permanent popup binding
var marker = L.marker([8.743003054482337, 124.77559089660646]).addTo(map);

// Bind popup content permanently to the marker
marker.bindPopup(getPopupContent());

// Update the popup content dynamically each time it's opened
marker.on('popupopen', function () {
    marker.setPopupContent(getPopupContent());
});

// Add event listener to the redirect button
document.getElementById('redirect-button').addEventListener('click', function() {
    // Set the view to the Balingasag coordinates
    map.setView([8.743003054482337, 124.77559089660646], 13);
});
