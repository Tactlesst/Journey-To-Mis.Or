// Dark mode toggle
document.getElementById('toggle-switch').addEventListener('change', function() {
    // When the toggle switch is checked (ON), set light mode (white background)
    document.body.style.backgroundColor = this.checked ? 'white' : 'black';
});
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
// Select the video, wave elements, and play icon
const video = document.querySelector('video');
const waves = document.querySelectorAll('.waves');
const playIcon = document.getElementById('playIcon');

// When the play icon is clicked, start the video and hide the icon
playIcon.addEventListener('click', function() {
    video.play();  // Start the video
    playIcon.style.display = 'none';  // Hide the play icon
    waves.forEach(function(wave) {
        wave.style.display = 'none';  // Hide the waves when the video starts
    });
});

// Listen for the 'play' event on the video
video.addEventListener('play', function() {
    // Optionally, hide the waves when the video starts playing
    waves.forEach(function(wave) {
        wave.style.display = 'none';  // Hide the waves when the video starts
    });
});

// Optionally, show the waves again if the video is paused or ended
video.addEventListener('pause', function() {
    waves.forEach(function(wave) {
        wave.style.display = 'block';  // Show the waves when the video is paused
    });
    playIcon.style.display = 'block';  // Show the play icon when the video is paused
});

video.addEventListener('ended', function() {
    waves.forEach(function(wave) {
        wave.style.display = 'block';  // Show the waves when the video ends
    });
    playIcon.style.display = 'block';  // Show the play icon when the video ends
});

// Ensure waves are hidden initially if video is playing
video.addEventListener('play', function() {
    waves.forEach(function(wave) {
        wave.classList.add('hidden');  // Hide the waves when the video plays
    });
});

// Show waves again when the video is paused or ended
video.addEventListener('pause', function() {
    waves.forEach(function(wave) {
        wave.classList.remove('hidden');  // Show the waves when the video is paused
    });
});

video.addEventListener('ended', function() {
    waves.forEach(function(wave) {
        wave.classList.remove('hidden');  // Show the waves when the video ends
    });
});
