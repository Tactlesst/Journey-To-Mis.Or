document.addEventListener("DOMContentLoaded", function () {
    function openCity(cityName, color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"; 
        }
        
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }
        
        document.getElementById(cityName).style.display = "block";
    }

    function initializeDropdown() {
        const subjectSelect = document.getElementById('subjects');
        const defaultOpenElement = document.getElementById("defaultOpen");


        subjectSelect.addEventListener('change', function () {
            const selectedOption = this.options[this.selectedIndex];
            if (selectedOption.value) {

                openCity(selectedOption.value, ''); 
                setMapView(selectedOption);
            }
        });

        if (defaultOpenElement) {
            subjectSelect.value = defaultOpenElement.value; 
            openCity(defaultOpenElement.value, ''); 
            setMapView(defaultOpenElement); 
        }
    }

 function setMapView(locationElement) {
    const coords = locationElement.dataset.coords.split(',').map(Number);
    const description = locationElement.dataset.description;
    const image = locationElement.dataset.image;
    const locationName = locationElement.value;

    // Log the coordinates for debugging
    console.log('Flying to coordinates:', coords);

    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    // Fly to the specified coordinates
    map.flyTo(coords, 15, { duration: 1 });

    currentMarker = L.marker(coords).addTo(map).bindPopup(`
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

    const map = L.map('map').setView([8.743003054482337, 124.77559089660646], 10);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let currentMarker;

    function addAllMarkers() {
        const subjectSelect = document.getElementById('subjects');
        for (let i = 1; i < subjectSelect.options.length; i++) { 
            const option = subjectSelect.options[i];
            const coords = option.dataset.coords.split(',').map(Number);
            const description = option.dataset.description;
            const image = option.dataset.image;
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
    addAllMarkers();

    document.getElementById('toggle-switch').addEventListener('change', function () {
        document.body.style.backgroundColor = this.checked ? 'black' : 'white';
        document.body.style.color = this.checked ? 'white' : 'black';
    });

    initializeDropdown();
});
