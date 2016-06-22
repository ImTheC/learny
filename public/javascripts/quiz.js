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
			audioFind = new Audio('sounds/quiz/find.m4a'),
			audioCheer = new Audio('sounds/quiz/cheer.mp3'),
			audioWayToGo = new Audio('sounds/quiz/waytogo.m4a'),
			audioNiceJob = new Audio('sounds/quiz/nicejob.m4a'),
			audioThatsRight = new Audio('sounds/quiz/thatsright.m4a'),
			audioWrong = new Audio('sounds/quiz/wrong.m4a'),
			prevSound = audioZ,
			file = audioZ,
			choice1 = "A",
			choice2 = "B",
			choice3 = "C",
			random = 0,
			answer = "";
			audioCheer.volume = 0.4;

	var randomLetter = function(){
		var asciiCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
		return String.fromCharCode(asciiCode);
	};

	var randomNumber = function(){
		var asciiCode = Math.floor(Math.random() * (57 - 48 + 1)) + 48;
		return String.fromCharCode(asciiCode);
	};

	var displayChoices = function(){
		$(".card").fadeIn("fast");
		choice1 = randomLetter();
		$('body').find('#card1').text(choice1);

		do {
			choice2 = randomLetter();
		} while (choice2 === choice1);

		$('body').find('#card2').text(choice2);

		do {
			choice3 = randomLetter();
		} while (choice3 === choice1 || choice3 === choice2);
		$('body').find('#card3').text(choice3);

		random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

		switch(random) {
			case 1:
				answer = $('body').find('#card1').text();
				audioFind.play();
				audioFind.addEventListener("ended", function() {
			    sayLetter(answer);
				});
				break;

			case 2:
				answer = $('body').find('#card2').text();
				audioFind.play();
				audioFind.addEventListener("ended", function() {
			    sayLetter(answer);
				});
				break;

			case 3:
				answer = $('body').find('#card3').text();
				audioFind.play();
				audioFind.addEventListener("ended", function() {
			    sayLetter(answer);
				});
				break;

			default:
				break;
		}
	};

	displayChoices();

	var action = function(audio, key){
		prevSound.pause();
		prevSound.currentTime = 0;
		audio.play();
		prevSound = audio;
	};

	$('.card').on("click", function(){
		checkAnswer($(this).find('h1').text());
	});

// if guess is correct pick something to say, then pick a new set of letters
	var checkAnswer = function(guess) {
		if ( guess === answer ) {

			audioCheer.currentTime = 0;
			audioCheer.play();
			$("#dance").fadeIn(1500).delay(3000).fadeOut("fast", displayChoices);
			$(".card").fadeOut(500).delay(3500);

			random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

			switch(random) {
				case 1:
					audioWayToGo.play();
					break;

				case 2:
					audioThatsRight.play();
					break;

				case 3:
					audioNiceJob.play();
					break;

				default:
					break;
			}
		} else {
			audioWrong.play();
			audioWrong.addEventListener("ended", function() {
				audioFind.play();
				audioFind.addEventListener("ended", function() {
			    sayLetter(answer);
				});
			});
		}
	};

  $('body').on("keydown", function(event){
		var keypressed = event.key.toUpperCase();
		checkAnswer(keypressed);
	});

	var sayLetter = function(keypressed) {
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

			default:
					displayChoices();
					break;
		}
	};

}); // End of jQuery
