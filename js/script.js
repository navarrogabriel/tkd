$(document).ready (function(){
	
	$('#dosMinutos').click(function(){
		disabledButtons();
		var display = $('#countdown');
		startCountdown(60*2, display);
	});

	$('#minutoMedio').click(function(){
		disabledButtons();
		var display = $('#countdown');
		startCountdown (60*1.5, display);
	});

	$('#unMinuto').click(function(){
		disabledButtons();
		var display = $('#countdown');
		startCountdown (60, display);
	});

});

//Recibe la duración (en minutos)
function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function disabledButtons(){
	$("#buttonsDiv :button").attr('disabled', true);
}