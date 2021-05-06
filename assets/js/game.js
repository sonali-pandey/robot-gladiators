
// function to generate a random numberic value
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min +1)+min);
    return value;
};

// Game States
//"WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot

// "LOSE" - Player robot's health is zero or less

//You can also log multiplt values at once like this
//console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

//For Loop to display enemy Names
/*for( var i=0; i<enemyNames.length; i++){
    console.log(enemyNames[i]);
}*/


var fight = function(enemy){

// repeat and execute as long as the enemy-robot is alive
while(playerInfo.health > 0 && enemy.health > 0){

    //Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //if yes (true), leave fight
       if (confirmSkip){
            window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
            //subtarct money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money -10);
            console.log("player Money", playerInfo.money);
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
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        //Subtract the value of 'playerInfo.attack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemy.health = Math.max(0, enemy.health-damage);
    
        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
        //Log a resulting message to the console so we know that it worked.

        //check enemy's health
        if (enemy.health <=0){
            window.alert(enemy.name + " has died!");
            break;
        }

        else{
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
    
        // generate random damage value based on enemy's attack power
        var damage = randomNumber(enemy.attack-3, enemy.attack);

        //Subtract the value of 'enemyAttack' from the value of 'playerInfo.health' and use taht result to update the value in the 'playerInfo.health' variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        //Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //Check player's health
        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else{
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
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
    playerInfo.reset();

for(var i=0; i<enemyInfo.length; i++){
    // let player know what round they are in, remember that the array start at 0 so it needs 1 added to it
    if(playerInfo.health>0){
        window.alert("Welcome to Robot Gladiators! Round: " + (i+1));

        // pick new enemy based on the array of the enemyNames
        var pickedEnemyObj = enemyInfo[i];

        // reset enemyHealth before starting new round
        pickedEnemyObj.health  = randomNumber(40, 60);

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyObj);

        // if the player is still alive and we're not at the last enemy in the array
        if ( playerInfo.health > 0 && i < enemyNames.length - 1){

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
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;

        case "UPGRADE": //new case
        case "upgrade":
            playerInfo.upgradeAttack();
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

// player info object
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }
};

//enemy info object
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];


//play again
startGame();

//start the game when the page loads
//startGame();