        // Initialize the map centered on Balingasag, Misamis Oriental
        var map = L.map('map').setView([8.743003054482337, 124.77559089660646], 13); // Coordinates for Balingasag

        // Add OpenStreetMap layer
        var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        
        osm.addTo(map);
        
        
        /*-----VARIABLE DATA START------*/

        // Marker data for Balingasag
        var balingasagLocation = [8.743003054482337, 124.77559089660646];
        var balingasagName = "Balingasag, Misamis Oriental";
        var balingasagDetails = "Balingasag is a municipality in Misamis Oriental, Philippines.";

        // Marker data for Medina
        var medinaLocation = [8.911358946831657, 125.02432823181154];
        var medinaName = "Medina, Misamis Oriental";
        var medinaDetails = "Medina is a municipality in Misamis Oriental, Philippines.";

        // Marker data for Gingoog
        var gingoogLocation = [8.82384043206159, 125.10166168212892];
        var gingoogName = "Gingoog, Misamis Oriental";
        var gingoogDetails = "Gingoog is another location in Misamis Oriental.";

        // Marker data for Balingoan
        var balingoanLocation = [9.004070083300151, 124.85047817230226];
        var balingoanName = "Balingoan, Misamis Oriental";
        var balingoanDetails = "Balingoan is another location in Misamis Oriental.";

        // Marker data for Opol
        var opolLocation = [8.521225682813045, 124.5747470855713];
        var opolName = "Opol, Misamis Oriental";
        var opolDetails = "Opol is another location in Misamis Oriental.";

        /*-----VARIABLE DATA END------*/

        /*-----VARIABLE IMAGE START------*/
        // Get the images for each location from the hidden containers
        var balingasagImageElement = document.getElementById('balingasag-image');
        var gingoogImageElement = document.getElementById('gingoog-image');
        var balingoanImageElement = document.getElementById('balingoan-image');
        var medinaImageElement = document.getElementById('medina-image');
        var opolImageElement = document.getElementById('opol-image');
        /*-----VARIABLE IMAGE END------*/

        /*-----CONTENT DESCRIPTION START------*/
        // Create content for the popup with dynamic images
        function getPopupContent(name, details, imageElement) {
            return `
                <div>
                    <h3>${name}</h3>
                    <p>${details}</p>
                    ${imageElement.outerHTML} <!-- Add the specific image element for this location -->
                    <button onclick="window.open('https://en.wikipedia.org/wiki/${name.replace(/\s/g, '_')}', '_blank')">More</button>
                </div>
            `;
        }
        /*-----CONTENT DESCRIPTION END------*/

        /*-----MAP MARKER START------*/
        // Add marker for Balingasag
        var balingasagMarker = L.marker(balingasagLocation).addTo(map);
        balingasagMarker.bindPopup(getPopupContent(balingasagName, balingasagDetails, balingasagImageElement));

        // Add marker for Gingoog
        var gingoogMarker = L.marker(gingoogLocation).addTo(map);
        gingoogMarker.bindPopup(getPopupContent(gingoogName, gingoogDetails, gingoogImageElement));

        // Add marker for Balingoan
        var balingoanMarker = L.marker(balingoanLocation).addTo(map);
        balingoanMarker.bindPopup(getPopupContent(balingoanName, balingoanDetails, balingoanImageElement));

        // Add marker for Medina
        var medinaMarker = L.marker(medinaLocation).addTo(map);
        medinaMarker.bindPopup(getPopupContent(medinaName, medinaDetails, medinaImageElement));
        
        // Add marker for Opol
        var opolMarker = L.marker(opolLocation).addTo(map);
        opolMarker.bindPopup(getPopupContent(opolName, opolDetails, opolImageElement));
        
        /*-----MAP MARKER END------*/

        /*-----BUTTONS FUNCTION START------*/
        // Wait for the DOM to load before adding event listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Event listener to redirect to Balingasag
            document.getElementById('balingasag-button').addEventListener('click', function() {
                console.log('Balingasag button clicked');
                map.setView(balingasagLocation, 13);
                balingasagMarker.openPopup();
            });

            // Event listener to redirect to Gingoog
            document.getElementById('gingoog-button').addEventListener('click', function() {
                console.log('Gingoog button clicked');
                map.setView(gingoogLocation, 13);
                gingoogMarker.openPopup();
            });

            // Event listener to redirect to Balingoan
            document.getElementById('balingoan-button').addEventListener('click', function() {
                console.log('Balingoan button clicked');
                map.setView(balingoanLocation, 13);
                balingoanMarker.openPopup();
            });

            // Event listener to redirect to medina
            document.getElementById('medina-button').addEventListener('click', function() {
                console.log('medina button clicked');
                map.setView(medinaLocation, 13);
                medinaMarker.openPopup();
            });

            // Event listener to redirect to medina
            document.getElementById('opol-button').addEventListener('click', function() {
                console.log('opol button clicked');
                map.setView(opolLocation, 13);
                opolMarker.openPopup();
            });
            
            
        });
                /*-----BUTTONS FUNCTION START------*/