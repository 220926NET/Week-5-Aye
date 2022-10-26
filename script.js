// Getting inputs from user, used to determine Challenge Rating
// Inputs: Single player/Party && Levels

let calculateDifficulty = () => {
    let xp
    let partySize = document.getElementById("size").value;
    let partyLevel = document.getElementById("level").value;  

  switch(partyLevel) {
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
    switch(true) {
            case v > 50000:
            cr = 30;
            break;
            case v > 62000:
            cr = 24;
            break;
            case v > 50,000:     
            cr = 23;              
            break;   
            case v > 41,000:          
         cr = 22;  
         break;
        case v > 33,000:
       cr = 21;  
        break;
        case v > 25,000:
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
        case v > 15,000:  
        cr = 16; 
        break;
        case v > 13,000: 
        cr = 15;             
        break;
        case (v > 11,500): 
        cr = 14; 
        break;
        case v > 10,000:
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
        cr = 1/4; 
        break;
        case v > 25:
        cr = 1/8; 
        break;
        case (v > 10):
        cr = 0; 
        break;     
    }
console.log(`Your selected cr rating is ${cr}`);
return cr
}

// Use challenge rating to get an array of monsters that fall within that range from API (GET /api/monster with CR as query string parameter)

// Randomly choose a monster from the list, start with only one monster per encounter but can expand upon it

// Get a monster(s) that meets that CR (determined by levels input)

// Display the monster's data
