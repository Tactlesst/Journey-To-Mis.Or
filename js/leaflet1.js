document.addEventListener("DOMContentLoaded", function () {
    let map, currentMarker, routeControl;

    // Initialize the map
    map = L.map('map').setView([8.743003054482337, 124.77559089660646], 19);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Open tab content for the selected city
    function openCity(cityName) {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        const activeTab = document.getElementById(cityName);
        activeTab.style.display = "block";

        // Resize the map when the tab becomes visible
        map.invalidateSize();
        document.getElementById("mySearch").value = "";
        myFunction();
    }

    // Filter map columns based on search input
    function myFunction() {
        const input = document.getElementById("mySearch").value.toUpperCase();
        const activeTab = document.querySelector(".tabcontent:not([style*='display: none'])");
        const columns = activeTab.getElementsByClassName("Map-columns");

        for (let i = 0; i < columns.length; i++) {
            const span = columns[i].getElementsByTagName("span")[0];
            if (span && span.innerHTML.toUpperCase().indexOf(input) > -1) {
                columns[i].style.display = "";
            } else {
                columns[i].style.display = "none";
            }
        }
    }

    // Initialize dropdown menu and set default city view
    function initializeDropdown() {
        const subjectSelect = document.getElementById('subjects');
        const defaultOpenElement = document.getElementById("defaultOpen");

        subjectSelect.addEventListener('change', function () {
            const selectedOption = this.options[this.selectedIndex];
            if (selectedOption.value) {
                openCity(selectedOption.value);
                setMapView(selectedOption);
                removeRoute(); // Clear any existing route when a new location is selected
            }
        });

        if (defaultOpenElement) {
            subjectSelect.value = defaultOpenElement.value;
            openCity(defaultOpenElement.value);
            setMapView(defaultOpenElement);
        }
    }

// Set map view and marker for selected location
function setMapView(locationElement) {
    const coords = locationElement.dataset.coords.split(',').map(Number);
    const description = locationElement.dataset.description;
    const locationName = locationElement.value;

    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    map.flyTo(coords, 15, { duration: 1 });
    currentMarker = L.marker(coords)
        .addTo(map)
        .bindPopup(`
            <div class="popup-content">
                <h3 class="popup-title">${locationName}</h3>
                <p class="popup-description">${description}</p>
                <button 
                    class="popup-button" 
                    onclick="window.open('https://en.wikipedia.org/wiki/${locationName.replace(/\s/g, '_')}', '_blank')"
                >
                    More
                </button>
            </div>
        `).openPopup();
}

    // Add markers for all locations from dropdown
    function addAllMarkers() {
        const subjectSelect = document.getElementById('subjects');
        for (let i = 1; i < subjectSelect.options.length; i++) {
            const option = subjectSelect.options[i];
            const coords = option.dataset.coords.split(',').map(Number);
            const description = option.dataset.description;
            const locationName = option.value;

            L.marker(coords).addTo(map).bindPopup(`
                <div class="popup-content">
                    <h3 class="popup-title">${locationName}</h3>
                    <p class="popup-description">${description}</p>
                    <button 
                        class="popup-button" 
                        onclick="window.open('https://en.wikipedia.org/wiki/${locationName.replace(/\s/g, '_')}', '_blank')"
                    >
                        More
                    </button>
                </div>
            `);
        }
    }

    // Clear any existing route
    function removeRoute() {
        if (routeControl) {
            map.removeControl(routeControl);
            routeControl = null; // Reset the route control
        }
    }

    function toggleRouteToLocation(coords) {
        const balingasagCoords = [8.743003054482337, 124.77559089660646]; // Balingasag coordinates
    
        if (currentMarker) {
            currentMarker.closePopup(); // Close the popup for the current marker
        }
        
        // Check if the route control already exists
        if (routeControl) {
            // Get the current waypoints
            const currentWaypoints = routeControl.getWaypoints();
            

            // Check if the selected route is already active
            if (currentWaypoints.length === 2 && currentWaypoints[1].lat === coords[0] && currentWaypoints[1].lng === coords[1]) {
                // If the selected route is already active, remove it
                removeRoute();
                map.setView(balingasagCoords, 10); // Optionally zoom out to original view
            } else {
                // If a different route is active, remove the current one and create a new one
                removeRoute();
                routeControl = L.Routing.control({
                    waypoints: [
                        L.latLng(balingasagCoords),
                        L.latLng(coords)
                    ],
                    routeWhileDragging: false, // Ensure routing doesn't allow dragging
                    draggableWaypoints: false // Prevent dragging of waypoints
                }).addTo(map);
                // Zoom out to show both waypoints
                const midPoint = [
                    (balingasagCoords[0] + coords[0]) / 2,
                    (balingasagCoords[1] + coords[1]) / 2
                ];
                map.flyTo(midPoint, 12, { duration: 1 }); // Adjust zoom level (12) as needed
            }
        } else {
            // Create a new route to the specified coordinates
            routeControl = L.Routing.control({
                waypoints: [
                    L.latLng(balingasagCoords),
                    L.latLng(coords)
                ],
                routeWhileDragging: false, // Ensure routing doesn't allow dragging
                draggableWaypoints: false // Prevent dragging of waypoints
            }).addTo(map);
            // Zoom out to show both waypoints
            const midPoint = [
                (balingasagCoords[0] + coords[0]) / 2,
                (balingasagCoords[1] + coords[1]) / 2
            ];
            map.flyTo(midPoint, 12, { duration: 1 }); // Adjust zoom level (12) as needed
        }
    }
    
// Event listener for route toggle button
document.getElementById("toggleHardrock").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const hardrockCoords = [8.728517479756501, 124.8142844438553]; // Hardrock coordinates
    toggleRouteToLocation(hardrockCoords);
});
document.getElementById("toggleDelcarmen").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const mambayaanCoords = [8.7884, 124.7737]; // Mambayaan coordinates
    toggleRouteToLocation(mambayaanCoords);
});

    document.getElementById("toggledahilayan").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const mambayaanCoords = [8.2175, 124.8583]; // Replace with Mambayaan's actual coordinates
        toggleRouteToLocation(mambayaanCoords);
    });
    
    
    

    // Initialize everything
    addAllMarkers();
    initializeDropdown();
    document.getElementById("mySearch").addEventListener("input", myFunction);
});

