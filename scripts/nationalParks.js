"use strict"; 
window.onload = function () {
    const locationSelect = document.getElementById("location-select"); 
    const parkTypeSelect = document.getElementById("park-type-select"); 
    const searchForm = document.getElementById("search-form"); 
    const searchResults = document.getElementById("search-results"); 

   
    locationsArray.forEach(location => {
        const option = document.createElement("option");
        option.value = location;  
        option.textContent = location;  
        locationSelect.appendChild(option);  
    });

    parkTypesArray.forEach(parkType => {
        const option = document.createElement("option");  
        option.value = parkType;  
        option.textContent = parkType; 
        parkTypeSelect.appendChild(option); 
    });

    function searchNationalParks(location, parkType) {
        const filteredParks = nationalParksArray.filter(park =>
            park.State === location && park.LocationName.toLowerCase().includes(parkType.toLowerCase())
        );
        displaySearchResults(filteredParks); 
    }

    function displaySearchResults(parks) {
        searchResults.innerHTML = ""; 
        if (parks.length === 0) {
            searchResults.innerHTML = "<p>No matching parks found.</p>"; 
            return;
        }
        parks.forEach(park => {
            const parkElement = document.createElement("div"); 
            parkElement.classList.add("park"); 
            parkElement.innerHTML = `
                <h3>${park.LocationName}</h3>
                <p><strong>Location:</strong> ${park.City}, ${park.State}</p>
                <p><strong>Phone:</strong> ${park.Phone}</p>
                ${park.Visit ? `<a href="${park.Visit}" target="_blank">Visit Park</a>` : ''}
            `; // Populate the park element with park details
            searchResults.appendChild(parkElement); 
        });
    }

    searchForm.onsubmit = function (event) {
        event.preventDefault(); 
        const location = locationSelect.value;  
        const parkType = parkTypeSelect.value;  
        searchNationalParks(location, parkType);  
    };
};
