//Variables
const result = document.querySelector("#resultado");
console.log(autos);
//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    showAutos();
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