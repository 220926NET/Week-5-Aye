// Getting inputs from user, used to determine Challenge Rating
// Inputs: Single player/Party && Levels

// Use challenge rating to get an array of monsters that fall within that range from API (GET /api/monster with CR as query string parameter)

// Randomly choose a monster from the list, start with only one monster per encounter but can expand upon it

// Get a monster(s) that meets that CR (determined by levels input)

// Display the monster's data

let sayhi = (data) => () => console.log(data);

// Takes 'request' as a url string, does an Http request, and returns the json data in response
async function getFromApi(request) {
    let json = null;
    if (request) {
        await fetch(request)
        .then(response => response.text())
        .then(data => {json = JSON.parse(data);})
    }
    return json;
}

// Takes 'calculatedCR' as an integer(or double for decimal), gets a random monster of that CR from DnD5e API, and returns the json data of that monster 
async function randomMonster(/* calculatedCR */) {
    calculatedCR = 1; // PLACEHOLDER

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















/* Depricated Test Code (working reference) */
// (async function getListMonstersOfCR(){//calculatedCR) {
//     calculatedCR = 1;
//     if (calculatedCR) {
//         const DnD5eAPIroot = 'https://www.dnd5eapi.co';
//         const DnD5eAPImonsters = DnD5eAPIroot + '/api/monsters';
//         let request = `${DnD5eAPImonsters}?challenge_rating=${calculatedCR}`;

//         await fetch(request)
//         .then(response => response.text())
//         .then(monsterList => {
//             list = JSON.parse(monsterList);
//         })

//         console.log(list)
//         let randomIndex = Math.floor(Math.random() * list.count)
//         console.log(randomIndex)

//         console.log(list.results[randomIndex])
//         console.log(list.results[randomIndex].url)
//         request = `${DnD5eAPIroot}${list.results[randomIndex].url}`;
//         console.log(request);

//         await fetch(request)
//         .then(response => response.text())
//         .then(monsterInfo => {
//             info = JSON.parse(monsterInfo);
//         })

//         console.log(info);
//     }
// })()