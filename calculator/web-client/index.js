var calc = 0.0;
var temp = '';
var op = '';

const buttonMapping = {
  48: () => {
    temp += '0';
  },
  49: () => {
    temp += '1';
  },
  50: () => {
    temp += '2';
  },
  51: () => {
    temp += '3';
  },
  52: () => {
    temp += '4';
  },
  53: () => {
    temp += '5';
  },
  54: () => {
    temp += '6';
  },
  55: () => {
    temp += '7';
  },
  56: () => {
    temp += '8';
  },
  57: () => {
    temp += '9';
  },
  61: () => {
    calc = calculate(calc, parseFloat(temp));
    op = '=';
    temp = '';
  },
  13: () => {
    calc = calculate(calc, parseFloat(temp));
    op = '=';
    temp = '';
  },
  107: () => {
    calc = calculate(calc, parseFloat(temp));
    op = '+';
    temp = '';
  },
  43: () => {
    calc = calculate(calc, parseFloat(temp));
    op = '+';
    temp = '';
  },
  173: () => {
    calc = calculate(calc, parseFloat(temp));
    op = '-';
    temp = '';
  },
  106: () => {
    calc = calculate(calc, parseFloat(temp));
    op = '*';
    temp = '';
  },
  190: () => {
    temp += '.';
  },
  191: () => {
    if (parseFloat(temp) != 0) {
      calc = calculate(calc, parseFloat(temp));
      op = '/';
      temp = '';
    } else {
      $('.display').html('<p>Division by 0<p>');
      calc = 0.0;
      temp = '';
    }
  },
  46: () => {
    if (temp != '') temp = temp.slice(0, temp.length - 1);
  },
  27: () => {
    calc = 0.0;
    temp = '';
    op = '';
  },
};

function calculate(x, y) {
  if (op == '') {
    return y;
  } else if (op == '=') {
    op = '';
    return x;
  }
  switch (op) {
    case '+':
      var z = parseFloat(x) + parseFloat(y);
      return z;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
  }
}

/**
 * Displays the numbers/calculations
 */
function display() {
  // nicely format numbers to 4 decimals
  calc = calc.toString();
  if (calc.indexOf('.') != -1) {
    calc = calc.slice(0, calc.indexOf('.') + 5);
    calc = Number(calc);
  }
  if (temp.indexOf('.') != -1) temp = temp.slice(0, temp.indexOf('.') + 5);

  if (op == '') {
    // at start/clear or after '='
    if (calc == 0) {
      // start/clear or calculations = 0
      if (temp == '')
        // fresh start/clear
        $('.display').html('<p>0&nbsp;</p>');
      // started putting in first number after start/clear
      else $('.display').html('<p>' + temp + '&nbsp;</p>');
    }
  } else if (op == '=') {
    // after '='
    if (temp == '') $('.display').html('<p>' + calc + '&nbsp;</p>');
    else $('.display').html('<p>' + temp + '&nbsp;</p>');
  } // display normally
  else
    $('.display').html(
      '<p><small>' + calc + '</small> ' + op + ' ' + temp + '&nbsp;</p>'
    );
}

$(document).ready(function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  $('.calculator').css('background', `#${randomColor}`);
  $(document).keydown(function (event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (typeof buttonMapping[key] === 'function') buttonMapping[key]();
    display();
  });
  display();

  // Button 1
  $('#btn-1').on('click', function () {
    temp += '1';
    display();
  });

  // Button 2
  $('#btn-2').on('click', function () {
    temp += '2';
    display();
  });

  // Button 3
  $('#btn-3').on('click', function () {
    temp += '3';
    display();
  });

  // Button 4
  $('#btn-4').on('click', function () {
    temp += '4';
    display();
  });

  // Button 5
  $('#btn-5').on('click', function () {
    temp += '5';
    display();
  });

  // Button 6
  $('#btn-6').on('click', function () {
    temp += '6';
    display();
  });

  // Button 7
  $('#btn-7').on('click', function () {
    temp += '7';
    display();
  });

  // Button 8
  $('#btn-8').on('click', function () {
    temp += '8';
    display();
  });

  // Button 9
  $('#btn-9').on('click', function () {
    temp += '9';
    display();
  });

  // Button 0
  $('#btn-0').on('click', function () {
    temp += '0';
    display();
  });

  // Button .
  $('#btn-point').on('click', function () {
    temp += '.';
    display();
  });

  // Button +
  $('#btn-plus').on('click', function () {
    calc = calculate(calc, parseFloat(temp));
    op = '+';
    temp = '';
    display();
  });

  // Button -
  $('#btn-minus').on('click', function () {
    calc = calculate(calc, parseFloat(temp));
    op = '-';
    temp = '';
    display();
  });

  // Button x
  $('#btn-mul').on('click', function () {
    calc = calculate(calc, parseFloat(temp));
    op = '*';
    temp = '';
    display();
  });

  // Button /
  $('#btn-div').on('click', function () {
    if (parseFloat(temp) != 0) {
      calc = calculate(calc, parseFloat(temp));
      op = '/';
      temp = '';
      display();
    } else {
      $('.display').html('<p>Division by 0<p>');
      calc = 0.0;
      temp = '';
    }
  });

  // Button =
  $('#btn-equal').on('click', function () {
    calc = calculate(calc, parseFloat(temp));
    op = '=';
    temp = '';
    display();
  });

  // Button Clear
  $('#btn-clear').on('click', function () {
    calc = 0.0;
    temp = '';
    op = '';
    display();
  });

  // Button CE
  $('#btn-ce').on('click', function () {
    if (temp != '') temp = temp.slice(0, temp.length - 1);
    display();
  });
});
