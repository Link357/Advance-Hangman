var Letter = require("./letter.js");

function Word (){
    for (var i = 0; i < this.wordChoice.length; i++) {
    this.letterArray = ["pokemon", "overwatch", "dota"];
    var randomWord = Math.floor(Math.random() * 3)
    this.wordChoice = this.letterArray[randomWord];
    this.pusher = function (){
        this.underScore[i].push("_") 
    }
    this.input = function () {
        Letter.guess()
    }
}
}

module.exports = Word;