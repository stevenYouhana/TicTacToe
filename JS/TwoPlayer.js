
 var freeSquares = ['','','','','','','','',''];
  var checkSquares = function(square){
    freeSquares = ['','','','','','','','',''];
    var i = 0;
    for(var o in square){
      if(square[o] == ''){
        freeSquares[i] = o;
        i++;
      }
    }
    console.log(freeSquares);
  }
  var max = 7;
  var chooseSquare = function(){
  var chosen = Math.floor(Math.random()*(max-0));
  max--;

  if(max < 0){
    console.log("limit")
      return "limit!";
  }
  else{
    console.log("chose: "+freeSquares[chosen]);
    return freeSquares[chosen];
    }
  }

  var testClass = function(){
    return "TESTING TwoPlayer";
  }
