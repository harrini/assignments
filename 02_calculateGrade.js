function calculateGrade(studentScore){

    switch(true){

        case (studentScore > 80 && studentScore<=100):
        return ("Distinction");
        break;

        case (studentScore < 40):
        return ("Fail");
        break;

        default :
        return ("Unknown");
    }

    
}

let studentScore = 35 ;
let grade = calculateGrade(studentScore);
console.log(grade);