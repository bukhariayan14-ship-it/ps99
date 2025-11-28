// scripts.js
const pets = [
  { name: "Titanic Blobfish", value: "2.6B Gems" },
  { name: "Titanic Hippomelon", value: "4.5B Gems" },
  { name: "Titanic Atlantean Jellyfish", value: "720M Gems" },
  { name: "Titanic Balloon Monkey", value: "830M Gems" },
  { name: "Titanic Cat", value: "2.75B Gems" },
  { name: "Titanic Cosmic Pegasus", value: "1.1B Gems" },
  { name: "Titanic Jelly Cat", value: "965M Gems" },
  { name: "Titanic Mystic Corgi", value: "865M Gems" },
  { name: "Titanic Neon Agony", value: "1.25B Gems" },
  { name: "Titanic Fire Dragon", value: "770M Gems" },
  { name: "Titanic Hologram Cat", value: "715M Gems" },
  { name: "Titanic Capybara", value: "730M Gems" },
  { name: "Titanic Banana Cat", value: "625M Gems" },
  { name: "Titanic Jolly Cat", value: "1.05B Gems" }
];

// Function to insert the pet data into the table dynamically
const tbody = document.querySelector('#petsTable tbody');
pets.forEach(pet => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${pet.name}</td><td class="value">${pet.value}</td>`;
  tbody.appendChild(row);
});


