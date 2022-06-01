// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

//=========WORK=============//
// P: conditional statement
// R: return who wins RPS
// E: 
    // rps('scissors','paper') // Player 1 won!
    // rps('scissors','rock') // Player 2 won!
    // rps('paper','paper') // Draw!
// P: 
//create 2 parameters: p1,p2
const rps = (p1, p2) => {
    //draw
    if(p1 === p2){
      return 'Draw!'
    //player 1 wins
    }else if((p1 === 'rock'&& p2 ==='scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')){
      return 'Player 1 won!'
    //player 2 wins
    }else{
      return 'Player 2 won!'
  }
};