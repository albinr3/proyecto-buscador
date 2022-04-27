//Variables
const brandSelect = document.querySelector("#marca");
const maxPriceSelect = document.querySelector("#maximo");
const minPriceSelect = document.querySelector("#minimo");
const doorsSelect = document.querySelector("#puertas");
const transmisionSelect = document.querySelector("#transmision");
const colorSelect = document.querySelector("#color");
const yearSelect = document.querySelector("#year");

//container for the results
const result = document.querySelector("#resultado");

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//Make an object by query
const searchData = {
    brand : "",
    year : "",
    minprice : "",
    maxprice : "",
    doors : "",
    transmision : "",
    color : ""
}

//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    showAutos(); //show the autos 
    fillYearSelect(); //fill date select
});

//eventlisteners for the search select
brandSelect.addEventListener("change", e => {
    searchData.brand = e.target.value;
    clearResults();
    filterSearch();
});

yearSelect.addEventListener("change", e => {
    searchData.year = parseInt(e.target.value); //we use parse to convert to int the object.year data.
    clearResults();
    filterSearch();
});

minPriceSelect.addEventListener("change", e => {
    searchData.minprice = e.target.value;  
    clearResults();
    filterSearch();
});

maxPriceSelect.addEventListener("change", e => {
    searchData.maxprice = e.target.value; 
    clearResults();
    filterSearch();
});

doorsSelect.addEventListener("change", e => {
    searchData.doors = parseInt(e.target.value); 
    clearResults();
    filterSearch(); 
});

transmisionSelect.addEventListener("change", e => {
    searchData.transmision = e.target.value;  
    clearResults();
    filterSearch();
});

colorSelect.addEventListener("change", e => {
    searchData.color = e.target.value;
    clearResults();
    filterSearch();
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


//create a year select
function fillYearSelect() {
    for(let i = maxYear; i >= minYear; i--){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

//filter by the query

function filterSearch() {
    const resultSearch = autos.filter(filterBrand).filter(filterYear)
                        .filter(filterMinPrice)
                        .filter(filterMaxPrice).filter(filterDoors)
                        .filter(filterTransmision).filter(filterColor);
    resultSearch.forEach(addAutosToHtml);
    if(resultSearch.length === 0) {
        const noElements = document.createElement("p");
        noElements.style.backgroundColor = "red";
        noElements.style.color = "white";
        noElements.textContent = "No se encontraron Autos con tus especificaciones!";
        noElements.style.marginBottom = "10px";
                result.appendChild(noElements);
    }
};

//filter by brand
function filterBrand(auto) {
    const {brand} = searchData;
    if(brand) {
        return auto.marca === brand;
    }else{
        return auto;
    }
};

//filter by year
function filterYear(auto) {
    const {year} = searchData;
    if(year) {
        return auto.year === year; 
    }else{
        return auto;
    }
};

//filter by min price
function filterMinPrice(auto) {
    const {minprice} = searchData;
    if(minprice) {
        return auto.precio >= minprice; 
    }else{
        return auto;
    }
};

//filter by max price
function filterMaxPrice(auto) {
    const {maxprice} = searchData;
    if(maxprice) {
        return auto.precio <= maxprice; 
    }else{
        return auto;
    }
};

//filter by doors
function filterDoors(auto) {
    const {doors} = searchData;
    if(doors) {
        return auto.puertas === doors; 
    }else{
        return auto;
    }
};

//filter by transmision
function filterTransmision(auto) {
    const {transmision} = searchData;
    if(transmision) {
        return auto.transmision === transmision; 
    }else{
        return auto;
    }
};

//filter by color
function filterColor(auto) {
    const {color} = searchData;
    if(color) {
        return auto.color === color; 
    }else{
        return auto;
    }
};


//delete all p elements from the results
function clearResults() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
      }
};