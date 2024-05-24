"use strict";

// Select HTML elements
const mountainList = document.getElementById('mountain-list');
const mountainSelect = document.getElementById('mountain-select');
const mountainForm = document.getElementById('mountain-form');

window.onload = function () {
};

// Populate mountainSelect with options from mountainsArray
for (let i = 0; i < mountainsArray.length; i++) {
    const mountain = mountainsArray[i];
    const option = document.createElement('option');
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainSelect.appendChild(option);
}

// Function to create the HTML structure for a mountain item
function createMountainItemHTML(mountain) {
    return `
       <div class="card mb-3" style="max-width: 100%; border: none;">
            <div class="row g-0">
                <div class="col-md-4" style="flex: 0 0 100%;">
                    <img src="images/${mountain.img}" class="img-fluid rounded-start" alt="${mountain.name}" style="height: 400px; object-fit: cover;">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${mountain.name}</h5>
                        <p class="card-text"><strong>Description:</strong> ${mountain.desc}</p>
                        <p class="card-text"><strong>Elevation:</strong> ${mountain.elevation} feet</p>
                        <p class="card-text"><strong>Effort:</strong> ${mountain.effort}</p>
                        <p class="card-text"><strong>Location:</strong> ${mountain.coords.lat}, ${mountain.coords.lng}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Add an event listener to the mountainSelect element to handle changes
mountainSelect.addEventListener('change', () => {
    // Get the selected mountain's name
    const selectedMountain = mountainSelect.value;
    let selectedMountainData = null;

    // Find the mountain data that matches the selected mountain's name
    for (let i = 0; i < mountainsArray.length; i++) {
        if (mountainsArray[i].name === selectedMountain) {
            selectedMountainData = mountainsArray[i];
            break;
        }
    }

    // If the selected mountain data is found, display it
    if (selectedMountainData) {
        // Clear any previous mountain data from mountainList
        mountainList.innerHTML = '';

        // Create a new div element for the selected mountain
        const mountainItem = document.createElement('div');
        mountainItem.className = 'mountain-item';
        // Set the inner HTML of the new div element using the createMountainItemHTML function
        mountainItem.innerHTML = createMountainItemHTML(selectedMountainData);
        // Append the new mountain item to the mountainList
        mountainList.appendChild(mountainItem);
    }
});
