// Test map

document.addEventListener('DOMContentLoaded', () => {
    // Je créais la map
    const map = L.map('map').setView([26.357896, 127.783809], 20);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri & contributors'
    }).addTo(map);

    const marker = L.marker([26.358, 127.784]).addTo(map);
    marker.bindPopup('oCoffee, Terre').openPopup();
});