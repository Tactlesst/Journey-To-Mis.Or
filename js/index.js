var map = L.map('map').setView([8.7315, 124.7676], 13); // Centered on Balingasag
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Flags to check if each route is active
var route1Enabled = false;
var route2Enabled = false;
var route3Enabled = false;
var route4Enabled = false;

// Define routing controls for each route
var route1Control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(8.7315, 124.7676), // Balingasag
		L.latLng(8.7750, 124.8000)  // Hardrock
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true
}));

var route2Control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(8.7315, 124.7676), // Balingasag
		L.latLng(8.7500, 124.7850)  // Mambayaan
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true
}));

var route3Control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(8.7315, 124.7676), // Balingasag
		L.latLng(8.7450, 124.7900)  // Route C (replace with actual coordinates)
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true
}));

var route4Control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(8.7315, 124.7676), // Balingasag
		L.latLng(8.7600, 124.7750)  // Route D (replace with actual coordinates)
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true
}));

// Function to disable all routes
function disableAllRoutes() {
	if (route1Enabled) {
		map.removeControl(route1Control);
		document.getElementById('toggleRoute1').textContent = 'Enable Balingasag to Hardrock';
		route1Enabled = false;
	}
	if (route2Enabled) {
		map.removeControl(route2Control);
		document.getElementById('toggleRoute2').textContent = 'Enable Balingasag to Mambayaan';
		route2Enabled = false;
	}
	if (route3Enabled) {
		map.removeControl(route3Control);
		document.getElementById('toggleRoute3').textContent = 'Enable Balingasag to Route C';
		route3Enabled = false;
	}
	if (route4Enabled) {
		map.removeControl(route4Control);
		document.getElementById('toggleRoute4').textContent = 'Enable Balingasag to Route D';
		route4Enabled = false;
	}
}

// Toggle buttons for each route
document.getElementById('toggleRoute1').addEventListener('click', function () {
	if (!route1Enabled) {
		disableAllRoutes();
		route1Control.addTo(map);
		route1Enabled = true;
		this.textContent = 'Disable Balingasag to Hardrock';
	} else {
		map.removeControl(route1Control);
		route1Enabled = false;
		this.textContent = 'Enable Balingasag to Hardrock';
	}
});

document.getElementById('toggleRoute2').addEventListener('click', function () {
	if (!route2Enabled) {
		disableAllRoutes();
		route2Control.addTo(map);
		route2Enabled = true;
		this.textContent = 'Disable Balingasag to Mambayaan';
	} else {
		map.removeControl(route2Control);
		route2Enabled = false;
		this.textContent = 'Enable Balingasag to Mambayaan';
	}
});

document.getElementById('toggleRoute3').addEventListener('click', function () {
	if (!route3Enabled) {
		disableAllRoutes();
		route3Control.addTo(map);
		route3Enabled = true;
		this.textContent = 'Disable Balingasag to Route C';
	} else {
		map.removeControl(route3Control);
		route3Enabled = false;
		this.textContent = 'Enable Balingasag to Route C';
	}
});

document.getElementById('toggleRoute4').addEventListener('click', function () {
	if (!route4Enabled) {
		disableAllRoutes();
		route4Control.addTo(map);
		route4Enabled = true;
		this.textContent = 'Disable Balingasag to Route D';
	} else {
		map.removeControl(route4Control);
		route4Enabled = false;
		this.textContent = 'Enable Balingasag to Route D';
	}
});




L.Routing.errorControl(control).addTo(map);