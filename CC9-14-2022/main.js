// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

//====== WORK ======//
//P: 3 param
//R: if there is enough space, return 0 ; if not, return number of passengers he can't take
//E: 
    //// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
    // cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
//P:
    //subtract cap - on to get remain space in bus
    //conditional: if wait less than or equal space in bus, return 0
        //else get remaining diff from wait and space in bus

function enough(cap,on,wait){
    let spaceInBus = cap - on;

    if(wait <= spaceInBus){
        return 0
    }else{
        return wait - spaceInBus
    }
}
