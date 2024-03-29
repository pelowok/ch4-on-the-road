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

// Placeholder functions
function generateWagonMaster() {
  // Implement logic to generate a wagon master
  // For example:
  return { role: 'wagonMaster' };
}

function generateIndividualWithSubtype(role, subtype) {
  // Implement logic to generate individuals with specified role and subtype
  // For example:
  return { role, subtype };
}

function generateIndividualWithRole(role) {
  // Implement logic to generate individuals with specified role
  // For example:
  return { role };
}

function generateCargo() {
  // Implement logic to generate cargo
  // For example:
  return 'Cargo placeholder';
}

function getRandomLocation(isDestination = false, startingLocation = '') {
  // Implement logic to get a random location for starting/destination
  // For example:
  return 'Random location placeholder';
}

function generateWagonName(demeanor, cargo) {
  // Implement logic to generate wagon name
  // For example:
  return 'Wagon name placeholder';
}

// Updated array structure
const wagons = [
  (() => {
    const wagon_master = generateWagonMaster();
    const bodyguard = generateIndividualWithSubtype('security', 'bodyguard');
    const teamster = generateIndividualWithSubtype('crew', 'teamster');
    const crew = Array.from({ length: Math.floor(Math.random() * 3) }, () => generateIndividualWithRole('crew'));
    const guards = ['expertGuard', 'veteranGuard', 'noviceGuard'].map(subtype => generateIndividualWithSubtype('security', subtype));
    const sergeant = (guards.length >= 3) ? generateIndividualWithSubtype('security', 'sergeant') : null;
    const passengers = Array.from({ length: Math.floor(Math.random() * 6) }, () => generateIndividualWithSubtype('passenger'));
    const cargo = generateCargo();
    const starting_location = getRandomLocation();
    const destination = getRandomLocation(true, starting_location);
    const wagon_name = generateWagonName(wagon_master.demeanor, cargo);

    return {
      id: 1,
      label: 'Wagon 1',
      wagon_master,
      bodyguard,
      teamster,
      crew,
      guards,
      sergeant,
      passengers,
      cargo,
      starting_location,
      destination,
      wagon_name,
      additionalAttribute: 'some value' // Example of an additional attribute
    };
  })()
];

// Log the result for checking
console.log(wagons);

// Function to render wagons as cards
function renderWagonsAsCards() {
  const wagonContainer = document.getElementById('wagonContainer');
  wagonContainer.innerHTML = '';

  wagons.forEach(wagon => {
    const wagonCard = document.createElement('div');
    wagonCard.classList.add('wagon-card');

    const title = document.createElement('h2');
    title.textContent = `Wagon ${wagon.id}`;
    wagonCard.appendChild(title);

    const attributesList = document.createElement('ul');
    for (const key in wagon) {
      if (Object.prototype.hasOwnProperty.call(wagon, key)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${JSON.stringify(wagon[key])}`;
        attributesList.appendChild(listItem);
      }
    }
    wagonCard.appendChild(attributesList);

    wagonContainer.appendChild(wagonCard);
  });
}


// Execute the functions after the page has loaded
window.addEventListener('load', () => {
  // wagons = createWagonsArray(); // Create the wagons array
  renderWagonsAsCards(); // Render wagons as cards
});