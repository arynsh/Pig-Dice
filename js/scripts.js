// back-end logic
function Player (name, isActive) {
  this.name = name,
  this.score = 0,
  this.totalScore = 0,
  this.number = 0,
  this.active = isActive
}

Player.prototype.roll = function () {
  this.number = Math.ceil( Math.random() * 6 );
}

Player.prototype.addScore = function () {
  if (this.number !== 1 ){
    this.totalScore += this.number;
    console.log(this.totalScore);
  } else if (this.number === 1) {
    this.score = 0;
    this.totalScore = 0;
  }
}

Player.prototype.changeActive = function () {
  if (this.active === true) { //checks player is active, if active player is not set to inactive
    this.active = false;
  } else {                    //otherwise, inactive is now set to active
    this.active = true;
  }
}

Player.prototype.alert = function() {
  if (this.totalScore >= 100) {
    alert("Congrats! You have won the game!");
  }
}
// user-interface
$(document).ready(function() {
  var newPlayer  = new Player($("input#name").val(), true);
  var newPlayer2  = new Player($("input#name").val(), false);
  $("#formOne").submit(function(event){
    event.preventDefault();
    // Player 1
    if (newPlayer.active === true) {
      newPlayer.roll();
      newPlayer.addScore();
      newPlayer.alert();
      $(".whatRoll").text(newPlayer.number);
      $(".score").text(newPlayer.totalScore);
    } else {
      newPlayer2.roll();
      newPlayer2.addScore();
      newPlayer2.alert();
      $(".whatRoll").text(newPlayer2.number);
      $(".score").text(newPlayer2.totalScore);
    }
  });

  // "HOLD" button functionality
  $(".pause").click(function() {
    newPlayer.changeActive();
    newPlayer2.changeActive();
    // TODO: implement hold feature to swith active player
  });
 });
