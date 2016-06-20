$(function(){

	var audio1 = new Audio('sounds/1.mp3'),
			audio2 = new Audio('sounds/2.mp3'),
			audio3 = new Audio('sounds/3.mp3'),
			audio4 = new Audio('sounds/4.mp3'),
			audio5 = new Audio('sounds/5.mp3'),
			audio6 = new Audio('sounds/6.mp3'),
			audio7 = new Audio('sounds/7.mp3'),
			audio8 = new Audio('sounds/8.mp3'),
			audio9 = new Audio('sounds/9.mp3'),
			audio0 = new Audio('sounds/0.mp3'),
			audioA = new Audio('sounds/a.mp3'),
			audioB = new Audio('sounds/b.mp3'),
			audioC = new Audio('sounds/c.mp3'),
			audioD = new Audio('sounds/d.mp3'),
			audioE = new Audio('sounds/e.mp3'),
			audioF = new Audio('sounds/f.mp3'),
			audioG = new Audio('sounds/g.mp3'),
			audioH = new Audio('sounds/h.mp3'),
			audioI = new Audio('sounds/i.mp3'),
			audioJ = new Audio('sounds/j.mp3'),
			audioK = new Audio('sounds/k.mp3'),
			audioL = new Audio('sounds/l.mp3'),
			audioM = new Audio('sounds/m.mp3'),
			audioN = new Audio('sounds/n.mp3'),
			audioO = new Audio('sounds/o.mp3'),
			audioP = new Audio('sounds/p.mp3'),
			audioQ = new Audio('sounds/q.mp3'),
			audioR = new Audio('sounds/r.mp3'),
			audioS = new Audio('sounds/s.mp3'),
			audioT = new Audio('sounds/t.mp3'),
			audioU = new Audio('sounds/u.mp3'),
			audioV = new Audio('sounds/v.mp3'),
			audioW = new Audio('sounds/w.mp3'),
			audioX = new Audio('sounds/x.mp3'),
			audioY = new Audio('sounds/y.mp3'),
			audioZ = new Audio('sounds/z.mp3'),
			prevSound = audioZ,
			file = audioZ,
			keypressed = "";

	var action = function(audio, key){
		$('body').find('#upper').find('h1').text(key);
		$('body').find('#lower').find('h1').text(key.toLowerCase());
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
