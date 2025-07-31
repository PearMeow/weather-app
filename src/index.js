console.log("This is some template text");

const key = "";

async function foo() {
    const data = await fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York?unitGroup=us&key=" +
            key +
            "&contentType=json",
    );
    console.log(data);
}

foo();
