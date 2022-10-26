// Getting inputs from user, used to determine Challenge Rating
// Inputs: Single player/Party && Levels

// Use challenge rating to get an array of monsters that fall within that range from API (GET /api/monster with CR as query string parameter)

// Randomly choose a monster from the list, start with only one monster per encounter but can expand upon it

// Get a monster(s) that meets that CR (determined by levels input)

// Display the monster's data

let sayhi = (data) => () => console.log(data);

let monster = JSON.parse('{"name":"Aboleth","hit_points":135,"charisma":18, "actions":[{"desc":"lunge","name":"Multiattack"}]}');

document.getElementById("name").innerHTML = monster['name'];
document.getElementById("health").innerHTML = monster['hit_points'];
document.getElementById("char").innerHTML = monster['charisma'];
document.getElementById("const").innerHTML = monster['constitution'];
document.getElementById("int").innerHTML = monster['intelligence'];
document.getElementById("str").innerHTML = monster['strength'];
document.getElementById("wis").innerHTML = monster['wisdom'];
document.getElementById("xp").innerHTML = monster['xp'];

let display = "Actions: \n";
for(let actions in monster){
    if(actions = 'actions'){
        for(let name in monster){
            let count = 0;
            if(name = 'name'){
                display += "Name: " + monster['actions'][count]['name'] + "\n";
            }
            if(name = 'desc'){
                display += "Description: " + monster['actions'][count]['desc'] + "\n";
            }
            count = count + 1;
        }
    }
}

document.getElementById("dis").innerHTML = display;



