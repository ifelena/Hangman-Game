
// Create array of hangman words to be solved
var hangmanWords = ['Maui', 'Trinidad', 'Kauai', 'Jamaica', 'Antigua', 
	'Menorca', 'Bermuda'];

var randomWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];


var s;
var count = 0;

//Empty array to store guesses

var answerArray = [];


// Replace letters in string with underscores
// The number of underscores replace the number of letters in the word

function startUp()
{
	for (var i = 0; i < randomWord.length; i++)
	{
		answerArray[i] = "_";
	}

	//answer letters go in a  string 
	s = answerArray.join(" ");
	document.getElementById("answer").innerHTML = s;

}

//Get the letter the user types
function Letter()
{
	var letter = document.getElementById("letter").value;

	if (letter.length > 0)
	{
		for (var i = 0; i < randomWord.length; i++)
		{	
			if (randomWord[i] === letters)
			{
				answerArray[i] = letter;	
			}

	
		}	

		// Set counter to start at 15 and count back
		countBack = 15;
		document.getElementById("counter").innerHTML = count;
		document.getElementById("answer").innerHTML = answerArray.join(" ");

	}
	if (count<15)
	{
		document.getElementById("stat").innerHTML = "Game Over!";
	}	
	
}		

	


function myFunction() {
    document.getElementById("demo").innerHTML = "lettersGuessed";
}
myFunction();

//if userGuess === wordLetters, append underscore with userGuess

// On click (userGuess), subtract 1 from numbers remaining 



// If word is complete, add 1 point to Wins, and reset game with new word to guess
if (userGuess === wordletter {
	wins++;
} else {
	loses++;

});

// If guesses run out before word solved, add one point to Loses, and reset game with new word to guess


// If user does nto solve word before letters run out. add one point to Loses


\

