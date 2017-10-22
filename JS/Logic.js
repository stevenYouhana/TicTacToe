
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
           eight: '',
           nine: ''
           };

var returnSymbol = function(){
  // if(lastClick == x){
  //   lastClick = o;
  // }
  // else{
  //   lastClick = x;
  // }
  return lastClick;
}
var invertSymbol = function(lastClick){
  if(lastClick == x){
    lastClick = o;
  }
  else{
    lastClick = o;
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
        case 1: squares.one = invertSymbol;
        break;
        case 2: squares.two = invertSymbol;
        break;
        case 3: squares.three = invertSymbol;
        break;
        case 4: squares.four = invertSymbol;
        break;
        case 5: squares.five = invertSymbol;
        break;
        case 6: squares.six = invertSymbol;
        break;
        case 7: squares.seven = invertSymbol;
        break;
        case 8: squares.eight = invertSymbol;
        break;
        case 9: squares.nine = invertSymbol;
        break;
      }
      document.getElementById(id).attributes[2].value = lastClick;
      winCase();
    }
    else{
       document.getElementById(id).attributes[2].value = sqrValue;
    }
    checkSquares(squares);
    computerPlay(chooseSquare());
  }
}
var computerPlay = function(playSquare){
    switch(playSquare){
      case "one": squares.one = lastClick;
        document.getElementById("1").innerHTML = invertSymbol();
      break;
      case "two": squares.two = lastClick;
        document.getElementById("2").innerHTML = invertSymbol();
      break;
      case "three": squares.three = lastClick;
        document.getElementById("3").innerHTML = invertSymbol();
      break;
      case "four": squares.four = lastClick;
        document.getElementById("4").innerHTML = invertSymbol();
      break;
      case "five": squares.five = lastClick;
        document.getElementById("5").innerHTML = invertSymbol();
      break;
      case "six": squares.six = lastClick;
        document.getElementById("6").innerHTML = invertSymbol();
      break;
      case "seven": squares.seven = lastClick;
        document.getElementById("7").innerHTML = invertSymbol();
      break;
      case "eight": squares.eight = lastClick;
        document.getElementById("8").innerHTML = invertSymbol();
      break;
      case "nine": squares.nine = lastClick;
        document.getElementById("9").innerHTML = invertSymbol();
      break;

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
