document.addEventListener("DOMContentLoaded", function () {
    // Get references to the HTML elements
    const locationSelect = document.getElementById("location-select");
    const parkTypeSelect = document.getElementById("park-type-select");
    const searchBtn = document.getElementById("search-btn");
    const searchResults = document.getElementById("search-results");

    // Populate location dropdown
    locationsArray.forEach(location => {
        // Create a new <option> element for each location
        const option = document.createElement("option");
        // Set the value of the <option> to the location
        option.value = location;
        // Set the text content of the <option> to the location
        option.textContent = location;
        // Append the <option> to the location dropdown
        locationSelect.appendChild(option);
    });

    // Populate park type dropdown
    parkTypesArray.forEach(parkType => {
        // Create a new <option> element for each park type
        const option = document.createElement("option");
        // Set the value of the <option> to the park type
        option.value = parkType;
        // Set the text content of the <option> to the park type
        option.textContent = parkType;
        // Append the <option> to the park type dropdown
        parkTypeSelect.appendChild(option);
    });

    // Function to filter national parks based on search options
    function searchNationalParks(location, parkType) {
        // Filter national parks array based on selected location and park type
        const filteredParks = nationalParksArray.filter(park =>
            park.State === location && park.LocationName.toLowerCase().includes(parkType.toLowerCase())
        );
        // Display the filtered parks
        displaySearchResults(filteredParks);
    }

    // Function to display search results
    function displaySearchResults(parks) {
        // Clear previous search results
        searchResults.innerHTML = "";
        // If no matching parks found, display a message
        if (parks.length === 0) {
            searchResults.innerHTML = "<p>No matching parks found.</p>";
            return;
        }
        // Iterate over each park and create HTML elements to display park information
        parks.forEach(park => {
            const parkElement = document.createElement("div");
            parkElement.classList.add("park");
            parkElement.innerHTML = `
                <h3>${park.LocationName}</h3>
                <p><strong>Location:</strong> ${park.City}, ${park.State}</p>
                <p><strong>Phone:</strong> ${park.Phone}</p>
                ${park.Visit ? `<a href="${park.Visit}" target="_blank">Visit Park</a>` : ''}
            `;
            // Append the park element to the search results section
            searchResults.appendChild(parkElement);
        });
    }

    // Event listener for search button click
    searchBtn.addEventListener("click", function () {
        // Get the selected location and park type
        const location = locationSelect.value;
        const parkType = parkTypeSelect.value;
        // Call the searchNationalParks function with the selected location and park type
        searchNationalParks(location, parkType);
    });
});
