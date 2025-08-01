console.log("This is the dom module");

const info = document.querySelector(".info");

export function displayInfo(address, temp, conditions, desc) {
    const newPara = document.createElement("p");
    newPara.textContent =
        address +
        ", Temperature: " +
        temp +
        " degrees Fahrenheit" +
        ", Conditions: " +
        conditions +
        " " +
        desc;
    info.replaceChildren();
    info.appendChild(newPara);
}
