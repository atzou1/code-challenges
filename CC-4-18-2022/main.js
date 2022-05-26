// Write function bmi that calculates body mass index (bmi = weight / height2).
    // if bmi <= 18.5 return "Underweight"
    // if bmi <= 25.0 return "Normal"
    // if bmi <= 30.0 return "Overweight"
    // if bmi > 30 return "Obese"


function bmi(weight, height) {
    //include formula (bmi=weight/height^2)
   let bmi = weight / (height*height);
    //create conditional statement to determine underweight,normal,overweight,obese
    return bmi <= 18.5 ? "Underweight": bmi <= 25.0 ? "Normal": bmi <= 30.0 ? "Overweight": "Obese";
}