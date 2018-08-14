var angry = 0;
var calm = 0;
var happy = 0;
var motivated = 0;
var overwhelmed = 0;
var upset = 0;

function ButtonClick(id){
  id.style.backgroundColor = "#F0F8FF";
  id.style.color = "black";
}

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
  var link = document.getElementById("results link");
  if ((angry>calm) && (angry>happy) && (angry>motivated) && (angry>overwhelmed) && (angry>upset)){
     link.setAttribute('href', "SUBPAGE_angryrecs.html");
  }
  else if ((calm>angry) && (calm>happy) && (calm>motivated) && (calm>overwhelmed) && (calm>upset)){
    link.setAttribute('href', "SUBPAGE_calmrecs.html");
  }
  else if ((happy>angry) && (happy>calm) && (happy>motivated) && (happy>overwhelmed) && (happy>upset)){
    link.setAttribute('href', "SUBPAGE_happyrecs.html");
  }
  else if ((motivated>angry) && (motivated>calm) && (motivated>happy) && (motivated>overwhelmed) && (motivated>upset)){
    link.setAttribute('href', "SUBPAGE_motivatedrecs.html");
  }
  else if ((overwhelmed>angry) && (overwhelmed>calm) && (overwhelmed>happy) && (overwhelmed>motivated) && (overwhelmed>upset)){
    link.setAttribute('href', "SUBPAGE_overwhelmedrecs.html");
  }
  else if ((upset>angry) && (upset>calm) && (upset>happy) && (upset>motivated) && (upset>overwhelmed)){
    link.setAttribute('href', "SUBPAGE_upsetrecs.html");
  }
  else {
    link.setAttribute('href', "PAGE_intro.html");
  }
}
