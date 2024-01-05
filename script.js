// Simulated data - replace this with your actual data fetching logic
const wagons = [
  { id: 1, label: 'Wagon 1' },
  { id: 2, label: 'Wagon 2' },
  { id: 3, label: 'Wagon 3' }
];

// Function to render wagons
function renderWagons() {
  const wagonContainer = document.getElementById('wagonContainer');
  wagonContainer.innerHTML = ''; // Clear the container before rendering

  wagons.forEach(wagon => {
    const wagonDiv = document.createElement('div');
    wagonDiv.classList.add('wagon');
    wagonDiv.textContent = wagon.label;
    wagonDiv.setAttribute('draggable', true);
    wagonDiv.setAttribute('id', `wagon${wagon.id}`); // Set unique IDs for wagons

    wagonDiv.addEventListener('click', () => {
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


// Function to handle drag start
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Function to handle drag over
function dragOver(event) {
  event.preventDefault();
}

// Function to handle drop
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);
  const dropzone = event.target.closest('.wagon-container');

  // Check if the dropped element is a wagon and drop within the container
  if (draggedElement.classList.contains('wagon') && dropzone) {
    const wagons = Array.from(dropzone.getElementsByClassName('wagon'));
    const indexToDrop = wagons.indexOf(event.target);

    if (indexToDrop !== -1) {
      dropzone.insertBefore(draggedElement, wagons[indexToDrop + 1]);
    } else {
      dropzone.appendChild(draggedElement);
    }
  }
}


// Add drag and drop event listeners
document.addEventListener('DOMContentLoaded', function () {
  renderWagons(); // Render wagons once on page load

  const wagonContainer = document.getElementById('wagonContainer');

  wagonContainer.addEventListener('dragstart', dragStart);
  wagonContainer.addEventListener('dragover', dragOver);
  wagonContainer.addEventListener('drop', drop);
});

