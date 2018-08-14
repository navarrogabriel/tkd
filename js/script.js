
$(document).ready (function(){

	//MODAL


	var countR1 = 0;
	var countA1 = 0;
	var countR2 = 0;
	var countA2 = 0;
	var countR3 = 0;
	var countA3 = 0;
	var countR4 = 0;
	var countA4 = 0;


//------------------------CRONOMETRO--------------------------------------


//Recibe la duración (en minutos)
function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var tiempo = minutes + ":" + seconds;
        display.text(tiempo);
        var sumadorR = 0;
        var sumadorA = 0;

        if (--timer < 0) {
        	if (countR1>countA1){
          		sumadorR = sumadorR + 1;
        		$('#TotalR').html("Total: "+sumadorR+"");
        		clearInterval (interval);
        		}

    		 if(countA1>countR1){
	      		sumadorA = sumadorA + 1;
	    		$('#TotalA').html("Total: "+sumadorA+"");
	    		clearInterval (interval);
	    		}
	    	 if (countR2>countA2){
          		sumadorR = sumadorR + 1;
        		$('#TotalR').html("Total: "+sumadorR+"");
        		clearInterval (interval);
        		}

    		 if(countA2>countR2){
	      		sumadorA = sumadorA + 1;
	    		$('#TotalA').html("Total: "+sumadorA+"");
	    		clearInterval (interval);
	    		}
	    	 if (countR3>countA3){
          		sumadorR = sumadorR + 1;
        		$('#TotalR').html("Total: "+sumadorR+"");
        		clearInterval (interval);
        		}
        	 if(countA3>countR3){
	      		sumadorA = sumadorA + 1;
	    		$('#TotalA').html("Total: "+sumadorA+"");
	    		clearInterval (interval);
	    		}
	    	 if (countR4>countA4){
          		sumadorR = sumadorR + 1;
        		$('#TotalR').html("Total: "+sumadorR+"");
        		clearInterval (interval);
        		}
        	 if(countA4>countR4){
	      		sumadorA = sumadorA + 1;
	    		$('#TotalA').html("Total: "+sumadorA+"");
	    		clearInterval (interval);
	    		}

        	}
        
    }, 1000);
}

function disabledButtons(){
	$("#buttonsDiv :button").attr('disabled', true);
}


$("#Comenzar").click(function() {

	var seleccion = $("#Tiempo option:selected").text();
	var time = 60;
	if (seleccion != "Tiempo") {
		if(seleccion == "1:00"){
			disabledButtons();
			var display = $('#countdown');
			startCountdown (time, display);
		}
		if(seleccion == "1:30"){
			disabledButtons();
			var display = $('#countdown');
			startCountdown (time*1.5, display);
		}
		if(seleccion == "2:00"){
			disabledButtons();
			var display = $('#countdown');
			startCountdown (time*2, display);
		}
	}
	
	})


//------------------------CRONOMETRO--------------------------------------


//---------------------Contador de puntos---------------------------------


//Acciones de Teclas - Suma de puntos
	$(document).keydown(function(e){
		//Puntos Rojo Juez 1
		if (e.keyCode == 65){
			countR1 = countR1 + 1;
			$('#pR1').html(""+countR1+"")
					}
		if (e.keyCode == 66){
			countR1 = countR1 + 2;
			$('#pR1').html(""+countR1+"")
					}

		if (e.keyCode == 67){
			countR1 = countR1 + 3;
			$('#pR1').html(""+countR1+"")
					}
		//Puntos Azul Juez 1
		if (e.keyCode == 68){
			countA1 = countA1 + 1;
			$('#pA1').html(""+countA1+"")
					}
		if (e.keyCode == 69){
			countA1 = countA1 + 2;
			$('#pA1').html(""+countA1+"")
					}

		if (e.keyCode == 70){
			countA1 = countA1 + 3;
			$('#pA1').html(""+countA1+"")
					}
		//Puntos Rojo Juez 2
		if (e.keyCode == 71){
			countR2 = countR2 + 1;
			$('#pR2').html(""+countR2+"")
					}
		if (e.keyCode == 72){
			countR2 = countR2 + 2;
			$('#pR2').html(""+countR2+"")
					}

		if (e.keyCode == 73){
			countR2 = countR2 + 3;
			$('#pR2').html(""+countR2+"")
					}
		//Puntos Azul Juez 2
		if (e.keyCode == 74){
			countA2 = countA2 + 1;
			$('#pA2').html(""+countA2+"")
					}
		if (e.keyCode == 75){
			countA2 = countA2 + 2;
			$('#pA2').html(""+countA2+"")
					}

		if (e.keyCode == 76){
			countA2 = countA2 + 3;
			$('#pA2').html(""+countA2+"")
					}
				//Puntos Rojo Juez 3
		if (e.keyCode == 77){
			countR3 = countR3 + 1;
			$('#pR3').html(""+countR3+"")
					}
		if (e.keyCode == 78){
			countR3 = countR3 + 2;
			$('#pR3').html(""+countR3+"")
					}

		if (e.keyCode == 79){
			countR3 = countR3 + 3;
			$('#pR3').html(""+countR3+"")
					}
		//Puntos Azul Juez 3
		if (e.keyCode == 80){
			countA3 = countA3 + 1;
			$('#pA3').html(""+countA3+"")
					}
		if (e.keyCode == 81){
			countA3 = countA3 + 2;
			$('#pA3').html(""+countA3+"")
					}

		if (e.keyCode == 82){
			countA3 = countA3 + 3;
			$('#pA3').html(""+countA3+"")
					}

				//Puntos Rojo Juez 4
		if (e.keyCode == 83){
			countR4 = countR4 + 1;
			$('#pR4').html(""+countR4+"")
					}
		if (e.keyCode == 84){
			countR4 = countR4 + 2;
			$('#pR4').html(""+countR4+"")
					}

		if (e.keyCode == 85){
			countR4 = countR4 + 3;
			$('#pR4').html(""+countR4+"")
					}
		//Puntos Azul Juez 4
		if (e.keyCode == 86){
			countA4 = countA4 + 1;
			$('#pA4').html(""+countA4+"")
					}
		if (e.keyCode == 87){
			countA4 = countA4 + 2;
			$('#pA4').html(""+countA4+"")
					}

		if (e.keyCode == 88){
			countA4 = countA4 + 3;
			$('#pA4').html(""+countA4+"")
					}

	});		





})
