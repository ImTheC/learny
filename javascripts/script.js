$(function(){

	var number1 = new Audio('sounds/1.mp3'),
			number2 = new Audio('sounds/2.mp3'),
			number3 = new Audio('sounds/3.mp3'),
			number4 = new Audio('sounds/4.mp3'),
			number5 = new Audio('sounds/5.mp3'),
			number6 = new Audio('sounds/6.mp3'),
			number7 = new Audio('sounds/7.mp3'),
			number8 = new Audio('sounds/8.mp3'),
			number9 = new Audio('sounds/9.mp3'),
			number0 = new Audio('sounds/0.mp3'),
			letterA = new Audio('sounds/a.mp3'),
			letterB = new Audio('sounds/b.mp3'),
			letterC = new Audio('sounds/c.mp3'),
			letterD= new Audio('sounds/d.mp3'),
			letterE= new Audio('sounds/e.mp3'),
			letterF= new Audio('sounds/f.mp3'),
			letterG= new Audio('sounds/g.mp3'),
			letterH= new Audio('sounds/h.mp3'),
			letterI= new Audio('sounds/i.mp3'),
			letterJ= new Audio('sounds/j.mp3'),
			letterK= new Audio('sounds/k.mp3'),
			letterL= new Audio('sounds/l.mp3'),
			letterM= new Audio('sounds/m.mp3'),
			letterN= new Audio('sounds/n.mp3'),
			letterO= new Audio('sounds/o.mp3'),
			letterP= new Audio('sounds/p.mp3'),
			letterQ= new Audio('sounds/q.mp3'),
			letterR= new Audio('sounds/r.mp3'),
			letterS= new Audio('sounds/s.mp3'),
			letterT= new Audio('sounds/t.mp3'),
			letterU= new Audio('sounds/u.mp3'),
			letterV= new Audio('sounds/v.mp3'),
			letterW= new Audio('sounds/w.mp3'),
			letterX= new Audio('sounds/x.mp3'),
			letterY= new Audio('sounds/y.mp3'),
			letterZ= new Audio('sounds/z.mp3'),
			prevSound = letterZ;

	var switchAudio = function(audio){
		prevSound.pause();
		prevSound.currentTime = 0;
		audio.play();
		prevSound = audio;
	};

  $('body').on("keydown", function(event){
		var keypressed = event.key.toUpperCase();

		switch (keypressed) {
			case "A":
					switchAudio(letterA);
					$(this).find('h1').text(keypressed);
					break;

			case "B":
					switchAudio(letterB);
					$(this).find('h1').text(keypressed);
					break;

			case "C":
					switchAudio(letterC);
					$(this).find('h1').text(keypressed);
					break;

			case "D":
					switchAudio(letterD);
					$(this).find('h1').text(keypressed);
					break;

			case "E":
					switchAudio(letterE);
					$(this).find('h1').text(keypressed);
					break;

			case "F":
					switchAudio(letterF);
					$(this).find('h1').text(keypressed);
					break;

			case "G":
					switchAudio(letterG);
					$(this).find('h1').text(keypressed);
					break;

			case "H":
					switchAudio(letterH);
					$(this).find('h1').text(keypressed);
					break;

			case "I":
					switchAudio(letterI);
					$(this).find('h1').text(keypressed);
					break;

			case "J":
					switchAudio(letterJ);
					$(this).find('h1').text(keypressed);
					break;

			case "K":
					switchAudio(letterK);
					$(this).find('h1').text(keypressed);
					break;

			case "L":
					switchAudio(letterL);
					$(this).find('h1').text(keypressed);
					break;

			case "M":
					switchAudio(letterM);
					$(this).find('h1').text(keypressed);
					break;

			case "N":
					switchAudio(letterN);
					$(this).find('h1').text(keypressed);
					break;

			case "O":
					switchAudio(letterO);
					$(this).find('h1').text(keypressed);
					break;

			case "P":
					switchAudio(letterP);
					$(this).find('h1').text(keypressed);
					break;

			case "Q":
					switchAudio(letterQ);
					$(this).find('h1').text(keypressed);
					break;

			case "R":
					switchAudio(letterR);
					$(this).find('h1').text(keypressed);
					break;

			case "S":
					switchAudio(letterS);
					$(this).find('h1').text(keypressed);
					break;

			case "T":
					switchAudio(letterT);
					$(this).find('h1').text(keypressed);
					break;

			case "U":
					switchAudio(letterU);
					$(this).find('h1').text(keypressed);
					break;

			case "V":
					switchAudio(letterV);
					$(this).find('h1').text(keypressed);
					break;

			case "W":
					switchAudio(letterW);
					$(this).find('h1').text(keypressed);
					break;

			case "X":
					switchAudio(letterX);
					$(this).find('h1').text(keypressed);
					break;

			case "Y":
					switchAudio(letterY);
					$(this).find('h1').text(keypressed);
					break;

			case "Z":
					switchAudio(letterZ);
					$(this).find('h1').text(keypressed);
					break;

			case "0":
					switchAudio(number0);
					$(this).find('h1').text(keypressed);
					break;

			case "1":
					switchAudio(number1);
					$(this).find('h1').text(keypressed);
					break;

			case "2":
					switchAudio(number2);
					$(this).find('h1').text(keypressed);
					break;

			case "3":
					switchAudio(number3);
					$(this).find('h1').text(keypressed);
					break;

			case "4":
					switchAudio(number4);
					$(this).find('h1').text(keypressed);
					break;

			case "5":
					switchAudio(number5);
					$(this).find('h1').text(keypressed);
					break;

			case "6":
					switchAudio(number6);
					$(this).find('h1').text(keypressed);
					break;

			case "7":
					switchAudio(number7);
					$(this).find('h1').text(keypressed);
					break;

			case "8":
					switchAudio(number8);
					$(this).find('h1').text(keypressed);
					break;

			case "9":
					switchAudio(number9);
					$(this).find('h1').text(keypressed);
					break;

			case "9":
					switchAudio(number9);
					$(this).find('h1').text(keypressed);
					break;

			default:
					break;
		}

	});
}); // End of jQuery
