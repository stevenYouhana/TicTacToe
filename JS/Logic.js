
const x = "X";
const o = "O";
var lastClick = x;
var gameWon = false;

squares = {one: '',
           two: '',
           three: '',
           four: '',
           five: '',
           six: '',
           seven: '',
           eight: ''
           };

var returnSymbol = function(){
  if(lastClick == x){
    lastClick = o;
  }
  else{
    lastClick = "X";
  }
  return lastClick;
}

var freezSqr = function(id){
  if(document.getElementById(id) != ''){
    document.getElementById(id) = document.getElementById(id);
    }
}

var work = function(id){
  if(!(gameWon)){
    var sqrValue = document.getElementById(id).attributes[2].value;
    if(sqrValue == '-'){
      document.getElementById(id).innerHTML = returnSymbol();
      switch(id){
        case 1: squares.one = [lastClick];
        break;
        case 2: squares.two = [lastClick];
        break;
        case 3: squares.three = [lastClick];
        break;
        case 4: squares.four = [lastClick];
        break;
        case 5: squares.five = [lastClick];
        break;
        case 6: squares.six = [lastClick];
        break;
        case 7: squares.seven = [lastClick];
        break;
        case 8: squares.eight = [lastClick];
        break;
        case 9: squares.nine = [lastClick];
        break;
      }
      document.getElementById(id).attributes[2].value = lastClick;
      winCase();
    }
    else{
       document.getElementById(id).attributes[2].value = sqrValue;
    }
  }
}

var winCase = function(){
  if((squares.one==x & squares.two==x & squares.three==x)||
       squares.one==o & squares.two==o & squares.three==o){
    //1 2 3 WIN
    showWinningSqrs(1,2,3);
    gameOver();
  }
  else if((squares.four==x & squares.five==x & squares.six==x)||
       squares.four==o & squares.five==o & squares.six==o){
    //4 5 6 WIN
    showWinningSqrs(4,5,6);
    gameOver();
  }
  else if((squares.seven==x & squares.eight==x & squares.nine==x)||
       squares.seven==o & squares.eight==o & squares.nine==o){
   showWinningSqrs(7,8,9);
   gameOver();
   //7 8 9 WIN
  }
  else if((squares.one==x & squares.four==x & squares.seven==x)||
       squares.one==o & squares.four==o & squares.seven==o){
   showWinningSqrs(1,4,7);
   gameOver();
  //1 4 7 WIN
  }
  else if((squares.two==x & squares.five==x & squares.eight==x)||
       squares.two==o & squares.five==o & squares.eight==o){
   showWinningSqrs(2,5,8);
   gameOver();
  //2 5 8 WIN
  }
  else if((squares.three==x & squares.six==x & squares.nine==x)||
       squares.three==o & squares.six==o & squares.nine==o){
   showWinningSqrs(3,6,9);
   gameOver();
  //3 6 9 WIN
  }
  else if((squares.one==x & squares.five==x & squares.nine==x)||
       squares.one==o & squares.five==o & squares.nine==o){
   showWinningSqrs(1,5,9);
   gameOver();
  //1 5 9 WIN
  }
  else if((squares.three==x & squares.five==x & squares.seven==x)||
       squares.three==o & squares.five==o & squares.seven==o){
  showWinningSqrs(3,5,7);
  gameOver();
  //3 5 7 WIN
  }
  console.log("TEST: "+squares.one+" "+squares.two+" "+squares.three);
}

var showWinningSqrs = function(id1, id2, id3){
   var sqr1 = document.getElementById(id1);
   var sqr2 = document.getElementById(id2);
   var sqr3 = document.getElementById(id3);

   sqr1.style.backgroundColor = "green";
   sqr2.style.backgroundColor = "green";
   sqr3.style.backgroundColor = "green";
}

var gameOver = function(){
 gameWon = true;
}

var newGame = function(){
 for(i=1; i<10; i++){
     document.getElementById(i).innerHTML = '-';
     document.getElementById(i).style.backgroundColor = '#ffcc99';
     document.getElementById(i).attributes[2].value = '-';
 }
 for(var o in squares){
   squares[o] = '';
 }
 gameWon = false;
}