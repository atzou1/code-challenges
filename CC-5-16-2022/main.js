// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

//=====WORK==========//
//P: function with list of strings
//R: return a string that filters friends with exactly 4 letters in name
//E: 
    //EX) friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
//P:
    //return a filter of friends string
    //filter grabs only strings with 4 letters
function friend(friends){
    return friends.filter(friends => friends.length === 4)
  }