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

function OverwhelmedClick() {
overwhelmed++;
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
  if ((overwhelmed>angry) && (overwhelmed>calm) && (overwhelmed>happy) && (overwhelmed>motivated) && (overwhelmed>upset)){
    window.location.href = 'SUBPAGE_overwhelmedrecs.html';
  }
  else if ((angry>calm) && (angry>happy) && (angry>motivated) && (angry>overwhelmed) && (angry>upset)){
     window.location.href = 'SUBPAGE_angryrecs.html';
  }
  else if ((calm>angry) && (calm>happy) && (calm>motivated) && (calm>overwhelmed) && (calm>upset)){
    window.location.href = 'SUBPAGE_calmrecs.html';
  }
  else if ((happy>angry) && (happy>calm) && (happy>motivated) && (happy>overwhelmed) && (happy>upset)){
    window.location.href = 'SUBPAGE_happyrecs.html';
  }
  else if ((motivated>angry) && (motivated>calm) && (motivated>happy) && (motivated>overwhelmed) && (motivated>upset)){
    window.location.href = 'SUBPAGE_motivatedrecs.html';
  }
  else if ((upset>angry) && (upset>calm) && (upset>happy) && (upset>motivated) && (upset>overwhelmed)){
    window.location.href = 'SUBPAGE_upsetrecs.html';
  }
  else{
    window.location.href = 'SUBPAGE_overwhelmedrecs.html';
  }
}

function ClickIcon() {
  if (document.getElementById("tiptext").innerHTML != ""){
    (document.getElementById("tiptext").innerHTML = "");
  }
  else{
    document.getElementById("tiptext").innerHTML = `1. EXCERCISE: Physical activity is key in releasing your anger and tension. Go on a quick run, do some stretches or play outside for a bit. <br> 2. WAIT: Waiting for a bit and getting into the right headspace before expressing your anger can be extremely helpful. Calmly expressing your concerns is always better than saying something when you're not thinking clearly. <br> 3. 'I' STATEMENTS: Stick to using 'I' statements when you're expressing your frustration. This can help to avoid criticizing and placing blame, which will only create more tension.`;
  }

}
