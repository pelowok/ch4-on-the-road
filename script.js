// Function to render wagons with dropdowns for order placement
function renderWagonsWithDropdowns() {
  const wagonContainer = document.getElementById('wagonContainer');
  wagonContainer.innerHTML = '';

  wagons.forEach(wagon => {
    const wagonDiv = document.createElement('div');
    wagonDiv.classList.add('wagon');

    const dropdown = document.createElement('select');
    dropdown.addEventListener('change', () => {
      const selectedPosition = parseInt(dropdown.value);
      moveWagonToPosition(wagon, selectedPosition);
    });

    // Populate dropdown with options representing wagon positions
    for (let i = 1; i <= wagons.length; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `Position ${i}`;
      dropdown.appendChild(option);
    }

    wagonDiv.appendChild(dropdown);
    wagonDiv.appendChild(document.createTextNode(wagon.label));

    wagonContainer.appendChild(wagonDiv);
  });
}

// Function to move wagon to the selected position
function moveWagonToPosition(wagon, position) {
  const currentIndex = wagons.indexOf(wagon);
  const newIndex = position - 1; // Adjust for 0-based index

  if (currentIndex !== newIndex) {
    // Remove wagon from current position
    wagons.splice(currentIndex, 1);

    // Insert wagon at new position
    wagons.splice(newIndex, 0, wagon);

    renderWagonsWithDropdowns(); // Re-render wagons after reordering
  }
}

// Render wagons with dropdowns when the page loads
window.onload = function () {
  renderWagonsWithDropdowns();
};
