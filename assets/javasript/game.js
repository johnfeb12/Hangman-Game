//record how many times a letter can be pressed 


var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];



///================================================================


//all the variables below that the computer can pick from//

var words = ['Cocaine', 'Money', 'Women', 'Tony', 'Montana','scar','power','boss','miami','drugs','Kingpin','Cuban'];


///================================================================


//Tell the computer to pick a random word from the word bank created above
var word = words[Math.floor(Math.random() * words.length)];
var underscore = ['_'];
var wrongletters = [];


//counters
var wincount = 0;
var losecount = 0;
var guessesleft = 7
var rightguesscounter = 0



console.log(word)

///================================================================

//start game







//give the player amount of dashes and spaces in place of the word there guessing 

			//var is all the words spilt into one letter 
			var splitWordArray = word.split("");
			console.log(splitWordArray);


			
		///////////
		
			for (var i = 0; i < splitWordArray.length; i++){


				console.log(splitWordArray[i])


			
			}

			///make the underscores
			// for (let i = 0; i < word.length; i++) {
			// 		underscore.push('_')
			// 	}
				
			
			// 	console.log(underscore)

			// document.getElementById("wordToGuess").appendChild(underscore)
				
				// var wordToGuessID = document.getElementById("wordToGuess");
				
				// for(var i = 0; i < underscore.length; i++){
				// 	wordToGuessID.innerHTML(underscore[i]);

				// }
				

			//Populate blanks
	for (let i = 0; i < word.length; i++) {
					underscore.push('_')
				
				
 var underscoreplace = document.getElementById("wordToGuess");
	
	var newunderscore = document.createElement("div")

	newunderscore.innerHTML = underscore[i]

	underscoreplace.appendChild(newunderscore)
}





