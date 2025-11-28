// Titanic pets and their gem values
const titanicPets = [
    { name: "Titanic Blobfish", value: "2.6B Gems" },
    { name: "Titanic Hippomelon", value: "4.5B Gems" },
    { name: "Titanic Atlantean Jellyfish", value: "720M Gems" },
    { name: "Titanic Balloon Monkey", value: "830M Gems" },
    { name: "Titanic Blue Balloon Cat", value: "700M Gems" },
    { name: "Titanic Cat", value: "2.75B Gems" },
    { name: "Titanic Cosmic Pegasus", value: "1.1B Gems" },
    { name: "Titanic Jelly Cat", value: "965M Gems" },
    { name: "Titanic Mystic Corgi", value: "865M Gems" },
    { name: "Titanic Neon Agony", value: "1.25B Gems" }
];

const select = document.getElementById("petSelect");

// Populate dropdown with Titanic pets
titanicPets.forEach(pet => {
    const option = document.createElement("option");
    option.value = pet.value;
    option.textContent = pet.name;
    select.appendChild(option);
});

// Display value when user selects a pet
function showValue() {
    const value = select.value;
    document.getElementById("valueOutput").textContent =
        value ? "Value: " + value : "Value: ---";
}
