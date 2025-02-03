let userScore = 0;
let compScore = 0;

//accessing user and comp score
let userscoreNum = document.querySelector("#user-score");
let compscoreNum = document.querySelector("#comp-score");


//accessing our all 3 rock,paper & scissor
const choices = document.querySelectorAll(".choice");

//accessing msg element
const msg = document.querySelector("#msg");


//below we've created the generatecomputerChoice fnx which will be for computer kon sa choice generate kar rha hai
//in this we,ve stored our all 3 choice in options variable using array coz we need index value further
// in classes there's a property > Math.random(); { use for generate random numbers }
//Also Math.floor property use for remove decimal values.
//so basically randomidx variable me hmne store karwa liya apne conmputer ke through 
// random generated value ko , if we look we've multiplied by 3 in the property coz whatever we will multipy, it generate upto a value before the multiplied number
//then we've returned (connects) this randomidx data to our options variable

const genCompChoice = () => {
    const options = ["rock", "paper", "Scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};



//draw game fnx

const gameDraw = () => {
    console.log("game draw");
    msg.innerText = "GAME DRAW, Try Again";
    msg.style.backgroundColor = "black";

};



//showWinner fnx, it passes the userwin here after comparision 

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) { //means if userWin = true;
        userScore++;
        userscoreNum.innerText = userScore;
        console.log("you WIN !");
        msg.innerText = `you WIN ! YOU - ${userChoice} COMP - ${compChoice}`
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compscoreNum.innerText = compScore;
        console.log("you LOSE !");
        msg.innerText = `you LOSE ! COMP - ${compChoice} YOU - ${userChoice}`
        msg.style.backgroundColor = "red";

    }
};



//here below in our playgame fnx we've stored the userchoice and console krwa diya apne userchoice ko
//fir upar ek generateComputerChoice fnx ceate kiya hai hmne jo ki niche call kiya h hmne
//orr usse compChoice me store kia hai
//now see gemCompchoice comments above

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", userChoice);




    // comparing userchoice and computerchoice

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;  //by default userWin true means user win hai
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true; // translating this line > agar comp ki choice paper hoti hai to userwin false matlb user lose ho gya otherwise scissor aati hai toh true means user won ,, and its stored in userWin variable.
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //now user have only scissor as choice
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice); //showWinner fnx ko userwin pass kar dia from above conclusion ki user win hua ya nahi sath me user or computer ki choice bhi pass kar di well uss fnx me above u=hm isse use kar sake
    }

};




//here below, 3no choices ke liye click krne pe unke id access kiye using getAttribute property & userChoice named variable me daal diya 
// ab iss userChoice ko playgame fnx me pass kar diya.(that we have this etc value in our userchoice variable)
//now see comments of playgame fnx

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
