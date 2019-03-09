
var timeOut 	= 8000;
var timeScrol	= 150;

function toDown() {
	if ($('#contentScrol').length > 0) {
		var top = parseInt($('#contentScrol').css("top").replace("px", ""));
		var up = top - 32;
		var height = $('#contentScrol').height();

		if (Math.abs(up) <= height) {
			$('#contentScrol').animate({
				top: up
			}, timeScrol);
		}
	}
}
function toUp() {
	if ($('#contentScrol').length > 0) {
		var top = parseInt($('#contentScrol').css("top").replace("px", ""));
		var down = top + 32;
		var height = $('#contentScrol').height();

		if (down <= 0) {
			$('#contentScrol').animate({
				top: down
			}, timeScrol);
		}
	}
}

$(document).ready(function(){
	$(".scrolTop").click(function(){toUp();});
	$(".scrolBottom").click(function(){toDown();});
});

window.setInterval(lerolero, timeOut);
function lerolero() {
	if ($("#contentScrol").length > 0) {
		var top = parseInt($('#contentScrol').css("top").replace("px", ""));
		var down = top + 32;
		var height = $('#contentScrol').height();
		if (down >= 0) { toDown(); }
		else { $('#contentScrol').animate({ top: 0 }); }
	}
}
