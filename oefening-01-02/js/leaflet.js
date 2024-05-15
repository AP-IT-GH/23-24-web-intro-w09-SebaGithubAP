document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('apMap').setView([51.23009, 4.41616], 17); // Set the initial view to AP-Hogeschool
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Add a marker for AP-Hogeschool
    var marker = L.marker([51.23009, 4.41616]).addTo(map)
      .bindPopup('AP-Hogeschool Ellermanstraat 33')
      .openPopup();
  
    // Add a rectangle to highlight the campus area
    var bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
    var rectangle = L.rectangle(bounds, {color: "red", weight: 1}).addTo(map);
  });