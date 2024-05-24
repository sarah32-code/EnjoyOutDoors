"use strict";

// Select HTML elements
const locationSelect = document.getElementById("location-select");
const parkTypeSelect = document.getElementById("park-type-select");
const searchForm = document.getElementById("search-form");
const searchResults = document.getElementById("search-results");

window.onload = function () {
    // Create and append "All" option to locationSelect
    const allLocationsOption = document.createElement("option");
    allLocationsOption.value = "All";
    allLocationsOption.textContent = "All";
    locationSelect.appendChild(allLocationsOption);

    // Populate locationSelect with options from locationsArray
    for (let i = 0; i < locationsArray.length; i++) {
        const option = document.createElement("option");
        option.value = locationsArray[i];
        option.textContent = locationsArray[i];
        locationSelect.appendChild(option);
    }

    // Create and append "All" option to parkTypeSelect
    const allParkTypesOption = document.createElement("option");
    allParkTypesOption.value = "All";
    allParkTypesOption.textContent = "All";
    parkTypeSelect.appendChild(allParkTypesOption);

    // Populate parkTypeSelect with options from parkTypesArray
    for (let i = 0; i < parkTypesArray.length; i++) {
        const option = document.createElement("option");
        option.value = parkTypesArray[i];
        option.textContent = parkTypesArray[i];
        parkTypeSelect.appendChild(option);
    }
};

// Function to search for national parks based on selected location and park type
function searchNationalParks(location, parkType) {
    const filteredParks = [];
    // Iterate through nationalParksArray to filter parks
    for (let i = 0; i < nationalParksArray.length; i++) {
        const park = nationalParksArray[i];
        // Check if park matches the selected location
        const matchesLocation = (location === "All" || park.State === location);
        // Check if park matches the selected park type
        const matchesParkType = (parkType === "All" || park.LocationName.toLowerCase().includes(parkType.toLowerCase()));
        // If park matches both criteria, add it to filteredParks
        if (matchesLocation && matchesParkType) {
            filteredParks.push(park);
        }
    }
    // Display the filtered parks
    displaySearchResults(filteredParks);
}

// Function to display the search results in the searchResults element
function displaySearchResults(parks) {
    searchResults.innerHTML = "";
    // If no parks match the search criteria, display a message
    if (parks.length === 0) {
        searchResults.innerHTML = "<p>No matching parks found.</p>";
        return;
    }
    // Iterate through the filtered parks and create elements for each park
    for (let i = 0; i < parks.length; i++) {
        const parkElement = document.createElement("div");
        parkElement.classList.add("park");
        parkElement.innerHTML = `
            <h3>${parks[i].LocationName}</h3>
            <p><strong>Location:</strong> ${parks[i].City}, ${parks[i].State}</p>
            <p><strong>Phone:</strong> ${parks[i].Phone}</p>
            ${parks[i].Visit ? `<a href="${parks[i].Visit}" target="_blank">Visit Park</a>` : ''}
        `;
        // Append the park element to the searchResults container
        searchResults.appendChild(parkElement);
    }
}

// Handle form submission
searchForm.onsubmit = function (event) {
    event.preventDefault();
    // Get the selected location and park type
    const location = locationSelect.value;
    const parkType = parkTypeSelect.value;
    // Search for parks based on the selected criteria
    searchNationalParks(location, parkType);
};
