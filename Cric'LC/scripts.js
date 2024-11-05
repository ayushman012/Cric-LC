
function initMap() {
  const mapDivIds = ['map-1', 'map-2', 'map-3','map-4','map-5','map-6','map-7','map-8','map-9','map-10']; // IDs of your map divs

  // Define map and marker options for each map
  const mapMarkerData = [
    {
      center: { lat: 28.6139, lng:77.2088 }, // San Francisco
      markerPosition: { lat: 28.6139, lng:77.2088 },
      title: "Marker 1",
      infoContent: "This is where virat kohli lives.",
     
    },
    {
      center: { lat:-25.718607, lng: 28.207338 }, // Los Angeles
      markerPosition: { lat:-25.718607, lng: 28.207338 },
      title: "Marker 2",
      infoContent: "This is where AB de Villers lives."
    },
    {
      center: { lat: 19.0760, lng: 72.8777 }, // Las Vegas
      markerPosition: {  lat: 19.0760, lng: 72.8777 },
      title: "Marker 3",
      infoContent: "This is where virat kohli lives."
    },
    {
      center: { lat: 7.4675, lng: 80.6234 }, // San Francisco
      markerPosition: { lat: 7.4675, lng: 80.6234 },
      title: "Marker 1",
      infoContent: "This is where Kumar Sanggakkara lives.",
     
    },
    {
      center: { lat:21.1592, lng: 79.1054 }, // San Francisco
      markerPosition: { lat:21.1592, lng: 79.1054 },
      title: "Marker 1",
      infoContent: "This is where Rohit sharma lives.",
     
    },
    {
      center: { lat: 50.7358, lng: 1.7786 }, // San Francisco
      markerPosition: {  lat: 50.7358, lng: 1.7786},
      title: "Marker 1",
      infoContent: "This is where Ben stokes lives.",
     
    },
    {
      center: { lat: 23.3441, lng: 85.3096 }, // San Francisco
      markerPosition: { lat: 23.3441, lng: 85.3096 },
      title: "Marker 1",
      infoContent: "This is where MS dhoni lives.",
     
    },
    {
      center: { lat: 17.1172, lng: -61.8457 }, // San Francisco
      markerPosition: {  lat: 17.1172, lng: -61.8457 },
      title: "Marker 1",
      infoContent: "This is where Viv Richards lives.",
     
    },
    {
      center: { lat: 31.5204, lng: 74.3587 }, // San Francisco
      markerPosition: {lat: 31.5204, lng: 74.3587},
      title: "Marker 1",
      infoContent: "This is where Wasim Akram lives.",
     
    },
    {
      center: { lat: -41.4391, lng: 147.1358 }, // San Francisco
      markerPosition: { lat: -41.4391, lng: 147.1358 },
      title: "Marker 1",
      infoContent: "This is where Ricky Ponting lives.",
     
    }
  ];

  // Loop through each map div ID and apply the corresponding map options
  mapDivIds.forEach((id, index) => {
    const mapDiv = document.getElementById(id);
    if (mapDiv) {
      const mapOptions = {
        zoom: 8,
        center: mapMarkerData[index].center // Center the map based on the current index
      };

      const map = new google.maps.Map(mapDiv, mapOptions);

      // Create a marker for each map
      const marker = new google.maps.Marker({
        position: mapMarkerData[index].markerPosition,
        map: map,
        label: mapMarkerData[index].label,
        title: mapMarkerData[index].title,
        draggable: true,
        animation: google.maps.Animation.DROP
      });

      // Create an InfoWindow for the marker
      const infoWindow = new google.maps.InfoWindow({
        content: mapMarkerData[index].infoContent
      });

      // Add a click event listener to open the InfoWindow when the marker is clicked
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    } else {
      console.error(`No element found with ID: ${id}`);
    }
  });
}

// Ensure the Google Maps API is loaded before calling initMap
window.onload = function () {
  if (typeof google !== 'undefined' && google.maps) {
    initMap();
  } else {
    console.error("Google Maps API not loaded");
  }
};


document.addEventListener('DOMContentLoaded', function () {
  const options = document.querySelectorAll('.options li');
  
  options.forEach(option => {
      option.addEventListener('click', function () {
          options.forEach(opt => opt.classList.remove('correct', 'incorrect'));
          
          if (this.dataset.correct === 'true') {
              this.classList.add('correct');
          } else {
              this.classList.add('incorrect');
          }
      });
  });
});
