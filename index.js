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


function getRandomItem(array){
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomRate() {
    return Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
}


// req. 1
function generateFreelancer(){
    return {
        name: getRandomItem(NAMES),
        occupation: getRandomItem(OCCUPATIONS),
        rate: getRandomRate(),
      };
}


// req. 2
const freelancers = Array.from({ length: NUM_FREELANCERS }, generateFreelancer);


// req. 3
function getAverageRate(Freelancers){
    const total = freelancers.reduce((sum, f) => sum + f.rate, 0);
    return total / freelancers.length;
}


// req. 4
const averageRate = getAverageRate(freelancers);


// req. 5 - componenet function to represent single freelancer
function FreelancerRow({ name, occupation, rate}){
    return `
        <tr>
            <td>${name}</td>
            <td>${occupation}</td>
        <td>$${rate.toFixed(2)}</td>
        </tr>
    `;
}


// req. 6 - componenet function to represent array of freelancers
function FreelancerTable(freelancers){
    function FreelancerTable(freelancers){
        const rows = freelancers.map(FreelancerRow).join("");
        return `
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Occupation</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }    
}


// req. 7 - component function to represent average rate of all freelancers
function AverageRateDisplay(rate){
    return `<p><strong>Average Rate:</strong> $${rate.toFixed(2)}</p>`;
}


// req. 8 + 9 render function (mount application into document) + call this render function
function render() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <h1>Freelancer Forum</h1>
      ${AverageRateDisplay(averageRate)}
      ${FreelancerTable(freelancers)}
    `;
  }

  render();


