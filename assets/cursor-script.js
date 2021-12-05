const $Ball = document.querySelector(".invertedcursor");
const $hoverables = document.querySelectorAll(".hoverable");

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
function onMouseHover() {
	TweenMax.to($Ball, 0.4, {
		scale: 2.4,
	});
}
function onMouseHoverOut() {
	TweenMax.to($Ball, 0.4, {
		scale: 1,
	});
}

