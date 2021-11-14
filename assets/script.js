let MENU_SHOW = false;

const $Ball = document.querySelector(".invertedcursor");
const $hoverables = document.querySelectorAll(".hoverable");
const menuButton = document.querySelector(".menu");
const menucontainer = document.querySelector(".menucontainer");
const main = document.querySelector(".main");

document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
	$hoverables[i].addEventListener("mouseenter", onMouseHover);
	$hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

function onMouseMove(e) {
	TweenMax.to($Ball, 0.4, {
		x: e.pageX - 15,
		y: e.pageY - 15,
	});
}

// Hover an element
function onMouseHover() {
	TweenMax.to($Ball, 0.3, {
		scale: 3,
	});
}

function onMouseHoverOut() {
	TweenMax.to($Ball, 0.3, {
		scale: 1,
	});
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

menuButton.addEventListener("click", menuButtonClickHandler);
