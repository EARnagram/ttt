// Creates cells array
var cells = document.getElementsByClassName("cells");

// Defines colors in rgb
var colorX = "rgb(237, 237, 9)";
var colorO = "rgb(204, 119, 34)";
var colorTie = "rgb(20, 37, 203)";
var colorHover = "rgb(91,103,212)";
var colorXHover = "rgb(255,255,102)"
var colorOHover = "rgb(255,188,122)"
var colorXHoverTrans = "rgba(237,237,9,.7)";
var colorOHoverTrans = "rgba(204, 119, 34,.7)";

//Sets opening color
var playColor = "#EDED09";

// Creates hover color
var hoverFunc = function() {
    $( '.cells' ).hover(
    function() {
      $( this ).not(".played").css( "background-color", '#5B67D4' );
    }, function() {
      $( this ).not(".played").css( "background-color",'#1425CB' );
    });
  }

// Runs hover function
hoverFunc();

// cycles between colors and runs game
for(var i=0;i<cells.length;i++){
    cells[i].addEventListener("click", function() {
     if (this.className !== "cells X played" && this.className !== "cells O played") {
      this.style.backgroundColor = playColor;
      if (playColor === "#EDED09") {
        playColor = "#CC7722";
        this.className += " X played";
        //hoverFunc();
      } else {
        playColor = "#EDED09";
        this.className += " O played";
        //hoverFunc();
      }
    played = document.getElementsByClassName("played");
     }
     if (getWinner() == colorX) {
      xWins();
      } else if (getWinner() == colorO) {
      oWins();
      } else if (played.length === 9) {
      tie()
      }
    });
}

// Tie function - gives board to next player
function tie() {
  $( "section" ).fadeOut("slow");
  $( "body" ).animate({
    backgroundColor: "rgb(20,37,203)"
  }, 1200);
  $( "section" ).fadeIn("slow");
  setTimeout(revertCells, 602);
}

// What happens when x wins - gives board to Xanthic
function xWins () {
  $( "section" ).fadeOut("slow");
  $( "body" ).animate({
    backgroundColor: "rgb(237, 237, 9)"
  }, 1200);
  $( "section" ).fadeIn("slow");
  setTimeout(revertCells, 602);
  playColor = "#EDED09";
}

// What happens when o wins - gives board to Ochre
function oWins () {
  $( "section" ).fadeOut("slow");
    $( "body" ).animate({
    backgroundColor: "rgb(204, 119, 34)"
  }, 1200);;
  $( "section" ).fadeIn("slow");
  setTimeout(revertCells, 602);
  playColor = "#CC7722";
}

// Implements rules of game and decides victor
function getWinner() {
  for (var i= 0; i < 2; i++) {
    var currentColor = "";
    if (i == 0) {
      currentColor = colorX;
    } else if (i == 1) {
      currentColor = colorO;
    } for (var j = 0; j < cells.length; j++) {
        if (cells[0].style.backgroundColor == currentColor && cells[1].style.backgroundColor == currentColor && cells[2].style.backgroundColor == currentColor) {
          return currentColor;
        } else if (cells[0].style.backgroundColor == currentColor && cells[3].style.backgroundColor == currentColor && cells[6].style.backgroundColor == currentColor) {
          return currentColor;
        } else if (cells[0].style.backgroundColor == currentColor && cells[4].style.backgroundColor == currentColor && cells[8].style.backgroundColor == currentColor) {
          return currentColor;
        } else if (cells[3].style.backgroundColor == currentColor && cells[4].style.backgroundColor == currentColor && cells[5].style.backgroundColor == currentColor) {
          return currentColor;
        } else if (cells[1].style.backgroundColor == currentColor && cells[4].style.backgroundColor == currentColor && cells[7].style.backgroundColor == currentColor) {
          return currentColor;
        } else if (cells[2].style.backgroundColor == currentColor && cells[5].style.backgroundColor == currentColor && cells[8].style.backgroundColor == currentColor) {
          return currentColor;
        } else if (cells[2].style.backgroundColor == currentColor && cells[4].style.backgroundColor == currentColor && cells[6].style.backgroundColor == currentColor) {
          return currentColor;
        } else if (cells[6].style.backgroundColor == currentColor && cells[7].style.backgroundColor == currentColor && cells[8].style.backgroundColor == currentColor) {
          return currentColor;
        }
    }
  }
}

// resets cells
function revertCells() {
  $( 'div' ).removeClass( 'O played' );
  $( 'div' ).removeClass( 'X played' );
  $( 'div' ).css("background-color","#1425CB");
}

// Colors log
// Xanthic = "#EDED09" XanthicHover = "#FFFF82"
// Ochre = "#CC7722" OchreHover = #FFCD9B
// Tie= "#1425CB" Hover= "#5B67D4"


// Cyles between different colored hovers
// var hoverFunc = function() {
//    if (playColor === "#EDED09") {
//     $( '.cells' ).hover(
//     function() {
//       $( this ).not(".played").css( "background-color", '#FFFF82' );
//     }, function() {
//       $( this ).not(".played").css( "background-color",'#1425CB' );
//     });
//   }
//   } else if (playColor === "#CC7722") {
//     $( '.cells' ).hover(
//     function() {
//       $( this ).not(".played").css( "background-color",'#FFCD9B' );
//     }, function() {
//       $( this ).not(".played").css( "background-color",'#1425CB' );
//     });
//   };
// }
