console.log("This is the dom module");

const info = document.querySelector(".info");

export function displayInfo(address, temperature, conditions, description) {
    const infoList = document.createElement("ul");
    const addrItem = document.createElement("li");
    const tempItem = document.createElement("li");
    const conditionItem = document.createElement("li");
    const descItem = document.createElement("li");
    addrItem.textContent = address;
    tempItem.textContent =
        "Temperature: " + temperature + " degress Fahrenheit";
    conditionItem.textContent = "Conditions: " + conditions;
    descItem.textContent = description;
    info.replaceChildren();
    infoList.appendChild(addrItem);
    infoList.appendChild(tempItem);
    infoList.appendChild(conditionItem);
    infoList.appendChild(descItem);
    info.appendChild(infoList);
}
