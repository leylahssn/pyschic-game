var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
radomLetter = ""
winCount = 0
lossCount = 0
guessesLeft = 0
guessedLetters = []
defaultGuessesLeft = 9;

window.addEventListener("keypress", onKeyPress, false);
newGame();

