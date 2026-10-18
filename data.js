// An array of objects: each object represents one person
const people = [
    { name: "Ahmed", age: 22, city: "Cairo" },
    { name: "Mona", age: 20, city: "Giza" },
    { name: "Ali", age: 25, city: "Alexandria" },
    { name: "Sara", age: 21, city: "Cairo" },
    { name: "Omar", age: 23, city: "Giza" }
];

const tableBody = document.querySelector("#people-table");
const searchInput = document.querySelector("#search");
const noResults = document.querySelector("#no-results");

// Draw the rows in the table
function showPeople(list) {
    tableBody.innerHTML = "";

    list.forEach((person) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = person.name;

        const ageCell = document.createElement("td");
        ageCell.textContent = person.age;

        const cityCell = document.createElement("td");
        cityCell.textContent = person.city;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(cityCell);
        tableBody.appendChild(row);
    });

    if (list.length === 0) {
        noResults.textContent = "No matching people found.";
    } else {
        noResults.textContent = "";
    }
}

// Search while the user types
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredPeople = people.filter((person) => {
        return person.name.toLowerCase().includes(searchText) ||
            String(person.age).includes(searchText) ||
            person.city.toLowerCase().includes(searchText);
    });

    showPeople(filteredPeople);
});

// Sort names alphabetically
document.querySelector("#sort-name").addEventListener("click", () => {
    people.sort((a, b) => a.name.localeCompare(b.name));
    searchInput.value = "";
    showPeople(people);
});

// Sort ages from smallest to largest
document.querySelector("#sort-age").addEventListener("click", () => {
    people.sort((a, b) => a.age - b.age);
    searchInput.value = "";
    showPeople(people);
});

// Show the initial table when the page opens
showPeople(people);
