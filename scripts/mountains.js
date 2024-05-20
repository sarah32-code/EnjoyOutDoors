document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const mountainList = document.getElementById('mountain-list');
    const mountainSelect = document.getElementById('mountain-select');

    // Populate dropdown list
    mountainsArray.forEach(mountain => {
        // Create a new <option> element for each mountain
        const option = document.createElement('option');
        // Set the value of the <option> to the mountain name
        option.value = mountain.name;
        // Set the text content of the <option> to the mountain name
        option.textContent = mountain.name;
        // Append the <option> to the mountain dropdown
        mountainSelect.appendChild(option);
    });

    // Event listener for dropdown selection
    mountainSelect.addEventListener('change', (event) => {
        // Get the selected mountain name from the dropdown
        const selectedMountain = event.target.value;
        // Find the selected mountain data from the mountainsArray
        const selectedMountainData = mountainsArray.find(mountain => mountain.name === selectedMountain);
        // If selected mountain data exists
        if (selectedMountainData) {
            // Clear previous mountain info
            mountainList.innerHTML = '';

            // Create mountain info element
            const mountainItem = document.createElement('div');
            // Set class name for the mountain info element
            mountainItem.className = 'mountain-item';
            // Set inner HTML for the mountain info element
            mountainItem.innerHTML = `
                <h2>${selectedMountainData.name}</h2>
                <img src="images/${selectedMountainData.img}" alt="${selectedMountainData.name}">
                <p><strong>Description:</strong> ${selectedMountainData.desc}</p>
                <p><strong>Elevation:</strong> ${selectedMountainData.elevation} feet</p>
                <p><strong>Effort:</strong> ${selectedMountainData.effort}</p>
                <p><strong>Location:</strong> ${selectedMountainData.coords.lat}, ${selectedMountainData.coords.lng}</p>
            `;
            // Append the mountain info element to the mountain list container
            mountainList.appendChild(mountainItem);
        }
    });
});
