"use strict";
const mountainList = document.getElementById('mountain-list');
const mountainSelect = document.getElementById('mountain-select');
const mountainForm = document.getElementById('mountain-form');

for (let i = 0; i < mountainsArray.length; i++) {
    const mountain = mountainsArray[i];
    const option = document.createElement('option');
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainSelect.appendChild(option);
}
function createMountainItemHTML(mountain) {
    return `
        <h2>${mountain.name}</h2>
        <img src="images/${mountain.img}" alt="${mountain.name}">
        <p><strong>Description:</strong> ${mountain.desc}</p>
        <p><strong>Elevation:</strong> ${mountain.elevation} feet</p>
        <p><strong>Effort:</strong> ${mountain.effort}</p>
        <p><strong>Location:</strong> ${mountain.coords.lat}, ${mountain.coords.lng}</p>
    `;
}
mountainSelect.addEventListener('change', () => {
    const selectedMountain = mountainSelect.value;
    let selectedMountainData = null;
    for (let i = 0; i < mountainsArray.length; i++) {
        if (mountainsArray[i].name === selectedMountain) {
            selectedMountainData = mountainsArray[i];
            break;
        }
    }
    if (selectedMountainData) {
        mountainList.innerHTML = '';

        const mountainItem = document.createElement('div');
        mountainItem.className = 'mountain-item';
        mountainItem.innerHTML = createMountainItemHTML(selectedMountainData);
        mountainList.appendChild(mountainItem);
    }
});
