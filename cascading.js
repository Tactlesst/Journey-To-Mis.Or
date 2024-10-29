// Dark mode toggle
document.getElementById('toggle-switch').addEventListener('change', function() {
    // When the toggle switch is checked (ON), set light mode (white background)
    document.body.style.backgroundColor = this.checked ? 'white' : 'black';
});
