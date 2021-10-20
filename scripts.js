let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

document.getElementById("next-lbl").innerHTML = nextPlayer;
//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    for(let i=1; i<10; i++)
    {
        document.getElementById("c"+i).appendChild(document.createElement("button")).innerHTML = "[]";
    }
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    event.path[1].removeChild(event.path[0]);
    event.path[1].innerHTML = nextPlayer;
    event.path[1].style.textAlign = 'center';

    if(nextPlayer == "[X]") nextPlayer = "[0]";
    else nextPlayer = "[X]";

    document.getElementById("next-lbl").innerHTML = nextPlayer;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        document.getElementById("game-over-lbl").innerHTML = "Game Over";
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    for(let i=1; i<10; i++)
    {
        if(document.getElementById("c"+i).firstChild.innerHTML == "[ ]" || document.getElementById("c" + i).innerHTML == "[]")
        return false;
    }
    return true;
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
