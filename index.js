/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===

const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const $app = document.querySelector("#app");
function createFreelancerTable() {
  const $table = document.createElement("table");
  $table.style.width = "100%";
  $table.border = "1";

  // Create table header
  const $thead = document.createElement("thead");
  $thead.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Rate</th>
    </tr>
  `;
  $table.appendChild($thead);

  // Create table body
  const $tbody = document.createElement("tbody");
  $tbody.id = "freelancer-tbody";
  $table.appendChild($tbody);

  return $table;
}

function freelancerRow(freelancer) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
    <td>${freelancer.type}</td>
    <td>${freelancer.worker}</td>
    <td>$${freelancer.randomRate}</td>
  `;
  return $tr;
}

function render() {
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <div id="display"></div>
  `;
  const $table = createFreelancerTable();
  $app.querySelector("#display").appendChild($table);
}

function addFreelancerRows() {
    let totalRate = 0;
  const $tbody = document.getElementById("freelancer-tbody");
    for(let i = 0; i < NUM_FREELANCERS; i++) {
  const randomName = Math.floor(Math.random() * NAMES.length);
  const randomOccupation = Math.floor(Math.random() * OCCUPATIONS.length);
  const randomRate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
  totalRate += randomRate;
  const freelancer = {
    type: NAMES[randomName],
    worker: OCCUPATIONS[randomOccupation],
    randomRate: randomRate,
  };
  //const $tbody = document.getElementById("freelancer-tbody");
  $tbody.appendChild(freelancerRow(freelancer));
}
const avgRate = (totalRate / NUM_FREELANCERS).toFixed(2);
const $display = document.getElementById("display");
  const $avgDiv = document.createElement("div");
  
  $avgDiv.textContent = `Average Rate: $${avgRate}`;
  $display.insertBefore($avgDiv, $display.firstChild);
}

render();
addFreelancerRows();
