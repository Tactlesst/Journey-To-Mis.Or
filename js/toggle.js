map.on('click', function() {
  map.scrollWheelZoom.enable();
});
document.addEventListener('click', function(event) {
  const mapContainer = document.getElementById('map-container');
  if (!mapContainer.contains(event.target)) {
    map.scrollWheelZoom.disable();
  }
  
});
// Disable dragging initially
map.dragging.disable();

const selectElement = document.getElementById('subjects');
const imagePreview = document.getElementById('image-preview');

selectElement.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    
    if (selectedOption.value) {
        const imageUrl = selectedOption.getAttribute('data-image');
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block'; // Show the image
    } else {
        imagePreview.style.display = 'none'; // Hide the image if no location is selected
    }
});
  // Dark mode toggle
  document.getElementById('toggle-switch').addEventListener('change', function() {
    document.body.style.backgroundColor = this.checked ? 'black' : 'white';
});


// Dark mode toggle
document.getElementById('toggle-switch').addEventListener('change', function() {
  // When the toggle switch is checked (ON), set light mode (white background)
  document.body.style.backgroundColor = this.checked ? 'white' : 'black';
});
