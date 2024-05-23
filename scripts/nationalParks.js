"use strict";
const locationSelect = document.getElementById("location-select");
const parkTypeSelect = document.getElementById("park-type-select");
const searchForm = document.getElementById("search-form");
const searchResults = document.getElementById("search-results");

window.onload = function () {
    
};

for (let i = 0; i < locationsArray.length; i++) {
    const option = document.createElement("option");
    option.value = locationsArray[i];
    option.textContent = locationsArray[i];
    locationSelect.appendChild(option);
}

for (let i = 0; i < parkTypesArray.length; i++) {
    const option = document.createElement("option");
    option.value = parkTypesArray[i];
    option.textContent = parkTypesArray[i];
    parkTypeSelect.appendChild(option);
}
function searchNationalParks(location, parkType) {
    const filteredParks = [];
    for (let i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].State === location && nationalParksArray[i].LocationName.toLowerCase().includes(parkType.toLowerCase())) {
            filteredParks.push(nationalParksArray[i]);
        }
    }
    displaySearchResults(filteredParks);
}
function displaySearchResults(parks) {
    searchResults.innerHTML = "";
    if (parks.length === 0) {
        searchResults.innerHTML = "<p>No matching parks found.</p>";
        return;
    }
    for (let i = 0; i < parks.length; i++) {
        const parkElement = document.createElement("div");
        parkElement.classList.add("park");
        parkElement.innerHTML = `
            <h3>${parks[i].LocationName}</h3>
            <p><strong>Location:</strong> ${parks[i].City}, ${parks[i].State}</p>
            <p><strong>Phone:</strong> ${parks[i].Phone}</p>
            ${parks[i].Visit ? `<a href="${parks[i].Visit}" target="_blank">Visit Park</a>` : ''}
        `;
        searchResults.appendChild(parkElement);
    }
}
searchForm.onsubmit = function (event) {
    event.preventDefault();
    const location = locationSelect.value;
    const parkType = parkTypeSelect.value;
    searchNationalParks(location, parkType);
};

