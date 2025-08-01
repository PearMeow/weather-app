console.log("This is some template text");

const key = "GAMZJM5M49B44L27NDMS55JD7";

async function foo() {
    const data = await fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York?unitGroup=us&key=" +
            key +
            "&contentType=json",
        { mode: "cors" },
    );
    console.log(data);
}

foo();
