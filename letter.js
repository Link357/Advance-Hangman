function Letter(){
    this.underScore = "_";
    this.letterGuess;
    this.right = false
    this.guess = function () {
        if (this.letterGuess === this.underScore)
            this.underScore = this.letterGuess;
        else {
            this.underscore = "_"
        }
        }
    this.result = function () {
        if (this.letterGuess === this.underScore) {
            return true;         
        }
        else {
            return false;          
        }
    }
    
    
}

module.exports = Letter;