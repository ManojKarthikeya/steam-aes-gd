const games = [
	{
		id: 1,
		name: "Witcher 3: Wild Hunt",
		description:
			"As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
		image: "https://wallpapercave.com/wp/wp1854626.jpg",
		price: "₹ 800.00",
	},
	{
		id: 2,
		name: "Cyberpunk 2077",
		description:
			"An open-world, action-adventure story set in Night City. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.",
		image: "https://images.wallpapersden.com/image/download/cyberpunk-2077-2019_a2poZ2aUmZqaraWkpJRmbmdlrWZlbWU.jpg",
		price: "₹ 2999.00",
	},
	{
		id: 3,
		name: "Red Dead Redemption 2",
		description:
			"RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
		image: "https://wallpapercave.com/wp/wp3660596.jpg",
		price: "₹ 3199.00",
	},
	{
		id: 4,
		name: "Grand Theft Auto V",
		description:
			"Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond",
		image: "https://wallpapercave.com/wp/wp1809647.jpg",
		price: "₹ 1978.00",
	},
	{
		id: 5,
		name: "Portal 2",
		description:
			"The Perpetual Testing Initiative has been expanded to allow you to design co-op puzzles for you and your friends!",
		image: "https://wallpapercave.com/wp/xu79pcx.png",
		price: "₹ 349.00",
	},
	{
		id: 6,
		name: "The Elder Scroll V: Skyrim",
		description:
			"skyrim Special Edition brings the epic fantasy to life in stunning detail.New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience. ",
		image: "https://free4kwallpapers.com/uploads/originals/2015/12/16/the-elder-scrolls-v-skyrim-wallpaper.jpg",
		price: "₹ 1779.00",
	},
	{
		id: 7,
		name: "Resident Evil 3",
		description:
			"Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis!",
		image: "https://cdn.wallpapersafari.com/22/17/K9hrqn.jpeg",
		price: "₹ 3499.00",
	},
	{
		id: 8,
		name: "Control",
		description:
			"Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat.",
		image: "https://megathemes.info/wp-content/uploads/2019/07/10-1.jpeg",
		price: "₹ 2999.00",
	},
	// {
	//     id: 9,
	//     name: "Age of Empires 4",
	//     description: "One of the most beloved real-time strategy games returns to glory with Age of Empires IV, putting you at the center of epic historical battles that shaped the world.",
	//     image: "https://forums.ageofempires.com/uploads/default/original/3X/4/b/4b800e3a1c4d1a22eded9bf2e385a1f9346c298d.jpeg",
	//     price: "₹ 2499.00"
	// },
	{
		id: 10,
		name: "Sekiro: Shadows Die Twice",
		description:
			"Carve your own clever path to vengeance in the critically acclaimed adventure from developer FromSoftware, creators of the Dark Souls series.",
		image: "https://i0.wp.com/thekoalition.com/images/2018/08/sekiro-shadows-die-twice-listing-thumb-01-ps4-us-21jun18.png?fit=1600%2C900&ssl=1",
		price: "₹ 2990.00",
	},
	{
		id: 11,
		name: "Elden Ring",
		description:
			"THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
		image: "https://images4.alphacoders.com/115/thumb-1920-1151249.jpg",
		price: "₹ 2499.00",
	},
	{
		id: 12,
		name: "Dead Space Remake",
		description:
			"You are Isaac Clarke, an engineer on the spacecraft USG Ishimura. You're not a warrior. You're not a soldier. You are, however, the last line of defense for the remaining living crew.",
		image: "https://mms.businesswire.com/media/20210722005823/en/893405/5/DS_TEASER_Still_3840x2160_RGB_logo.jpg?download=1",
		price: "₹ 3999.00",
	},
	{
		id: 12,
		name: "Assassins Creed Origins",
		description:
			"Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin’s Brotherhood.",
		image: "https://wallpapercave.com/wp/wp3109434.jpg",
		price: "₹ 2999.00",
	},
	{
		id: 13,
		name: "Dark Souls III",
		description:
			"Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
		image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/773966be-6e02-41dd-8ee2-b6c03e90b854/d8xh5hd-97c09549-0240-45cf-a378-49d7b97b031f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3Mzk2NmJlLTZlMDItNDFkZC04ZWUyLWI2YzAzZTkwYjg1NFwvZDh4aDVoZC05N2MwOTU0OS0wMjQwLTQ1Y2YtYTM3OC00OWQ3Yjk3YjAzMWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9E3WkJ8-EiR7mfuQr8JF29GhWcV-l7xkyITJAKQchms",
		price: "₹ 4299.00",
	},
	{
		id: 14,
		name: "Forza Horizon 5",
		description:
			"Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
		image: "https://images.alphacoders.com/116/thumb-1920-1168382.jpg",
		price: "₹ 3499.00",
	},
	{
		id: 15,
		name: "Resident Evil Village",
		description:
			"Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.",
		image: "https://www.psu.com/wp/wp-content/uploads/2020/10/resident-evil-village-ps5-wallpapers-09.png",
		price: "₹ 3499.00",
	},
];

const battleRoyale = [
	{
		id: 1,
		name: "Call of Duty: Warzone",
        title : "A SEISMIC SHIFT HITS VERDANSK",
		description:
			"Warzone™ Season Six explodes onto the scene with hidden bunkers, new weapons, and a look at Adler’s endgame. Drop into Call of Duty’s free-to-play Battle Royale experience today.",
		image: "https://asset.vg247.com/warzone_season_6_art.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/warzone_season_6_art.jpg",
	},
	{
		id: 2,
		name: "Apex Legends",
        title: "BEYOND BATTLE ROYALE",
		description:
			"Show 'em what you're made of in Apex Legends, a free-to-play hero shooter where contenders from across the Frontier team up to battle for glory, fame, and fortune.",
		image: "https://wallpapersmug.com/download/1920x1080/2c079e/poster-game-apex-legends.jpg",
	},
	{
		id: 3,
		name: "Fortnite",
        title: "SEE YOU ON THE FLIP SIDE!",
		description:
			" A PERFECT STARTING POINT FOR NEW PLAYERS AND A PERFECT RETURNING POINT FOR THOSE WHO HAVEN’T PLAYED IN A WHILE. WITNESS THE WINTRY NEW ISLAND THAW.",
		image: "https://wallpaperaccess.com/full/38280.jpg",
	},
];

const listNames = document.querySelector(".right-list");
const gameList = document.querySelector(".desc");
const gameImg = document.querySelector(".leftmain");
const gamesList = document.querySelector(".games-list");
const btGamesList = document.querySelector(".bt-games-list");

for (i = 0; i < listNames.children.length; i++) {
	listNames.children[i].addEventListener("click", gameButtonClickHandler);
}

function gameButtonClickHandler(ab) {
	for (i = 0; i < games.length; i++) {
		if (games[i].name == ab.target.textContent) {
			gameList.innerHTML = games[i].description;
			gameImg.style.backgroundImage = `url(${games[i].image})`;
		}
	}
}

for (i = 0; i < games.length; i++) {
	const newDiv = document.createElement("div");
	newDiv.innerHTML = `<div class="game">
<div class="gameimage" style="background-image: url(${games[i].image})">
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg class="addsvg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
<path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2
	s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2
	S39.604,28,38.5,28z"/>
    </svg>
</div>
<div class="content">
    <div class="gamename">${games[i].name}</div>
    <div class="gamedesc">${games[i].description}</div>
    <div class="price">${games[i].price}</div>
</div>
</div>`;
	gamesList.appendChild(newDiv);
}

for (game of battleRoyale) {
	const newDiv = document.createElement("div");
	newDiv.innerHTML = `<div class="bt-game">
    <div class="bt-game-image" style="background-image: url(${game.image})">
        <div class="bt-content">
            <div class="bt-game-title">${game.title}</div>
                <div class="bt-game-desc">${game.description}</div>
                <div class="playnowbutton">
                    <div class="bt-playnow">PLAY FOR FREE</div>
                    <div class="bt-watch-trailer">WATCH TRAILER</div>
                </div>
            </div>
        </div>
    </div>
</div>`;
	btGamesList.appendChild(newDiv);
}

console.log(support)

