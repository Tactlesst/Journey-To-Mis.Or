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
