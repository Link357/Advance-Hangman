var Letter = require("./letter.js");
var Word = require("./word.js");
for (i=0; i < Word.wordChoice.length; i++){
    function start() {
        console.log(Letter.underScore[i])
        inquirer
          .prompt({
            name: "guess",
            type: "input",
            message: "guess a letter",
          })
          .then(function(answer) {
            // based on their answer, either call the bid or the post functions
            var userInput = answer.guess 
            Letter.letter = GuessuserInput
            Letter.guess();
            Letter.result();
          });
      }
}