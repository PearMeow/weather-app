console.log("This is the dom module");

const body = document.querySelector("body");

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
    body.replaceChildren();
    body.appendChild(newPara);
}
