import * as dom from "./dom.js";

console.log("This is some template text");

const key = "GAMZJM5M49B44L27NDMS55JD7";

async function getLocationWeather(location = "", key) {
    location = location.split(" ").join("%20");
    const data = await fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
            location +
            "/?unitGroup=us&key=" +
            key +
            "&contentType=json",
        { mode: "cors" },
    );
    // another way to do it
    // data.json().then((info) => {
    //     console.log(info.address);
    // }),
    let theObj = await data.json();
    console.log(theObj);
    dom.displayInfo(
        theObj.address,
        theObj.days[0].temp,
        theObj.currentConditions.conditions,
        theObj.description,
    );
}

getLocationWeather("New Jersey", key).catch(() => console.log("Error!!"));
