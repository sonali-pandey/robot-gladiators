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
            playerMoney = playerMoney -10;
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

        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;
    
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
    
        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use taht result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;

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

for(var i=0; i<enemyNames.length; i++){
    // let player know what round they are in, remember that the array start at 0 so it needs 1 added to it
    if(playerHealth>0){
        window.alert("Welcome to Robot Gladiators! Round: " + (i+1));
    }

    else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    // pick new enemy based on the array of the enemyNames
    var pickedEnemyName = enemyNames[i];
    // reset enemyHealth before starting new round
    enemyHealth = 50;
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}