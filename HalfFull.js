var angry = 0;
var calm = 0;
var happy = 0;
var motivated = 0;
var overwhelmed = 0;
var upset = 0;

function AngryClick() {
angry++;
}

function CalmClick() {
calm++;
}

function HappyClick() {
happy++;
}

function MotivatedClick() {
motivated++;
}

function OverwhelmedClick() {
overwhelmed++;
}

function UpsetClick() {
upset++;
}

// if # of buttons clicked on > 14
//    print "Only one answer is permitted for each question"
// if # of buttons clicked on < 14
//    print "Please answer every question"

// onclick "submit" button
function Results(){
  if (angry > calm & happy & motivated & overwhelmed & upset){
    href = "SUBPAGE_angryrecs.html";
  }
  if (calm > angry & happy & motivated & overwhelmed & upset){
    href = "SUBPAGE_calmrecs.html";
  }
  if (happy > angry & calm & motivated & overwhelmed & upset){
    href = "SUBPAGE_happyrecs.html";
  }
  if (motivated > angry & calm & happy & overwhelmed & upset){
    href = "SUBPAGE_motivatedrecs.html";
  }
  if (overwhelmed > angry & calm & happy & motivated & upset){
    href = "SUBPAGE_overwhelmedrecs.html";
  }
  if (upset > angry & calm & happy & motivated & overwhelmed){
    href = "SUBPAGE_upsetecs.html";
  }
}
