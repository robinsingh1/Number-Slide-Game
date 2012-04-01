/* js library */

var Game = new game();
var Board = new board();

function new_game() {
	//New Game and New Board
	Game.new_game();
	Board.new_board();
}

function alert_position(){
	alert(one_piece.position);
}

function collision($div1, $div2) {   
    var x1 = $div1.offset().left;   
    var y1 = $div1.offset().top;   
    var h1 = $div1.outerHeight(true);   
    var w1 = $div1.outerWidth(true);   
    var b1 = y1 + h1 / 1.5;   
    var r1 = x1 + w1;   
    var x2 = $div2.offset().left;   
    var y2 = $div2.offset().top;   
    var h2 = $div2.outerHeight(true);   
    var w2 = $div2.outerWidth(true);   
    var b2 = y2 + h2;   
    var r2 = x2 + w2;

       
    if (b1 > y2) {     
        return true;   
    }   
    return false;
}


function stop_movement_t(y2) {   
    var y1 = 0;   
    while (y1 != y2) {    y1 = $('#div1').offset().top;     
        if (y1 == y2) {       
            return true;     
        }     
        return false;   
    }
}

function is_touching() {
    var top_probe = empty.top_y + 30;
    var left_probe = empty.left_x + 30;
    var right_probe = empty.right_x + 30; 
    var bottom_probe = empty.bottom_y + 30;

    //mark columns and row
}

window.setInterval(function () {}, 200);
/*  Refactoring the size of the blocks depending on the size of the window -- Come back to this
   // For Now just focus on static blocks
$(window).resize(function() {
  var width = $('#container').width();
  width = parseInt(width);
  var box_width = (width - 40)/3;
  box_width = box_width.toString();
  $('.box').css('height', box_width);
  $('.box').css('width', box_width);
  var height = width.toString();
  $('#container').css('height', height);
});
*/
