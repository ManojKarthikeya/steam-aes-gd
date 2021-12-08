let MENU_SHOW = false;
const menuButton = document.querySelector(".menu");
const menucontainer = document.querySelector(".menucontainer");
const main = document.querySelector(".main");

if(Math.random > 0.8){
	console.log("bruhh");
}

function menuButtonClickHandler() {
	console.log("clicked");
	if (MENU_SHOW == false) {
		main.style.display="none";
		menucontainer.style.display = "block";
		MENU_SHOW = true;
	} else {
		main.style.display="block"
		menucontainer.style.display = "none";
		MENU_SHOW = false;
	}
}


