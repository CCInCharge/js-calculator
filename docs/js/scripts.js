var inputString = "";
var result = 0;

/*
Input validation rules:
- Equals sign will do nothing if the last input was an operator
- Decimal sign can be used only once per number
- - A number is defined as a set of digits between operands
- - If there are no operands, the entire input is one number
- Operands must not be next to another operand
- Operands can only be inserted after a digit
*/

function evalString() {
  return eval(inputString);
}

function addChar(newChar) {
  inputString += newChar;
}

function showResult(char) {
  $("#display").html(char);
}

function updateStr(newChar) {
  /* If input is a digit, allow */
  if (newChar.match(/[0-9]/))
  {
    addChar(newChar);
    showResult(inputString);
    return;
  }
  /* If input is an operator, check that previous input is a number */
  else if (newChar.match(/[+\-*\/]/))
  {
    if (inputString[inputString.length - 1].match(/[0-9.]/))
    {
      addChar(newChar);
      showResult(inputString);
    }
    return;
  }
  /* If user hits equals button, check that the last input is a number */
  else if (newChar.match(/[=]/))
  {
    if (inputString[inputString.length - 1].match(/[0-9.]/))
    {
      result = evalString();
      showResult(inputString + "=" + result.toString());
      inputString = "";
    }
    return;
  }
  /* If user hits decimal sign, check that it is used only once this number
  - Decimal sign can be used only once per number
  - - A number is defined as a set of digits between operands
  - - If there are no operands, the entire input is one number
  */
  else if (newChar.match(/[.]/))
  {
    /* Finds the instance of the last operator */
    var opMatch = inputString.match(/[+\-*\/](?!.*[+\-*\/])/);
    var lastOp;
    if (opMatch)
    {
      lastOp = opMatch.index;
    }
    else
    {
      lastOp = 0;
    }

    /* Current number is from the last operator to the last index */
    if (! (inputString.substring(lastOp, inputString.length).match(/[.]/)) )
    {
      if (inputString.length === 0)
      {
        addChar("0");
      }
      addChar(".");
      showResult(inputString);
    }
    return;
  }
}

$(document).ready(function(){
  showResult("0");
  $("button[value=1]").click(function(){
    updateStr("1");
  });
  $("button[value=2]").click(function(){
    updateStr("2");
  });
  $("button[value=3]").click(function(){
    updateStr("3");
  });
  $("button[value=4]").click(function(){
    updateStr("4");
  });
  $("button[value=5]").click(function(){
    updateStr("5");
  });
  $("button[value=6]").click(function(){
    updateStr("6");
  });
  $("button[value=7]").click(function(){
    updateStr("7");
  });
  $("button[value=8]").click(function(){
    updateStr("8");
  });
  $("button[value=9]").click(function(){
    updateStr("9");
  });
  $("button[value=0]").click(function(){
    updateStr("0");
  });
  $('button[value="."]').click(function(){
    updateStr(".");
  });
  $('button[value="+"]').click(function(){
    updateStr("+");
  });
  $('button[value="/"]').click(function(){
    updateStr("/");
  });
  $('button[value="*"]').click(function(){
    updateStr("*");
  });
  $('button[value="-"]').click(function(){
    updateStr("-");
  });
  $('button[value="="]').click(function(){
    updateStr("=");
  });
  $('button[value="AC"]').click(function(){
    inputString = "";
    showResult("0");
  });
});
