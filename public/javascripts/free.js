$(function(){

	var audio1 = new Audio('sounds/m4a/1.m4a'),
			audio2 = new Audio('sounds/m4a/2.m4a'),
			audio3 = new Audio('sounds/m4a/3.m4a'),
			audio4 = new Audio('sounds/m4a/4.m4a'),
			audio5 = new Audio('sounds/m4a/5.m4a'),
			audio6 = new Audio('sounds/m4a/6.m4a'),
			audio7 = new Audio('sounds/m4a/7.m4a'),
			audio8 = new Audio('sounds/m4a/8.m4a'),
			audio9 = new Audio('sounds/m4a/9.m4a'),
			audio0 = new Audio('sounds/m4a/0.m4a'),
			audioA = new Audio('sounds/m4a/a.m4a'),
			audioB = new Audio('sounds/m4a/b.m4a'),
			audioC = new Audio('sounds/m4a/c.m4a'),
			audioD = new Audio('sounds/m4a/d.m4a'),
			audioE = new Audio('sounds/m4a/e.m4a'),
			audioF = new Audio('sounds/m4a/f.m4a'),
			audioG = new Audio('sounds/m4a/g.m4a'),
			audioH = new Audio('sounds/m4a/h.m4a'),
			audioI = new Audio('sounds/m4a/i.m4a'),
			audioJ = new Audio('sounds/m4a/j.m4a'),
			audioK = new Audio('sounds/m4a/k.m4a'),
			audioL = new Audio('sounds/m4a/l.m4a'),
			audioM = new Audio('sounds/m4a/m.m4a'),
			audioN = new Audio('sounds/m4a/n.m4a'),
			audioO = new Audio('sounds/m4a/o.m4a'),
			audioP = new Audio('sounds/m4a/p.m4a'),
			audioQ = new Audio('sounds/m4a/q.m4a'),
			audioR = new Audio('sounds/m4a/r.m4a'),
			audioS = new Audio('sounds/m4a/s.m4a'),
			audioT = new Audio('sounds/m4a/t.m4a'),
			audioU = new Audio('sounds/m4a/u.m4a'),
			audioV = new Audio('sounds/m4a/v.m4a'),
			audioW = new Audio('sounds/m4a/w.m4a'),
			audioX = new Audio('sounds/m4a/x.m4a'),
			audioY = new Audio('sounds/m4a/y.m4a'),
			audioZ = new Audio('sounds/m4a/z.m4a'),
			prevSound = audioZ,
			file = audioZ,
			keypressed = "";

	var action = function(audio, key){
		if ( isNaN(key) ) {
			$('#numbers').hide();
			$('#letters').show();
			$('body').find('#upper').find('h1').text(key);
			$('body').find('#lower').find('h1').text(key.toLowerCase());
		} else {
			$('#numbers').show();
			$('#letters').hide();
			$('body').find('#numbers').find('h1').text(key);
		}
		prevSound.pause();
		prevSound.currentTime = 0;
		audio.play();
		prevSound = audio;
	};

  $('body').on("keydown", function(event){
		keypressed = event.key.toUpperCase();

		switch (keypressed) {
			case "A":
					action(audioA, keypressed);
					break;

			case "B":
					action(audioB, keypressed);
					break;

			case "C":
					action(audioC, keypressed);
					break;

			case "D":
					action(audioD, keypressed);
					break;

			case "E":
					action(audioE, keypressed);
					break;

			case "F":
					action(audioF, keypressed);
					break;

			case "G":
					action(audioG, keypressed);
					break;

			case "H":
					action(audioH, keypressed);
					break;

			case "I":
					action(audioI, keypressed);
					break;

			case "J":
					action(audioJ, keypressed);
					break;

			case "K":
					action(audioK, keypressed);
					break;

			case "L":
					action(audioL, keypressed);
					break;

			case "M":
					action(audioM, keypressed);
					break;

			case "N":
					action(audioN, keypressed);
					break;

			case "O":
					action(audioO, keypressed);
					break;

			case "P":
					action(audioP, keypressed);
					break;

			case "Q":
					action(audioQ, keypressed);
					break;

			case "R":
					action(audioR, keypressed);
					break;

			case "S":
					action(audioS, keypressed);
					break;

			case "T":
					action(audioT, keypressed);
					break;

			case "U":
					action(audioU, keypressed);
					break;

			case "V":
					action(audioV, keypressed);
					break;

			case "W":
					action(audioW, keypressed);
					break;

			case "X":
					action(audioX, keypressed);
					break;

			case "Y":
					action(audioY, keypressed);
					break;

			case "Z":
					action(audioZ, keypressed);
					break;

			case "0":
					action(audio0, keypressed);
					break;

			case "1":
					action(audio1, keypressed);
					break;

			case "2":
					action(audio2, keypressed);
					break;

			case "3":
					action(audio3, keypressed);
					break;

			case "4":
					action(audio4, keypressed);
					break;

			case "5":
					action(audio5, keypressed);
					break;

			case "6":
					action(audio6, keypressed);
					break;

			case "7":
					action(audio7, keypressed);
					break;

			case "8":
					action(audio8, keypressed);
					break;

			case "9":
					action(audio9, keypressed);
					break;

			default:
					break;
		}
	});
}); // End of jQuery
