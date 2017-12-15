function calculateCurrentGrade() {
    var homework = document.getElementById("homework").value;
    var classwork = document.getElementById("classwork").value;
    var testsAndQuizzes = document.getElementById("testsAndQuizzes").value;
    var hwArray = convertArrayStringToNumber(homework);
    var homeworkAv = averageArray(hwArray);
    var cwArray = convertArrayStringToNumber(classwork);
    var classworkAv = averageArray(cwArray);
    var tqArray = convertArrayStringToNumber(testsAndQuizzes);
    var tqAv = averageArray(tqArray);
    var hwWeight = parseInt(document.getElementById("homeworkWeight").value);
    console.log(hwWeight);
    var cwWeight = parseInt(document.getElementById("classworkWeight").value);
    console.log(cwWeight);
    var tqWeight = parseInt(document.getElementById("testsAndQuizzesWeight").value);
    console.log(tqWeight);
    var currentWeight = (hwWeight + cwWeight + tqWeight);
    console.log(currentWeight);
    var currentHW = (homeworkAv * (hwWeight/100));
    console.log(currentHW);
    var currentCW = (classworkAv * (cwWeight/100));
    console.log(currentCW);
    var currentTQ = (tqAv * (tqWeight/100));
    console.log(currentTQ);
    var currentPoints = currentHW + currentCW + currentTQ;
    console.log(currentPoints);
    var currentGrade = (currentPoints / currentWeight) * 100;
    console.log(currentGrade);
    document.getElementById("currentGrade").innerHTML = Math.round(currentGrade) + "%";
}

function convertArrayStringToNumber(string){
    console.log(string);
    var array = string.split(",");
    for(var i= 0; i< array.length; i ++){
        array[i] = parseInt(array[i]);
    }
    return array;
}

function averageArray(array){
    console.log(array);
    var value = 0;
    for(var i = 0; i < array.length; i++) {
        var av = value += array[i];
        var average = av / array.length;
        console.log(average);
    }
   return average;
}

function calculateGradeNeeded(){
    var grade = parseInt(document.getElementById("grade").value);
    console.log(grade);
    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);
    console.log(desiredGrade);
    var weight = parseInt(document.getElementById("weight").value);
    console.log(weight);
    var gradeNeeded = 100 *(desiredGrade + (weight - grade))/weight;
    console.log(gradeNeeded);
    document.getElementById("gradeNeeded").innerHTML = "You need a " + Math.round(gradeNeeded) + "%" + " to get a " + desiredGrade + "%" + " on the final";
}

