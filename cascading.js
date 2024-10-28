document.addEventListener('DOMContentLoaded', function () {
    const locationDropdown = document.getElementById('location-dropdown');
    
    locationDropdown.addEventListener('change', function () {
        // Hide all buttons
        const buttons = [
            'balingasag-button',
            'gingoog-button',
            'balingoan-button',
            'medina-button',
            'opol-button',
            'initao-button',
            'lugait-button',
            'laguindingan-button',
            'jasaan-button'
        ];

        buttons.forEach(buttonId => {
            document.getElementById(buttonId).style.display = 'none';
        });

        // Show the corresponding button based on the selection
        const selectedValue = this.value;
        if (selectedValue) {
            const buttonId = selectedValue + '-button';
            document.getElementById(buttonId).style.display = 'block';
        }
    });
    
    // Add event listeners for buttons (as you've already done)
    // Example for Balingasag
    document.getElementById('balingasag-button').addEventListener('click', function() {
        console.log('Balingasag button clicked');
        map.setView(balingasagLocation, 13);
        balingasagMarker.openPopup();
    });

    // Repeat for other buttons...
});

// Dark mode toggle
document.getElementById('toggle-switch').addEventListener('change', function() {
    document.body.style.backgroundColor = this.checked ? 'black' : 'white';
});


// Dark mode toggle
document.getElementById('toggle-switch').addEventListener('change', function() {
    document.body.style.backgroundColor = this.checked ? 'black' : 'white';
});
