let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector('#msg');
const uscoreShow=document.querySelector('#user-score');
const cscoreShow=document.querySelector('#comp-score');

const genCompChoice = () =>{
    const options=['rock', 'paper', 'scissors'];
    //rock, paper , scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];


}

const drawGame =() =>{
        msg.innerText= 'Game was Draw. Play again'
}
const showWinner= (userWin,userChoice,compChoice) =>{
    if(userWin){
        msg.innerText= `You Win!! your ${userChoice} beats ${compChoice}`;
        userScore++;
        uscoreShow.innerText=userScore;


    }
    else{
        msg.innerText=`You Lose!! ${compChoice} beats your ${userChoice}`;
        compScore++;
        cscoreShow.innerText=compScore;
    }
}

const playGame = (userChoice) =>{
    
    //Generat computer choice -> modular way of programming
    const compChoice=genCompChoice();
    if(userChoice === compChoice)
    {
        //Draw Game
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice==='rock')
        {
            //scissors, paper
            userWin= compChoice ==='paper'?false:true;
        } else if(userChoice ==='paper')
        {
            //rock,scissors
            userWin=compChoice==='scissors'?false:true;
        }
        else{
            //rock,paper
            userWin = compChoice==='rock'?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}
choices.forEach((choice) => {
    const userChoice=choice.getAttribute('id');
    choice.addEventListener('click',()=>{
       
        playGame(userChoice);

    })

}
);