<<<<<<< HEAD
//P: 1 param
//R: return "Keep It Simple Stupid" if complex, return "Good work Joe!" if simple
//E:
//'Joe had a bad day', "Good work Joe!"
//'Joe is having no fun'), "Keep It Simple Stupid"
//P:
//create variable for words
//create variable for letters
//return conditional

    function isKiss(str){
        const words = str.split(' '); //split string to get individual words
        const simple = words.every(word => word.length <= words.length); //finds every word that matches the length of words
        return simple ? "Good work!" : "Keep It Simple Stupid" //conditional to determine if simple or complex
=======
//P: 1 param
//R: return "Keep It Simple Stupid" if complex, return "Good work Joe!" if simple
//E:
//'Joe had a bad day', "Good work Joe!"
//'Joe is having no fun'), "Keep It Simple Stupid"
//P:
//create variable for words
//create variable for letters
//return conditional

    function isKiss(str){
        const words = str.split(' '); //split string to get individual words
        const simple = words.every(word => word.length <= words.length); //finds every word that matches the length of words
        return simple ? "Good work!" : "Keep It Simple Stupid" //conditional to determine if simple or complex
>>>>>>> 8504b1c86ddbb66ecd519297e002a0e7348a01e1
      }