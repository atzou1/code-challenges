//QUESTION 1
  //Implement a function which multiplies two numbers.
  function multiply(a,b){
      return a*b
    } 


//QUESTION 2
  //Create a function which answers the question "Are you playing banjo?".
  // If your name starts with the letter "R" or lower case "r", you are playing banjo!

  // The function takes a name as its only argument, and returns one of the following strings:

  // name + " plays banjo" 
  // name + " does not play banjo"
  // Names given are always valid strings.

  //===Work====//
    //concat with "plays banjo" or "does not play banjo"
    //make conditional statement and return name with concate string
    function areYouPlayingBanjo(name) {
        if(name[0] === "R"|| name[0] === "r"){
          return name + " plays banjo";
        }else{
        return name + " does not play banjo"
      }
    }