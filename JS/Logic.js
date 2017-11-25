
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

var invertSymbol = function(){
  if(lastClick == x){
    lastClick = o;
  }
  else{
    lastClick = x;
  }
}
var freezSqr = function(id){
  if(document.getElementById(id) != ''){
    document.getElementById(id) = document.getElementById(id);
    }
}

var sqrValue;

var work = function(id){
  if(!(gameWon)){
    sqrValue = document.getElementById(id).attributes[2].value;
    if(sqrValue == '-'){
      console.log("SQRVALUE: "+sqrValue);
      document.getElementById(id).innerHTML = lastClick;
      switch(id){
        case 1: squares.one = lastClick;
        break;
        case 2: squares.two = lastClick;
        break;
        case 3: squares.three = lastClick;
        break;
        case 4: squares.four = lastClick;
        break;
        case 5: squares.five = lastClick;
        break;
        case 6: squares.six = lastClick;
        break;
        case 7: squares.seven = lastClick;
        break;
        case 8: squares.eight = lastClick;
        break;
        case 9: squares.nine = lastClick;
        break;
      }
      document.getElementById(id).attributes[2].value = lastClick;
      invertSymbol();
      winCase();

      checkSquares(squares);
      window.setTimeout('computerPlay(chooseSquare(),sqrValue)',500);
    }
    else{
       document.getElementById(id).attributes[2].value = sqrValue;
    }
    console.log("squareValue = "+sqrValue);
  }
}
var computerPlay = function(playSquare,clickedSquare){
  if(!(gameWon) && (clickedSquare == '-')){
    winCase();
    switch(playSquare){
      case "one": squares.one = lastClick;
        document.getElementById("1").innerHTML = lastClick;
        document.getElementById("1").attributes[2].value = lastClick;
      break;
      case "two": squares.two = lastClick;
        document.getElementById("2").innerHTML = lastClick;
        document.getElementById("2").attributes[2].value = lastClick;
      break;
      case "three": squares.three = lastClick;
        document.getElementById("3").innerHTML = lastClick;
        document.getElementById("3").attributes[2].value = lastClick;
      break;
      case "four": squares.four = lastClick;
        document.getElementById("4").innerHTML = lastClick;
        document.getElementById("4").attributes[2].value = lastClick;
      break;
      case "five": squares.five = lastClick;
        document.getElementById("5").innerHTML = lastClick;
        document.getElementById("5").attributes[2].value = lastClick;
      break;
      case "six": squares.six = lastClick;
        document.getElementById("6").innerHTML = lastClick;
        document.getElementById("6").attributes[2].value = lastClick;
      break;
      case "seven": squares.seven = lastClick;
        document.getElementById("7").innerHTML = lastClick;
        document.getElementById("7").attributes[2].value = lastClick;
      break;
      case "eight": squares.eight = lastClick;
        document.getElementById("8").innerHTML = lastClick;
        document.getElementById("8").attributes[2].value = lastClick;
      break;
      case "nine": squares.nine = lastClick;
        document.getElementById("9").innerHTML = lastClick;
        document.getElementById("9").attributes[2].value = lastClick;
      break;
    }
    winCase();
    invertSymbol();
  }
}
var winCase = function(){
  draw();
  if((squares.one==x & squares.two==x & squares.three==x)||
       squares.one==o & squares.two==o & squares.three==o){
    //1 2 3 WIN
    showWinningSqrs(1,2,3);

  }
  else if((squares.four==x & squares.five==x & squares.six==x)||
       squares.four==o & squares.five==o & squares.six==o){
    //4 5 6 WIN
    showWinningSqrs(4,5,6);

  }
  else if((squares.seven==x & squares.eight==x & squares.nine==x)||
       squares.seven==o & squares.eight==o & squares.nine==o){
   showWinningSqrs(7,8,9);

   //7 8 9 WIN
  }
  else if((squares.one==x & squares.four==x & squares.seven==x)||
       squares.one==o & squares.four==o & squares.seven==o){
   showWinningSqrs(1,4,7);

  //1 4 7 WIN
  }
  else if((squares.two==x & squares.five==x & squares.eight==x)||
       squares.two==o & squares.five==o & squares.eight==o){
   showWinningSqrs(2,5,8);

  //2 5 8 WIN
  }
  else if((squares.three==x & squares.six==x & squares.nine==x)||
       squares.three==o & squares.six==o & squares.nine==o){
   showWinningSqrs(3,6,9);

  //3 6 9 WIN
  }
  else if((squares.one==x & squares.five==x & squares.nine==x)||
       squares.one==o & squares.five==o & squares.nine==o){
   showWinningSqrs(1,5,9);

  //1 5 9 WIN
  }
  else if((squares.three==x & squares.five==x & squares.seven==x)||
       squares.three==o & squares.five==o & squares.seven==o){
  showWinningSqrs(3,5,7);
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
   gameOver();
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
var draw = function(){
  var count = 0;
  for(const square in squares){
    if(squares[square] != '' &&
      document.getElementById(count+1).style.backgroundColor != "green"){
      count++;
    }
    if(count === 9){
      alert("It's a draw!");
    }
  }
}
