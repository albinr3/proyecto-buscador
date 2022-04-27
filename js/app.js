//Variables
const result = document.querySelector("#resultado");
const year = document.querySelector("#year");
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;


//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    showAutos(); //show the autos 

    fillSelect(); //fill date select
});


//Functions
function showAutos() {
    autos.forEach(addAutosToHtml);
}

//adding auto to html
function addAutosToHtml(auto) {
    //we apply object destructoring
    const { marca, modelo, year, precio, puertas, transmision, color} = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - Puertas: ${puertas} - Precio: ${precio} - ${transmision} - ${color}
    `;

    //inserting the resul to the HTML
    result.appendChild(autoHTML);
}

function fillSelect() {
    for(let i = maxYear; i >= minYear; i--){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }


}
