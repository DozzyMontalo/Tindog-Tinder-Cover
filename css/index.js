


// function bmiCalculator(weight, height){
    
//    let bmi = weight/(height * height);  
//     bmi = Math.round(bmi);

//     let value;


//    if (bmi < 18.5) {
//       value = "Your BMI is " + bmi + ", so you are underweight";
//   } if (bmi >= 18.5 && bmi <= 24.9){
//       value = "Your BMI is " + bmi + ", so you have a normal weight";
//   } if (bmi > 24.9) {
//       value = "Your BMI is " + bmi + ", so you are overweight";

//   }
//   return value;
// }

// console.log(bmiCalculator(65,1.8));




function isLeap(year) {
    
    /**************Don't change the code above****************/    
        let result;
        //Write your code here. 
        If (year % 4 === 0 && year % 100 === 0)
           {result = "not leap year";
        } if (year % 4 === 0) {
            result = "leap year";
        }
    
    return result;
        
    
    /**************Don't change the code below****************/    
    
    }

    console.log(isLeap(2000));