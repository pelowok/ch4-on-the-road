// Simulated data - replace this with your actual data fetching logic
const wagons = [
  { id: 1, label: 'Wagon 1' },
  { id: 2, label: 'Wagon 2' },
  { id: 3, label: 'Wagon 3' }
];

// Function to render wagons
function renderWagons() {
  const wagonContainer = document.getElementById('wagonContainer');

  wagons.forEach(wagon => {
    const wagonDiv = document.createElement('div');
    wagonDiv.classList.add('wagon');
    wagonDiv.textContent = wagon.label;

    wagonDiv.addEventListener('click', () => {
      // Handle click event - you can add logic to display members of this wagon
      console.log(`Clicked ${wagon.label}`);
      // Add logic to display members of this wagon
    });

    wagonContainer.appendChild(wagonDiv);
  });
}

// Render wagons when the page loads
window.onload = function () {
  renderWagons();
};
