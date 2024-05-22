"use strict";
const mountainList = document.getElementById('mountain-list');
const mountainSelect = document.getElementById('mountain-select');
const mountainForm = document.getElementById('mountain-form');
mountainsArray.forEach(mountain => {
    const option = document.createElement('option');
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainSelect.appendChild(option);
});
mountainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedMountain = mountainSelect.value;
    const selectedMountainData = mountainsArray.find(mountain => mountain.name === selectedMountain);
    if (selectedMountainData) {
        mountainList.innerHTML = '';

        const mountainItem = document.createElement('div');
        mountainItem.className = 'mountain-item';
        mountainItem.innerHTML = `
            <h2>${selectedMountainData.name}</h2>
            <img src="images/${selectedMountainData.img}" alt="${selectedMountainData.name}">
            <p><strong>Description:</strong> ${selectedMountainData.desc}</p>
            <p><strong>Elevation:</strong> ${selectedMountainData.elevation} feet</p>
            <p><strong>Effort:</strong> ${selectedMountainData.effort}</p>
            <p><strong>Location:</strong> ${selectedMountainData.coords.lat}, ${selectedMountainData.coords.lng}</p>
        `;
        mountainList.appendChild(mountainItem);
    }
});
