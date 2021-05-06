var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
//"WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot

// "LOSE" - Player robot's health is zero or less

//You can also log multiplt values at once like this
//console.log(playerName, playerAttack, playerHealth);

//For Loop to display enemy Names
/*for( var i=0; i<enemyNames.length; i++){
    console.log(enemyNames[i]);
}*/

// function to generate a random numberic value
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min +1)+min);
    return value;
};

var fight = function(enemyName){

// repeat and execute as long as the enemy-robot is alive
while(playerHealth > 0 && enemyHealth > 0){

    //Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //if yes (true), leave fight
       if (confirmSkip){
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            //subtarct money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney -10);
            console.log("playerMoney", playerMoney);
            break;
        }
    
        //if no (fals), ask question again by running fight() again
        else{
            fight();
            }
    }

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT"){

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);

        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = Math.max(0, enemyHealth-damage);
    
        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //Log a resulting message to the console so we know that it worked.

        //check enemy's health
        if (enemyHealth <=0){
            window.alert(enemyName + " has died!");
            break;
        }

        else{
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // generate random damage value based on enemy's attack power
        var damage = randomNumber(enemyAttack-3, enemyAttack);

        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use taht result to update the value in the 'playerHealth' variable
        playerHealth = Math.max(0, playerHealth - damage);

        //Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //Check player's health
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
            break;
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    

    else{
        window.alert("You need to choose a valid option. Try again!");
    }
}

};

// function to start a new game
var startGame = function(){

    // reset player stat
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for(var i=0; i<enemyNames.length; i++){
    // let player know what round they are in, remember that the array start at 0 so it needs 1 added to it
    if(playerHealth>0){
        window.alert("Welcome to Robot Gladiators! Round: " + (i+1));

        // pick new enemy based on the array of the enemyNames
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new round
        enemyHealth = randomNumber(40, 60);

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

        // if the player is still alive and we're not at the last enemy in the array
        if ( playerHealth > 0 && i < enemyNames.length - 1){

            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, do you want to visit the store before the next round?");

            // if yes, take them to the shop() function
            shop();
        }
    }

    else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}

// after the loop ends, player is either out health or enemies to fight, so run the endGame  function
endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }

    // asl player if they'd like to play again
    var playAgainConfirm = window.confirm ("Would you like to play again?");

    if (playAgainConfirm){
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// shop
var shop = function(){
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt( "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter your choice: 'REFILL', 'UPGRADE', or 'LEAVE'.");

    switch (shopOptionPrompt){
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");

            // increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }

            break;

        case "UPGRADE": //new case
        case "upgrade":
            if(playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!")
            }

            break;

        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;

        default:
            window.alert("You did not pick a vaild option. Try again!");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

//play again
startGame();

//start the game when the page loads
//startGame();