function getValues(){
    //get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    
    //validate the input & convert into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        
        //call fizzBuzz
        let fbArray = fizzBuzzV3(fizzValue, buzzValue);
        //call displayfbArray
        displayData(fbArray);

    } else {
        alert("You must enter an integer");
    }
}

//Traditional Solve Fizz Buzz with a for loop
function fizzBuzz(fizzValue, buzzValue) {
   
    let returnArray = [];

    //use a for loop to count from 0 to 100
    for (var i = 1; i <= 100; i++) {

        //If the integer is divisible by the fizzValue and the buzzValue add "FizzBuzz" to the Array
        if (i % fizzValue == 0 && i % buzzValue == 0) { 
            returnArray.push("FizzBuzz");
        
        //If the integer is divisible by the fizzValue, add "Fizz" to the Array
        } else if (i % fizzValue == 0) { 
            returnArray.push("Fizz");

        //If the integer is divisible by the buzzValue, add "Buzz" to the Array
        } else if (i % buzzValue == 0) { 
            returnArray.push("Buzz");
        //If none of the conditions are met return the integer
        } else { 
            returnArray.push(i);
        }
    }
     return returnArray;
}

//fizzBuzzV2 switch statement
function fizzBuzzV2(fizzValue, buzzValue){

    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {
        
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch(true){
            case Fizz && Buzz:{
                returnArray.push("FizzBuzz");
                break;
            }
            case Fizz: {
                returnArray.push("Fizz");
                break;
            }
            case Buzz: {
                returnArray.push("Buzz");
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

//fizzBuzzV3 ternary operator
function fizzBuzzV3(fizzValue, buzzValue){
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '' ) || i)
        returnArray.push(value);
    }
    return returnArray;
}
//loop over the array and create a tablerow for each item
function displayData(fbArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        //grab just the tds and put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i+1]);
        rowCols[1].textContent = fbArray[i+1];

        rowCols[2].classList.add(fbArray[i+2]);
        rowCols[2].textContent = fbArray[i+2];

        rowCols[3].classList.add(fbArray[i+3]);
        rowCols[3].textContent = fbArray[i+3];

        rowCols[4].classList.add(fbArray[i+4]);
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);
    }
}
