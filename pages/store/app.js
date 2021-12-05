const games = [
    {
        id: 1 ,
        name: 'Elden Ring',
        description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        image:'https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/2odx6gpsgR6qQ16YZ7YkEt2B.png',
        price: 2499.00
    },
    {
        id: 2 ,
        name: 'Dead Space Remake',
        description: "You are Isaac Clarke, an engineer on the spacecraft USG Ishimura. You're not a warrior. You're not a soldier. You are, however, the last line of defense for the remaining living crew.",
        image: 'https://mms.businesswire.com/media/20210722005823/en/893405/5/DS_TEASER_Still_3840x2160_RGB_logo.jpg?download=1',
        price: 3999.00
    },
    {
        id: 3 ,
        name: 'Control',
        description: "Winner of over 80 awards, Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat.",
        image: 'https://www.escapistmagazine.com/wp-content/uploads/2020/08/Control-702x395.jpg',
        price: 2999.00
    },
    {
        id: 4,
        name: 'Dark Souls 3',
        description: "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1636678210',
        price: 4299.00
    },
    {
        id: 5 ,
        name:'Forza Horizon 5',
        description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
        image:'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1638457209',
        price: 3499.00
    },
    {
        id: 6 ,
        name: 'Resident Evil Village',
        description: "Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.",
        image:"https://wallpapercave.com/wp/wp8737802.png",
        price: 3499.00
    }
]

const listNames = document.querySelector(".right-list");
let gameList = document.querySelector(".desc");
let gameImg = document.querySelector(".leftmain");
for(i=0;i<listNames.children.length;i++){
    listNames.children[i].addEventListener("click",gameButtonClickHandler);
}

function gameButtonClickHandler(ab){
    
    for(i=0;i<games.length;i++){
        if(games[i].name == ab.target.textContent){
            gameList.innerHTML=games[i].description;
            
            
            gameImg.style.backgroundImage = `url(${games[i].image})`;
        }
    }


    
    //console.log(ab.target.textContent)
}