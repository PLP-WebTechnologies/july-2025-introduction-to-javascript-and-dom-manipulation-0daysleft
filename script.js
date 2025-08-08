
//Variable Declarations
let showAddResult = document.getElementById('add');
let addButton = document.getElementById('add-btn');
let number = 0;
//A function to add numbers

function add(){
    number = number + 1;
    showAddResult.innerHTML = number;
    moreThanTen()
}

//When the button is clicked each time it will call the add function
addButton.onclick = () => add()

// A function to alert the user when the number is more than 10

function moreThanTen(){
    if(number >= 10){
        alert("You have clicked the button " + number + " times!! \nThe Counter Will Reset and Start Over Again!!!!!!");
        number = 0;
    }
}


//Loop examples

//A while loop to print out numbers i a count down manner

let countNumber = 10;

while(countNumber >= 1){
    console.log("The number is: ", countNumber);
    //if(countNumber == 1){}
    countNumber--;
}

//This for loop, loops through numbers 1 to 10 and prints them out

for(let i = 0;i <= 10; i++){
    console.log("The value of i is: ", i)
}

