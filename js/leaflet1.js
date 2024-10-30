document.addEventListener("DOMContentLoaded", function () {
    function openCity(cityName, color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"; // Hide all tab content
        }
        
        // Remove the background color from all tab links (if needed)
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }
        
        // Show the selected city tab
        document.getElementById(cityName).style.display = "block";
    }

    // Function to initialize the dropdown and open default tab
    function initializeDropdown() {
        const subjectSelect = document.getElementById('subjects');
        const defaultOpenElement = document.getElementById("defaultOpen");

        // Event listener for dropdown selection change
        subjectSelect.addEventListener('change', function () {
            const selectedOption = this.options[this.selectedIndex];
            if (selectedOption.value) {
                // Open the corresponding tab
                openCity(selectedOption.value, 'gray'); 
                setMapView(selectedOption);
            }
        });

        // If default open element is present, select Balingasag by default
        if (defaultOpenElement) {
            subjectSelect.value = defaultOpenElement.value; // Set to default
            openCity(defaultOpenElement.value, 'gray'); // Open the corresponding tab
            setMapView(defaultOpenElement); // Set the map view to the default location
        }
    }

    function setMapView(locationElement) {
        const coords = locationElement.dataset.coords.split(',').map(Number);
        const description = locationElement.dataset.description;
        const image = locationElement.dataset.image;
        const locationName = locationElement.value;

        // Remove previous marker if it exists
        if (currentMarker) {
            map.removeLayer(currentMarker);
        }

        // Set the map view and add a new marker with popup content
        map.setView(coords, 15);
        currentMarker = L.marker(coords).addTo(map).bindPopup(`
            <div>
                <h3>${locationName}</h3>
                <p>${description}</p>
                <img src="${image}" alt="${locationName}" width="150">
                <button onclick="window.open('https://en.wikipedia.org/wiki/${locationName.replace(/\s/g, '_')}', '_blank')">More</button>
            </div>
        `).openPopup();

        map.panTo(coords);
        
    }

    // Initialize the map centered on Balingasag, Misamis Oriental
    const map = L.map('map').setView([8.743003054482337, 124.77559089660646], 10);

    // Add OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let currentMarker;

    // Function to add markers for all locations
    function addAllMarkers() {
        const subjectSelect = document.getElementById('subjects');
        for (let i = 1; i < subjectSelect.options.length; i++) { // Start from 1 to skip the default option
            const option = subjectSelect.options[i];
            const coords = option.dataset.coords.split(',').map(Number);
            const description = option.dataset.description;
            const image = option.dataset.image;
            const locationName = option.value;
    
            // Add marker to the map
            L.marker(coords).addTo(map).bindPopup(`
                <div>
                    <h3>${locationName}</h3>
                    <p>${description}</p>
                    <img src="${image}" alt="${locationName}" class="popup-image">
                    <button onclick="window.open('https://en.wikipedia.org/wiki/${locationName.replace(/\s/g, '_')}', '_blank')">More</button>
                </div>
            `);
        }
    }

    // Call the function to add all markers
    addAllMarkers();

    // Dark mode toggle
    document.getElementById('toggle-switch').addEventListener('change', function () {
        document.body.style.backgroundColor = this.checked ? 'black' : 'white';
        document.body.style.color = this.checked ? 'white' : 'black';
    });

    // Call the initialize function
    initializeDropdown();
});
