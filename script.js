// Getting inputs from user, used to determine Challenge Rating
// Inputs: Single player/Party && Levels

// Use challenge rating to get an array of monsters that fall within that range from API (GET /api/monster with CR as query string parameter)

// Randomly choose a monster from the list, start with only one monster per encounter but can expand upon it

// Get a monster(s) that meets that CR (determined by levels input)

// Display the monster's data

let calculateDifficulty = async () => {
    let xp
    let partySize = document.getElementById("size").value;
    let partyLevel = document.getElementById("level").value;

    switch (partyLevel) {
        case '1':
            xp = 50;
            break;
        case '2':
            xp = 100;
            break;
        case '3':

            xp = 150;
            break;
        case '4':

            xp = 250;
            break;
        case '5':
            partyLevel = 5;
            xp = 500;
            break;
        case '6':

            return xp = 600;
            break;
        case '7':

            xp = 750;
            break;
        case '8':

            xp = 900;
            break;
        case '9':

            xp = 1100;
            break;
        case '10':

            xp = 1200;
            break;
        case "11":

            xp = 1600;
            break;
        case "12":

            xp = 2000;
            break;
        case '13':

            xp = 2200;
            break;
        case '14':

            xp = 2500;
            break;
        case '15':

            xp = 2800;
            break;
        case "16":

            xp = 3200;
            break;
        case "17":

            xp = 3900;
            break;
        case "18":

            xp = 4200;
            break;
        case '19':

            xp = 4900;
            break;
        case "20":

            xp = 5700;
            break;
        default:
            console.log("This failed");
    }
    let v = xp * partySize;
    console.log(v);
    let cr;
    switch (true) {
        case v > 50000:
            cr = 30;
            break;
        case v > 62000:
            cr = 24;
            break;
        case v > 50, 000:
            cr = 23;
            break;
        case v > 41, 000:
            cr = 22;
            break;
        case v > 33, 000:
            cr = 21;
            break;
        case v > 25, 000:
            cr = 20;
            break;
        case v > 22000:
            cr = 19;
            break;
        case v > 20000:
            cr = 18;
            break;
        case v > 18000:
            cr = 17;
            break;
        case v > 15, 000:
            cr = 16;
            break;
        case v > 13, 000:
            cr = 15;
            break;
        case (v > 11, 500):
            cr = 14;
            break;
        case v > 10, 000:
            cr = 13;
            break;
        case v > 8400:
            cr = 12;
            break;
        case (v > 7200):
            cr = 11;
            break;
        case v > 5900:
            cr = 10;
            break;
        case v > 5000:
            cr = 9;
            break;
        case v > 3900:
            cr = 8;
            break;
        case v > 2900:
            cr = 7;
            break;
        case v > 2300:
            cr = 6;
            break;
        case v > 1800:
            cr = 5;
            break;
        case v > 700:
            cr = 4;
            break;
        case v > 450:
            cr = 3;
            break;
        case v > 200:
            cr = 2;
            break;
        case v > 100:
            cr = 1;
            break;
        case v > 50:
            cr = 1 / 4;
            break;
        case v > 25:
            cr = 1 / 8;
            break;
        case (v > 10):
            cr = 0;
            break;
    }
    console.log(`Your selected cr rating is ${cr}`);

    await displayInfo(cr);
}


// Takes 'request' as a url string, does an Http request, and returns the json data in response
async function getFromApi(request) {
    let json = null;
    if (request) {
        await fetch(request)
            .then(response => response.text())
            .then(data => { json = JSON.parse(data); })
    }
    return json;
}

// Takes 'calculatedCR' as an integer(or double for decimal), gets a random monster of that CR from DnD5e API, and returns the json data of that monster 
async function randomMonster(calculatedCR) {
    //calculatedCR = 1; // PLACEHOLDER

    // Logic only executes if CR is valid
    if (calculatedCR) {
        // URL references for DnD5e API
        const DnD5eAPIroot = 'https://www.dnd5eapi.co';
        const DnD5eAPImonsters = DnD5eAPIroot + '/api/monsters';

        // Gets json list of all monsters that are at that CR in the API
        let list = await getFromApi(`${DnD5eAPImonsters}?challenge_rating=${calculatedCR}`);
        // Gets json data on one random monster in the list above from the API
        let monsterInfo = await getFromApi(`${DnD5eAPIroot}${list.results[Math.floor(Math.random() * list.count)].url}`);

        //console.log(monsterInfo);
        return monsterInfo;
    }
}


async function displayInfo(cr) {
    let monster = await randomMonster(cr);

    document.getElementById("name").innerHTML = monster['name'];
    document.getElementById("health").innerHTML = monster['hit_points'];
    document.getElementById("char").innerHTML = monster['charisma'];
    document.getElementById("const").innerHTML = monster['constitution'];
    document.getElementById("int").innerHTML = monster['intelligence'];
    document.getElementById("str").innerHTML = monster['strength'];
    document.getElementById("wis").innerHTML = monster['wisdom'];
    document.getElementById("xp").innerHTML = monster['xp'];

    document.getElementById("info").className = "visible";
    let displayNum = 1;

    for(let i = 0; i < monster['actions'].length; i++){
        let id = `disp${displayNum}`;
        document.getElementById(id).innerHTML = "Name: " + monster['actions'][i]['name'] + "\n";;
        document.getElementById(id).className = "visible";

        id = `disp${displayNum+1}`;
        document.getElementById(id).innerHTML = "Description: " + monster['actions'][i]['desc'] + "\n";
        document.getElementById(id).className = "visible";

        displayNum += 2;
        //let br = `br${i+1}`;
        document.getElementById(`br${i+1}`).className = "visible";
    }
}