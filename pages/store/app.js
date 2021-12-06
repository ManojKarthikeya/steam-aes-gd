const games = [
    {
        id: 1 ,
        name: 'Elden Ring',
        description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        image:'https://images4.alphacoders.com/115/thumb-1920-1151249.jpg',
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
        name: 'Assassins Creed Origins',
        description: "Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin’s Brotherhood.",
        image: "https://wallpapercave.com/wp/wp3109434.jpg",
        price: 2999.00
    },
    {
        id: 4,
        name: 'Dark Souls III',
        description: "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/773966be-6e02-41dd-8ee2-b6c03e90b854/d8xh5hd-97c09549-0240-45cf-a378-49d7b97b031f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3Mzk2NmJlLTZlMDItNDFkZC04ZWUyLWI2YzAzZTkwYjg1NFwvZDh4aDVoZC05N2MwOTU0OS0wMjQwLTQ1Y2YtYTM3OC00OWQ3Yjk3YjAzMWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9E3WkJ8-EiR7mfuQr8JF29GhWcV-l7xkyITJAKQchms",
        price: 4299.00
    },
    {
        id: 5 ,
        name:'Forza Horizon 5',
        description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
        image:"https://images.alphacoders.com/116/thumb-1920-1168382.jpg",
        price: 3499.00
    },
    {
        id: 6 ,
        name: 'Resident Evil Village',
        description: "Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.",
        image:"https://www.psu.com/wp/wp-content/uploads/2020/10/resident-evil-village-ps5-wallpapers-09.png"
        ,
        price: 3499.00
    }
]

const listNames = document.querySelector(".right-list");
let gameList = document.querySelector(".desc");
let gameImg = document.querySelector(".leftmain");
let gamesList = document.querySelector(".games-list");
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
}



for(i=0;i<games.length;i++){
    const newDiv = document.createElement("div");
    newDiv.innerHTML= `<div class="game">
<div class="gameimage" style="background-image: url(${games[i].image})"></div>
<div class="content">
    <div class="gamename">${games[i].name}</div>
    <div class="gamedesc">${games[i].description}</div>
    <div class="price">${games[i].price}</div>
</div>
</div>`;
gamesList.appendChild(newDiv);
}

