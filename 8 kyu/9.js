/* Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese" */

function bmi(weight, height) {
    let index = weight / height**2
      if (index <= 18.5 ) return "Underweight";
      if (index <= 25.0  ) return "Normal";
      if (index <= 30.0 ) return "Overweight";
      if (index  > 30  ) return "Obese";
  }
  console.log(bmi(80,1.80));