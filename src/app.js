// Progression 1: create a function "fontSize", which takes size as the argument
function fontSize(size) {
    // Progression 2: return a function -> which changes the font size of the body. 
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  }

// Progression 3: Call the function three times with 12,14,16 as px value, and store those in three different variable
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

// Progression 4: use onclick eventHandler and reasign the values of px. 
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

